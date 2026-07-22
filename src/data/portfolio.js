import BlogWebsite from "../assets/BlogWebsite.png";
import TwitterClone from "../assets/TwitterClone.png";
import Photogram from "../assets/Photogram.png";
import html from "../assets/portfolios/html.png";
import css from "../assets/portfolios/css.png";
import react from "../assets/portfolios/react.png";
import javascript from "../assets/portfolios/java.jpg";
import nodejs from "../assets/portfolios/nodejs.png";
import expressjs from "../assets/portfolios/expressjs.png";
import tailwindcss from "../assets/portfolios/tailwindcss.png";
import github from "../assets/portfolios/github.png";
import mongodb from "../assets/portfolios/mongodb.png";
import cpp from "../assets/portfolios/cpp.png";
import c from "../assets/portfolios/c.png";
import python from "../assets/portfolios/python.png";
import postman from "../assets/portfolios/postman.png";
import leetcode from "../assets/portfolios/leetcode.png";
import gfg from "../assets/portfolios/gfg.png";
import codingNinja from "../assets/portfolios/codingNinja.jpg";
import codechef from "../assets/portfolios/codechef.jpg";
import codeforces from "../assets/portfolios/codeforces.png";
import hackerrank from "../assets/portfolios/hackerrank.png";
import iertlogo from "../assets/portfolios/iertlogo.jpg";
import spvpnb from "../assets/portfolios/vicLogo.png";

export const profile = {
  name: "Vikas Patel",
  role: "Senior Android, React Native & Generative AI Engineer",
  email: "vikaspatel0609@gmail.com",
  phone: "9451002578",
  location: "Lucknow, India",
  github: "https://github.com/vikaspatel7780",
  linkedin: "https://www.linkedin.com/in/vikaspatel7780/",
  twitter: "https://x.com/vscoder7780",
  website: "https://vscoder7780.onrender.com/",
};

export const heroStats = [
  { value: "1+", label: "Year mobile experience" },
  { value: "700+", label: "DSA problems solved" },
  { value: "40%", label: "LLM relevance lift" },
  { value: "3 Star", label: "CodeChef rating" },
];

