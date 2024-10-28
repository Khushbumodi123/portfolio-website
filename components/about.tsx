"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi there! I'm <span className="font-medium">Yash Sahsani</span>, a technologist with expertise in <span className="font-medium">cloud computing, full-stack development, and blockchain technology</span>. As a GCP Certified Cloud Engineer, I've built and deployed cloud solutions using platforms like AWS, Azure, and Google Cloud, streamlining processes with <span className="font-medium">Terraform</span> and <span className="font-medium">Docker</span>.
      </p>

      <p className="mb-3">
        My academic journey began with a Bachelor's in <span className="font-medium">Information Technology</span>, followed by a Master's in <span className="font-medium">Applied Computing</span> at the University of Windsor. I gained hands-on experience with <span className="font-medium">JavaScript, TypeScript, ReactJS, NodeJS</span>, and advanced DevOps tools like <span className="font-medium">GitHub Actions and Jenkins</span> to ensure system reliability and efficiency.
      </p>

      <p>
        Professionally, I've played key roles in <span className="font-medium">cloud service development</span> on GCP and contributed to <span className="font-medium">blockchain projects</span>. I thrive on continuous learning, tackling complex challenges, and delivering innovative solutions. Let's connect and collaborate on our next tech project!
      </p>
    </motion.section>
  );
}
