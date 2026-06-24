import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function PremiumPortfolio() {
  const [text, setText] = useState("");
  const fullText = "I build scalable, high-performance web applications.";

  // ✨ typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const profile = {
    name: "John Doe",
    role: "Software Engineer | Frontend Specialist",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Full-stack shopping platform"
    },
    {
      title: "Automation Framework",
      desc: "Automation testing framework"
    }
  ];

  return (
    <div className="bg-[#0b1120] text-white min-h-screen relative overflow-hidden">

      {/* 💡 background glow */}
      <div className="absolute w-96 h-96 bg-purple-500 opacity-20 blur-3xl top-20 left-20"></div>

      {/* Navbar */}
      <div className="flex justify-between px-10 py-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">{profile.name}</h1>

        <div className="flex gap-6">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-10 py-20">
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Role */}
          <motion.h1 variants={item} className="text-5xl font-bold">
            {profile.role}
          </motion.h1>

          {/* 🔥 typing animation */}
          <motion.p className="mt-6 text-gray-400 text-lg">
            {text}
            <span className="animate-pulse">|</span>
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} className="mt-8 flex gap-4">
            <a href="#projects" className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700 transition">
              View Projects
            </a>

            <a href={profile.linkedin} target="_blank" className="border px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
              LinkedIn
            </a>

            <a href={profile.github} target="_blank" className="border px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
              GitHub
            </a>
          </motion.div>

        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-10 py-20">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition"
            >
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-gray-300">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center py-20">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold">Let's Work Together 🚀</h2>

          <div className="mt-6 flex justify-center gap-4">
            <a href={profile.linkedin} target="_blank" className="bg-blue-600 px-6 py-2 rounded-xl">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" className="bg-gray-700 px-6 py-2 rounded-xl">
              GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}