export const experiences = [
  {
    company: "IPH Technologies",
    location: "Lucknow, India",
    title: "Software Engineer - Mobile, Android & Generative AI",
    period: "April 2025 - Present",
    highlights: [
      "Developing app, an Android AI assistant using Kotlin, Jetpack Compose, MVVM, Room, Retrofit, and WorkManager.",
      "Integrated GPT-5, Gemma, and LLaMA 2B with RAG, vector search, prompt pipelines, and offline-first inference.",
      "Built modular Compose UI, clean state management with ViewModel and LiveData, plus resilient API fallback flows.",
      "Integrated Google Maps, Places, Autocomplete, Movement SDK, and Gmail SDK for location-aware and email-intelligence features.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    src: Photogram,
    title: "Photogram",
    category: "Full-stack social app",
    liveLink: "https://silverspoons.onrender.com/",
    githubLink: "https://github.com/",
    description:
      "A social photo-sharing experience that preserves the original portfolio project while presenting it with a sharper product narrative.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind"],
  },
  {
    id: 2,
    src: TwitterClone,
    title: "Twitter Clone",
    category: "React + Web3 research product",
    liveLink: "https://your-portfolio-link.com/",
    githubLink: "https://github.com/",
    description:
      "A Twitter-style product concept tied to the blockchain-based Twitter DApp research presented at ICICCT-2024.",
    stack: ["React", "Solidity", "Web3.js", "JavaScript"],
  },
  {
    id: 3,
    src: BlogWebsite,
    title: "Blog Website",
    category: "Content platform",
    liveLink: "https://another-project-link.com/",
    githubLink: "https://github.com/",
    description:
      "A modern blog interface focused on readable layouts, reusable UI patterns, and fast frontend delivery.",
    stack: ["React", "Tailwind", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "Lunar Reflector",
    category: "React Native production app",
    description:
      "Cross-platform mobile application for iOS and Android with Redux Toolkit, REST APIs, offline caching, and optimized FlatList rendering.",
    stack: ["React Native", "Redux Toolkit", "REST APIs", "MongoDB"],
  },
  {
    id: 5,
    title: "VoiceHealth",
    category: "AI-powered health assistant",
    description:
      "Android app with Jetpack Compose, role-based access, voice symptom input, scanned reports, doctor search, and Gemma-powered health analysis.",
    stack: ["Kotlin", "Jetpack Compose", "Gemma", "LLMs"],
  },
];

export const skills = [
  { id: 1, src: html, title: "HTML", level: 95, group: "Frontend" },
  { id: 2, src: css, title: "CSS", level: 90, group: "Frontend" },
  { id: 3, src: javascript, title: "JavaScript", level: 85, group: "Frontend" },
  { id: 4, src: react, title: "React Js", level: 85, group: "Frontend" },
  { id: 5, src: tailwindcss, title: "Tailwind CSS", level: 90, group: "Frontend" },
  { id: 6, title: "React Native", level: 86, group: "Mobile" },
  { id: 7, title: "Kotlin", level: 88, group: "Android" },
  { id: 8, title: "Jetpack Compose", level: 86, group: "Android" },
  { id: 9, title: "MVVM", level: 84, group: "Architecture" },
  { id: 10, src: nodejs, title: "Node Js", level: 80, group: "Backend" },
  { id: 11, src: expressjs, title: "Express Js", level: 70, group: "Backend" },
  { id: 12, src: mongodb, title: "Mongo DB", level: 80, group: "Database" },
  { id: 13, title: "Room SQLite", level: 82, group: "Database" },
  { id: 14, title: "RAG Pipeline", level: 82, group: "Generative AI" },
  { id: 15, title: "LoRA Fine-tuning", level: 78, group: "Generative AI" },
  { id: 16, title: "Prompt Engineering", level: 86, group: "Generative AI" },
  { id: 17, src: github, title: "Github", level: 75, group: "Tools" },
  { id: 18, src: postman, title: "Postman", level: 70, group: "Tools" },
  { id: 19, src: cpp, title: "C++", level: 95, group: "Languages" },
  { id: 20, src: c, title: "C", level: 95, group: "Languages" },
  { id: 21, src: python, title: "Python", level: 70, group: "Languages" },
];

export const aiCapabilities = [
  "LLM integration with GPT-5, Gemma-2B-IT, and LLaMA 2B",
  "RAG pipelines with embeddings, vector search, and contextual retrieval",
  "LoRA adapter training on Google Colab and Android deployment via GGUF/ONNX",
  "On-device inference, offline-first vector stores, and graceful cloud fallback",
  "Prompt engineering templates for finance, health, lifestyle, and personal agents",
  "Phase 2 research with PyTorch Mobile + Kotlin for privacy-preserving personalization",
];

export const certifications = [
  "Insightful Innovator Award at IPH Technologies for LLM and prompt-generation integration.",
  "Presented Blockchain-Based Twitter DApp at ICICCT-2024, Jawaharlal Nehru University, New Delhi.",
  "3 Star CodeChef profile with max rating 1632.",
  "700+ coding problems solved across major platforms.",
];

export const blogIdeas = [
  {
    title: "Building offline-first AI assistants on Android",
    summary: "How Room, WorkManager, vector search, and cloud fallback come together in resilient mobile AI systems.",
  },
  {
    title: "React Native performance patterns that matter",
    summary: "FlatList virtualization, memoization, lazy loading, and state boundaries for production mobile apps.",
  },
  {
    title: "From prompt templates to personalized agents",
    summary: "A practical view of RAG, LoRA adapters, conversational memory, and on-device inference.",
  },
];

export const codingProfiles = [
  {
    id: 1,
    src: leetcode,
    link: "https://leetcode.com/u/vscoder123/",
    title: "Leetcode",
    rating: "Max Rating : 1689",
    description: "Solved 450+ Problems.",
  },
  {
    id: 2,
    src: gfg,
    link: "https://www.geeksforgeeks.org/user/vikaspatel7780/",
    title: "GeeksForGeeks",
    rating: "Coding Score : 1481",
    description: "Solved 450+ Problems.",
  },
  {
    id: 3,
    src: codechef,
    link: "https://www.codechef.com/users/vikaspatel7780",
    title: "CodeChef",
    rating: "3 Star",
    description: "Max Rating : 1632",
  },
  {
    id: 4,
    src: codeforces,
    link: "https://codeforces.com/profile/vscoder123",
    title: "Codeforces",
    rating: "Max Rating : 1046",
    description: "Solved 70+ Problems",
  },
  {
    id: 5,
    src: hackerrank,
    link: "https://www.hackerrank.com/profile/vikaspatel0609",
    title: "HackerRank",
    rating: "6 star in Problem Solving",
    description: "5 star in C++",
  },
  {
    id: 6,
    src: codingNinja,
    link: "https://www.naukri.com/code360/profile/vscoder",
    title: "Coding Ninja",
    rating: "Max Rating : 1800",
    description: "Solved 100+ Problems",
  },
];

export const education = [
  {
    id: 1,
    src: iertlogo,
    college: "Institute of Engineering and Rural Technology, Prayagraj",
    course: "Bachelor of Technology - BTech, CSE",
    time: "Nov 2020 - Jul 2024",
    date: "Grade: 7.51 CGPA",
  },
  {
    id: 2,
    src: spvpnb,
    college: "Vikas Intermediate College Parmanandpur, Varanasi",
    course: "Higher Secondary, UP Board",
    time: "Apr 2016 - Mar 2017",
    date: "Grade: 80.20%",
  },
  {
    id: 3,
    src: spvpnb,
    college: "Vikas Intermediate College Parmanandpur, Varanasi",
    course: "High School, UP Board",
    time: "Apr 2018 - Mar 2019",
    date: "Grade: 77%",
  },
];
