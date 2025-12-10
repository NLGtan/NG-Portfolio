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
    title: "Axari",
    year: "2025",
    role: "Web Design • Frontend",
    img: pro3,
    live: "https://axari.vercel.app/",
    repo: "",
    description:
      "A marketing‑site reimagined for the web with a Web3 focus. It blends motion, layered visuals, and responsive typography to create an immersive, modern frontend experience. Animated transitions and visual layers reinforce a sense of depth and polish, while interactive elements highlight blockchain and Web3 integration concepts. Text and layout adapt fluidly to any screen size, ensuring readability and elegance across devices. In essence: a sleek, interactive showcase built with modern frontend craftsmanship, refined UI design, and Web3-inspired interactivity.",
    stack: ["React", "Tailwind", "Framer Motion"],
    flip: false,
  },
];
