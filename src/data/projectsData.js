// go up one level (../) to src/, then into Pages/img/
import pro1 from "../Pages/img/pro1.png";
import pro2 from "../Pages/img/pro2.png";
import pro3 from "../Pages/img/pro3.png";

export const projects = [
  {
    title: "Kilowhatt?",
    year: "2025",
    role: "Mobile App • Full-stack",
    img: pro1,
    live: "",
    repo: "https://github.com/NLGtan/kilowhatt_app",
    description:
      "A Flutter mobile app connecting homeowners and tenants. It includes role-based dashboards, real-time bill tracking, OCR-based submeter reading, push notifications, and Supabase image uploads. The app also integrates a blockchain payment method to ensure secure, immutable bill records.",
    stack: ["Flutter", "Firebase", "Supabase"],
    flip: false,
  },
  {
    title: "Bucket List Checker",
    year: "2023",
    role: "Web Design • Full-stack",
    img: pro2,
    live: "https://bucket-list-checker.onrender.com/",
    repo: "https://github.com/NLGtan/bucketlist",
    description:
      "A web app to track personal bucket-list items with authentication, CRUD operations, and a clean, fast-loading interface. Designed for usability and smooth user experience.",
    stack: ["Node", "Express", "MongoDB"],
    flip: true,
  },
  {
    title: "Zentry",
    year: "2023",
    role: "Web Design • Frontend",
    img: pro3,
    live: "https://zentry.com/",
    repo: "",
    description:
      "A marketing site recreation focusing on motion, layered visuals, and responsive typography. Emphasizes modern frontend techniques and interactive UI design.",
    stack: ["React", "Tailwind", "Framer Motion"],
    flip: false,
  },
];
