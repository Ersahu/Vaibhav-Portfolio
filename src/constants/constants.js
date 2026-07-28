import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  nextjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  c,
  python,
  pandas,
  numpy,
  tensorflow,
  pytorch,
  mysql,
  github,
  carrent,
  creator,
   word,
  search,
  live,
  one,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "AI/ML Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
   {
    name: "next JS",
    icon: nextjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
];

const projects = [
  {
  name: "QEase — AI-Powered Smart Queue Management System",
  description:
    "Built a smart queue management system with AI-powered wait time prediction and live queue tracking.",
    features: [
    "Built a full-stack application with React, Node.js, Express, MongoDB, and Socket.io for real-time queue management.",
    "Integrated AI-powered wait time prediction, live notifications, and an intelligent chatbot assistant to enhance the customer experience.",
  ],
  tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "Node.js",
      color: "green-text-gradient",
    },
    {
      name: "MongoDB",
      color: "pink-text-gradient",
    },
    {
      name: "Socket.io",
      color: "orange-text-gradient",
    },
    {
      name: "AI/ML",
      color: "purple-text-gradient",
    },
  ],
  image: one,
  source_code_link: "https://github.com/Ersahu/QEase-Queue-Management-System",
  live_link: "https://www.linkedin.com/posts/vaibhav-chaudhary-615712272_finalyearproject-webdevelopment-ai-activity-7446089086681067521-XZ6c?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKrVfEBtoKiP-XHV6dM_a23_dqF2XzZfXY",
},
  {
    name: "AI Chatbot with RAG",
    description:
      "Built a document-aware AI chatbot using RAG to answer user queries from uploaded PDFs and text files.",
    features: [
      "Implemented embedding generation and semantic search using LangChain for accurate information retrieval.",
      "Developed a full-stack solution with React + Tailwind, Node.js, Express, and MongoDB for scalable and secure interaction.",
    ],
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "AI",
        color: "orange-text-gradient",
      },
    ],
    image: live,
    source_code_link: "https://github.com/Ersahu/RAG-AI-Chatbot",
    live_link: "https://www.linkedin.com/posts/vaibhav-chaudhary-615712272_ai-generativeai-rag-activity-7415727308935815168-U6CE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKrVfEBtoKiP-XHV6dM_a23_dqF2XzZfXY",
  },
  {
    name: "NEBULA – Virtual Assistant",
    description:
      "Developed a voice-controlled virtual assistant using HTML, CSS, and JavaScript.",
    features: [
      "Integrated Speech Recognition and Speech Synthesis APIs to enable voice commands.",
      "Implemented features like opening websites, fetching information, telling time/date, and basic AI driven responses.",
    ],
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Web Speech API",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Ersahu/AI-NEBULA",
    live_link: "#",
  },
  {
    name: "Emotify - emotion-Based Music Recommender",
    description:
      "Built an AI-based system to recommend music according to user emotions.",
    features: [
      "Used OpenCV and deep learning for facial emotion detection.",
      "Linked emotions to personalized playlists with a smooth user interface.",
    ],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "pink-text-gradient",
      },
      {
        name: "AI",
        color: "orange-text-gradient",
      },
    ],
    image: creator,
    source_code_link: "https://github.com/Ersahu/EmotionMusic",
    live_link: "#",
  },
  {
    name: "Fake News Detection and Generator",
    description: "AI-based system for fake news classification and generation using ML & NLP.",
    features: [
      "Used Logistic Regression for detection and GPT-2 for text generation.",
      "Built with Python, Streamlit, Scikit-learn, and Hugging Face.",
    ],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "ML",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
      {
        name: "Streamlit",
        color: "orange-text-gradient",
      },
    ],
    image: word,
    source_code_link: "https://github.com/Ersahu/Fake-News-Detection-and-Generator",
    live_link: "#",
  },
  {
    name: "Web Project: (Celestial Hub, Bhartiya Krishi)",
    description:
      "Developed multi-page e-commerce websites using HTML, CSS, and JavaScript.",
    features: [
      "Designed intuitive UI with engaging animations and optimized images to enhance user experience.",
      "Integrated structured navigation and multiple pages for better content accessibility.",
    ],
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: search,
    source_code_link: "https://github.com/Ersahu/Web-Project",
    live_link: "#",
  },
];

const education = [
  {
    title: "M.Tech CSE (AI & ML)",
    institution: "KIET Deemed to be University",
    location: "Ghaziabad, Uttar Pradesh, India",
    date: "2026 – Present",
    description: [
      "Currently pursuing an M.Tech in CSE with a specialization in Artificial Intelligence and Machine Learning, focusing on advanced AI, research, and intelligent systems.",
    ],
  },
  {
    title: "B.Tech CSE (AI & ML)",
    institution: "Vidya College of Engineering",
    location: "Meerut, Uttar Pradesh, India",
    date: "2022 – 2026",
    description: [
      "Completed a B.Tech in CSE with a specialization in AI & ML, gaining hands-on experience in AI, full-stack development, and software engineering.",
    ],
  },
  {
    title: "High School Diploma",
    institution: "Surevin International School",
    location: "Modinagar, Uttar Pradesh, India",
    date: "2022",
    description: [
      "Completed higher secondary education in the Science stream, building a strong foundation in Mathematics, Physics, and analytical problem-solving.",
    ],
  },
];

const experiences = [
  {
    title: "Java Web Development Intern",
    company_name: "HCLTech",
    date: "November 2024 – February 2025",
    points: [
      "Completed a three-month project-based skilling and internship program.",
      "Developed web applications using Java, JSP, Servlets, and AI-based features.",
      "Integrated AI models for enhanced functionality in web applications.",
      "Gained hands-on experience in backend development, API integration, and database management.",
    ],
  },
];



export {
  services,
  technologies,
  experiences,
  education,
  projects,
};
