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

export const experience = [
  {
    company: "IPH Technologies Pvt. Ltd.",
    location: "Lucknow, Uttar Pradesh",
    title: "Software Engineer Trainee",
    period: "Oct 2024 – Apr 2025",
    highlights: [
      "Developed Android applications using Kotlin, Jetpack Compose, and MVVM architecture.",
      "Integrated REST APIs with Retrofit and implemented Room Database for offline storage.",
      "Worked on React Native features and resolved production bugs across Android projects.",
      "Collaborated with senior engineers using Git, code reviews, and Agile development practices.",
      "Improved application performance, fixed UI issues, and implemented reusable components."
    ]
  },
  {
    company: "IPH Technologies Pvt. Ltd.",
    location: "Lucknow, Uttar Pradesh",
    title: "Software Engineer",
    period: "Apr 2025 – Present",
    highlights: [
      "Developing AI-powered Android applications using Jetpack Compose, Kotlin, and MVVM.",
      "Integrated GPT-based LLMs, offline AI models, and prompt engineering into production apps.",
      "Built scalable architectures with Room, DataStore, Retrofit, and Hilt.",
      "Developed React Native modules and contributed to cross-platform mobile applications.",
      "Worked on healthcare AI solutions with offline-first architecture and local data processing.",
      "Collaborated with cross-functional teams to deliver production-ready mobile applications."
    ]
  }
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
  {
    category: "Mobile Development",
    items: [
      { id: 1, title: "Kotlin", level: 95 },
      { id: 2, title: "Jetpack Compose",level: 95 },
      { id: 3, title: "Java", level: 90 },
      { id: 4, title: "React Native", level: 88 },
      { id: 5, title: "MVVM", level: 95 },
      { id: 6, title: "Room", level: 90 },
      { id: 7, title: "Hilt", level: 90 },
      { id: 8, title: "Retrofit", level: 92 },
    ],
  },

  {
    category: "Frontend",
    items: [
      { id: 9, title: "React.js", src: react, level: 90 },
      { id: 10, title: "JavaScript", src: javascript, level: 90 },
      { id: 11, title: "HTML5", src: html, level: 95 },
      { id: 12, title: "CSS3", src: css, level: 90 },
      { id: 13, title: "Tailwind CSS", src: tailwindcss, level: 95 },
    ],
  },

  {
    category: "Backend",
    items: [
      { id: 14, title: "Node.js", src: nodejs, level: 85 },
      { id: 15, title: "Express.js", src: expressjs, level: 85 },
      { id: 16, title: "MongoDB", src: mongodb, level: 85 },
      { id: 17, title: "Firebase",  level: 80 },
      { id: 18, title: "REST API", level: 92 },
    ],
  },

  {
    category: "Generative AI",
    items: [
      { id: 19, title: "Prompt Engineering", level: 92 },
      { id: 20, title: "RAG", level: 90 },
      { id: 21, title: "LLM Integration", level: 90 },
      { id: 22, title: "Gemini API", level: 90 },
      { id: 23, title: "OpenAI API", level: 90 },
      { id: 24, title: "Hugging Face", level: 85 },
      { id: 25, title: "LangChain", level: 80 },
    ],
  },

  {
    category: "Tools & DevOps",
    items: [
      { id: 26, title: "Git", level: 92 },
      { id: 27, title: "GitHub", src: github, level: 92 },
      { id: 28, title: "Docker", level: 75 },
      { id: 29, title: "Postman", src: postman, level: 90 },
      { id: 30, title: "Android Studio", level: 95 },
      { id: 31, title: "VS Code", level: 95 },
    ],
  },

  {
    category: "Programming Languages",
    items: [
      { id: 32, title: "C", src: c, level: 95 },
      { id: 33, title: "C++", src: cpp, level: 95 },
      { id: 34, title: "Python", src: python, level: 70 },
    ],
  },
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
export const experiences = [
  {
    company: "IPH Technologies Pvt. Ltd.",
    location: "Lucknow, India",
    roles: [
      {
        title: "Software Engineer",
        period: "Mar 2025 – Present",
        current: true,
        highlights: [
          "Developed AI-powered Android applications using Kotlin and Jetpack Compose.",
          "Integrated OpenAI, Gemini, and on-device LLMs.",
          "Built offline-first architecture using Room and MVVM.",
          "Worked on React Native applications and REST API integration.",
          "Implemented Prompt Engineering and RAG pipelines."
        ]
      },
      {
        title: "Software Engineer Trainee",
        period: "Oct 2024 – Mar 2025",
        current: false,
        highlights: [
          "Built Android features using Kotlin and XML.",
          "Learned MVVM, Room, Retrofit, and Coroutines.",
          "Worked on React Native modules and bug fixing.",
          "Collaborated with senior developers in Agile sprints.",
          "Contributed to production releases and code reviews."
        ]
      }
    ]
  }
];