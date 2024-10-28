import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
