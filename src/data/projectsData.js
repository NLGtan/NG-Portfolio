// go up one level (../) to src/, then into Pages/img/
import pro1 from "../Pages/img/pro1.png";
import pro2 from "../Pages/img/pro2.png";
import pro3 from "../Pages/img/pro3.png";

export const projects = [
  {
    title: "Zentry",
    year: "2023",
    role: "Web Design • Frontend",
    img: pro1,
    live: "https://zentry.com/",
    repo: "",
    description:
      "Marketing site recreation with attention to motion, layered visuals, and responsive typography.",
    stack: ["HTML", "CSS", "JavaScript"],
    flip: false,
  },
  {
    title: "Bucket List Checker",
    year: "2023",
    role: "Web Design • Full-stack",
    img: pro2,
    live: "https://bucket-list-checker.onrender.com/",
    repo: "",
    description:
      "A tiny app to track bucket-list items with simple auth and CRUD. Built for fast loading and clean UX.",
    stack: ["Node", "Express", "MongoDB"],
    flip: true,
  },
  {
    title: "PIXLSPACE",
    year: "2023",
    role: "Web Design • Full-stack",
    img: pro3,
    live: "https://www.pixlspace.io/",
    repo: "",
    description:
      "Landing + product pages with componentized UI and content blocks designed for growth.",
    stack: ["React", "Tailwind", "Framer Motion"],
    flip: false,
  },
];
