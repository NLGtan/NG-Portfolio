import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import { ReactComponent as Em } from "../Components/img/mail.svg";
import Me from "../Components/img/messenger.png";
import { ReactComponent as Cp } from "../Components/img/call.svg";
import { ReactComponent as Git } from "../Components/img/logo-github.svg";
import { ReactComponent as Lk } from "../Components/img/Linkedin-logo.svg";
import { ReactComponent as Ig } from "../Components/img/logo-instagram.svg";
import arrowLottie from "../Components/animations/scroll_up.json";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInView: false,
      name: "",
      email: "",
      message: "",
      honey: "", // honeypot
      sending: false,
      sent: false,
      error: "",
    };
    this.contactRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (!this.contactRef.current) return;
    const { top, bottom } = this.contactRef.current.getBoundingClientRect();
    const isInView = top < window.innerHeight && bottom > 0;
    this.setState({ isInView });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, error: "", sent: false });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message, honey, sending } = this.state;
    if (sending) return;

    if (!name.trim() || !email.trim() || !message.trim()) {
      this.setState({ error: "Please fill out all fields." });
      return;
    }

    try {
      this.setState({ sending: true, error: "" });

      // CRA-friendly: REACT_APP_* in dev, else same-origin /api/contact
      const endpoint = process.env.REACT_APP_CONTACT_API_URL || "/api/contact";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, honey }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to send.");

      this.setState({
        sent: true,
        name: "",
        email: "",
        message: "",
        honey: "",
      });
    } catch (err) {
      this.setState({ error: err.message || "Something went wrong." });
    } finally {
      this.setState({ sending: false });
    }
  };

  render() {
    const { isInView, name, email, message, honey, sending, sent, error } =
      this.state;

    return (
      <section
        data-theme="light"
        ref={this.contactRef}
        className="w-full bg-white scroll-mt-24 pt-24"
      >
        {/* Heading */}
        <motion.h1
          id="Let's Talk"
          className="font-sat font-thin text-[clamp(2.25rem,6vw,4.5rem)] text-center pt-12 md:pt-16 pb-6 md:pb-10"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          CONTACT ME
        </motion.h1>

        {/* Main grid */}
        <div className="container max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-14 lg:gap-16">
          {/* LEFT — form and intro */}
          <div className="pt-2 lg:col-span-7">
            <motion.h2
              className="font-sat font-black text-[clamp(1.75rem,3.5vw,2.25rem)] leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
            >
              Have an{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                awesome
              </span>{" "}
              idea?
            </motion.h2>

            <motion.h2
              className="font-sat font-black text-[clamp(1.75rem,3.5vw,2.25rem)] leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            >
              Let’s bring it to{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                life
              </span>
              .
            </motion.h2>

            <motion.p
              className="font-sat text-[clamp(1rem,2vw,1.1rem)] text-gray-600 mt-4 md:mt-5 max-w-prose leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            >
              I’m open for freelance opportunities or internships in startups,
              agencies, and design studios.
            </motion.p>

            {/* FORM */}
            <form
              onSubmit={this.handleSubmit}
              className="mt-8 mb-12 space-y-6 w-full max-w-xl"
            >
              {/* Status messages */}
              {sent && (
                <div className="rounded-lg border border-green-200 bg-green-50 text-green-700 px-3 py-2 text-sm">
                  Thanks! Your message was sent.
                </div>
              )}
              {!!error && (
                <div className="rounded-lg border border-red-200 bg-red-50 text-red-700 px-3 py-2 text-sm">
                  {error}
                </div>
              )}

              {/* Honeypot (hidden) */}
              <input
                type="text"
                name="honey"
                value={honey}
                onChange={this.handleChange}
                className="hidden"
                autoComplete="off"
                tabIndex="-1"
              />

              <motion.div
                className="flex flex-col md:flex-row gap-6"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
              >
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  placeholder="Your name"
                  required
                  autoComplete="name"
                  className="flex-1 border-b-2 border-gray-300 py-4 md:py-5 text-base md:text-lg focus:outline-none focus:border-purple-500"
                  aria-label="Your name"
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Your email"
                  required
                  autoComplete="email"
                  className="flex-1 border-b-2 border-gray-300 py-4 md:py-5 text-base md:text-lg focus:outline-none focus:border-purple-500"
                  aria-label="Your email"
                />
              </motion.div>

              <motion.textarea
                name="message"
                value={message}
                onChange={this.handleChange}
                placeholder="Your message"
                required
                className="w-full border-b-2 border-gray-300 h-36 md:h-40 py-4 md:py-5 text-base md:text-lg focus:outline-none focus:border-purple-500 resize-y"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
                aria-label="Your message"
              />

              <motion.button
                type="submit"
                disabled={sending}
                className={`mt-2 flex items-center justify-center
                  mx-auto md:mx-0
                  w-fit md:w-auto
                  px-6 md:px-10 py-3 md:py-3.5
                  text-sm md:text-base
                  font-sat font-medium text-black border-2 border-black rounded-full
                  bg-transparent shadow transition-all duration-500
                  ${
                    sending
                      ? "opacity-70 cursor-not-allowed"
                      : "cursor-pointer hover:bg-gradient-to-r hover:from-[#ED738F] hover:to-[#AB45CA] hover:text-white hover:border-transparent"
                  }`}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
              >
                {sending ? "Sending…" : "Send Message"}
              </motion.button>
            </form>
          </div>

          {/* RIGHT — details / social / location */}
          <motion.div
            className="space-y-8 md:space-y-10 lg:space-y-12 lg:col-span-5 lg:pl-16 lg:ml-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
          >
            {/* Contact details */}
            <div>
              <h3 className="font-sat font-black text-[clamp(1.25rem,2.2vw,1.5rem)] pb-2">
                Contact Details
              </h3>
              <div className="flex flex-col space-y-4 text-[clamp(1rem,1.8vw,0rem)]">
                <div className="flex items-center gap-3">
                  <Em className="w-[24px] h-[24px]" />
                  <a
                    href="mailto:gaborne.neithanlouisn@gmail.com"
                    className="relative group w-fit"
                  >
                    gaborne.neithanlouisn@gmail.com
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <img src={Me} alt="Messenger" className="w-[24px] h-[24px]" />
                  <a
                    href="https://m.me/neithan.gaborne"
                    target="_blank"
                    rel="noreferrer"
                    className="relative group w-fit"
                  >
                    Neithan Louis N. Gaborne
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Cp className="w-[24px] h-[24px]" />
                  <a href="tel:+639686494396" className="relative group w-fit">
                    +63 968 649 4396
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
                  </a>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="font-sat font-black text-[clamp(1.25rem,2.2vw,1.5rem)] pb-2">
                My Digital Spaces
              </h3>
              <div className="flex flex-col space-y-4 text-[clamp(1rem,1.8vw,0rem)]">
                <div className="flex items-center gap-3">
                  <Git className="w-[24px] h-[24px]" />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/NLGtan"
                    className="relative group w-fit"
                  >
                    Github
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Lk className="w-[24px] h-[24px]" />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/"
                    className="relative group w-fit"
                  >
                    LinkedIn
                    <span className="font-sat absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Ig className="w-[24px] h-[24px]" />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/_neyyt/"
                    className="relative group w-fit"
                  >
                    Instagram
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-sat font-black text-[clamp(1.25rem,2.2vw,1.5rem)] pb-2">
                Location
              </h3>
              <div className="flex flex-col space-y-3 text-[clamp(1rem,1.8vw,0rem)]">
                <span className="relative group w-fit">
                  Iloilo, Philippines
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                </span>
                <span className="relative group w-fit">
                  5000
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer bar */}
        <div className="mt-10 md:mt-14 lg:mt-16 border-t px-6 md:px-8 py-4 max-w-8xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <p className="font-sat text-[clamp(0.55rem,1.5vw,0.70rem)]">
            ©2024 <span className="font-black">NEITHAN LOUIS GABORNE</span>
          </p>

          <Link
            to="About me"
            spy
            smooth
            offset={-88}
            duration={500}
            className="font-pop font-black text-[clamp(1rem,1.5vw,1rem)] flex items-center gap-2 md:ml-auto cursor-pointer"
          >
            BACK TO TOP
            <Lottie
              animationData={arrowLottie}
              loop
              autoplay
              className="h-6 w-6 md:h-9 md:w-9 rotate-180"
            />
          </Link>
        </div>
      </section>
    );
  }
}

export default Contact;
