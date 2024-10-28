import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import RentRipple from "@/public/RentRipple.jpg";
import GreenCart from "@/public/GreenCart.png";
import GreenCartLogo from "@/public/GreenCartLogo.png";
import YoutubeNLP from "@/public/YoutubeNLP.jpeg";
import blockchain from "@/public/blockchain.jpg";
import MulticlientReverseShell from "@/public/MulticlientReverseShell.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Developer Co-op (Digital DevOps And Observability)",
    location: "Royal Bank of Canada",
    description: `
      • Configured monitoring and alerting systems using Dynatrace, Splunk, and PagerDuty, improving issue detection and response times.\n
      • Automated infrastructure and DevOps tasks with Terraform, Ansible, and Groovy scripts in Jenkins and GitHub Actions for efficient pipeline deployment.\n
      • Conducted root cause analysis for critical incidents, collaborating with cross-functional teams to resolve issues and enhance system reliability.
    `,
    icon: React.createElement(LuGraduationCap),
    date: "Sept 2024-Present",
  },
  {
    title: "Cloud Engineer",
    location: "Techwondoe",
    description:
      `
      • Developed and deployed cloud solutions on Google Cloud Platform (GCP) using TypeScript, Docker, and Terraform, enhancing scalability and performance.
      • Led the incident response team, ensuring rapid resolutions and implementing permanent fixes for production issues to maintain service reliability.
      • Collaborated with cross-functional teams, including Business Analysts and external partners, to align project goals and deliver robust, innovative cloud services on time and within budget.
      `,
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - April 2024",
  },
  {
    title: " Software Engineer Intern",
    location: "Cilans System",
    description:
      `
      • Utilized Scrum methodologies and Agile practices to enhance collaboration and ensure timely delivery of high-quality software products through effective sprint management.
      • Developed a Hyperledger-based marketplace for automobile sales, implementing Node.js chain code and leveraging Azure Cloud Services to create a private blockchain.
      • Automated project deployment on Azure using CI/CD YAML scripts with GitHub Actions, ensuring efficient release cycles and improved deployment reliability.
      `,
    icon: React.createElement(FaReact),
    date: "May 2020 - June 2020",
  },
] as const;

export const projectsData = [
  {
    title: "RentRipple",
    description:
      "RentRipple is a marketplace platform connecting property owners and renters for efficient property management, user authentication, real-time chat, and streamlined user engagement.",
      tags: ["JSON Web Token (JWT)", "React.js", "TypeScript", "Redis", "Terraform", "Node.js", "MongoDB", "Next.js", "REST APIs", "Socket.io", "NestJS"],
    imageUrl: RentRipple,
  },
  {
    title: "GreenCart",
    description:
      "GreenCart is an e-commerce website dedicated to selling eco-friendly and sustainable products, promoting greener choices for everyday living.",
      tags: ["Django", "Tailwind CSS", "SQL", "CI/CD", "Leadership", "Flask", "Microservices", "Agile Methodologies"],
      imageUrl: GreenCartLogo,
  },
  {
    title: "YoutubeNLP",
    description:
    "YouTubeNLP is a microservices-based application that segments YouTube videos by emotional content, leveraging FastAPI, NLP, and ML algorithms for dynamic analysis and scalable deployment.",
    tags: ["Docker", "Kubernetes", "Nginx", "Next.js", "Site Reliability Engineering", "DevOps", "NLP", "IBM Cloud", "AWS"],
    imageUrl: YoutubeNLP,
  },
  {
    title: "MediaChain",
    description:
    "Its a Hyperledger Fabric based project.Its a Blockchain application to distribute royalties for the entertainment industry.",
    tags: ["Hyperledger", "Node.js", "Cloud Applications", "Agile Methodologies", "Blockchain"],
    imageUrl: blockchain,
  },
  {
    title: "MultiClient Reverse Shell",
    description:
    "This project is a proof of concept (POC) worm and ransomware that exploits the psexec vulnerability in Windows and SSH vulnerability in Linux systems to download and execute ransomware files, similar to WannaCry and Mirai.",
    tags: ["Scripting", "Python", "Kali Linux", "Operating Systems", "Cybersecurity", "Socket Programming", "Malware Detection", "Reverse Engineering"],    
    imageUrl: MulticlientReverseShell,
  },
] as const;

export const skillsData = [
  // Programming Languages
  "Python", 
  "C", 
  "C++", 
  "Java", 
  "JavaScript", 
  "TypeScript", 

  // Frameworks & Libraries
  "React", 
  "Node.js", 
  "Express", 
  "Spring Boot", 
  "Flask", 
  "Django", 

  // Web Development
  "HTML", 
  "CSS", 
  "PHP", 

  // Databases
  "MySQL", 
  "MS SQL", 
  "MongoDB", 
  "PostgreSQL", 

  // Cloud & DevOps
  "LINUX", 
  "GCP", 
  "AWS", 
  "Azure", 
  "Terraform", 
  "Kubernetes", 
  "Docker", 
  "Git", 
  "Jenkins", 
  "GitHub Actions",

  // Monitoring & Observability Tools
  "Datadog", 
  "Splunk", 
  "Dynatrace", 

  // Methodologies & Tools
  "REST API", 
  "RESTful Services", 
  "SDLC", 
  "Agile", 
  "Waterfall", 

  // Additional Skills
  "Shell Scripting", 
  "JSON", 
  "Analytics", 
  "Collaboration", 
  "Research & Performance Optimization", 
  "Parallel Programming"
] as const;
