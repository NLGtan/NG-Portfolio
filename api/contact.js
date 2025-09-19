// /api/contact.js
const nodemailer = require("nodemailer");
const dns = require("dns").promises;

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();

  // Parse body safely (Vercel may pass string or object)
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body || "{}"); } catch {}
  }
  const { name = "", email = "", message = "", honey = "" } = body || {};
  if (honey) return res.status(200).json({ ok: true }); // honeypot

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ ok: false, error: "All fields are required." });
  }
  if (!emailRe.test(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email." });
  }

  // ---- Load and normalize envs (with safe defaults) ----
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASS || "";
  const to   = process.env.MAIL_TO   || user;
  const from = process.env.MAIL_FROM || user; // best deliverability if same as SMTP_USER

  // Helper: escape HTML
  const esc = (s) =>
    String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  try {
    // Helpful logs while setting up (printed in `vercel dev` terminal / Vercel logs)
    console.log("[contact] env:", { host, port, hasUser: !!user, hasPass: !!pass });
    try {
      const { address } = await dns.lookup(host);
      console.log("[contact] DNS:", host, "->", address);
    } catch (e) {
      console.log("[contact] DNS lookup failed:", e.message);
    }
    if (!user || !pass) throw new Error("Missing SMTP_USER or SMTP_PASS");

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // TLS on 465
      auth: { user, pass },
    });

    // Verify connection/auth first so failures are obvious
    await transporter.verify().then(() => console.log("[contact] SMTP OK"));

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: "New message from portfolio",
      html: `
        <div style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.5">
          <h2 style="margin:0 0 12px">New portfolio message</h2>
          <p><b>Name:</b> ${esc(name)}</p>
          <p><b>Email:</b> ${esc(email)}</p>
          <div style="white-space:pre-wrap;border-left:3px solid #eee;padding-left:12px">${esc(message)}</div>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("[contact] ERROR:", e);
    return res.status(500).json({ ok: false, error: "Failed to send. Check server logs." });
  }
};
