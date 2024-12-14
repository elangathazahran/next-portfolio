"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Animebar",
    description: "Saya membuat tampilan website untuk menonton anime menggunakan HTML 5, CSS 3, Javascript, dan Bootstrap 5",
    image: "/images/projects/web/animebar.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Plantsasri",
    description: "Saya membuat landing page request dari atasan saya ketika PKL menggunakan ",
    image: "/images/projects/web/plantsasri.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Kedai Kopi",
    description: "Saya membuat tampilan website untuk bahan pembelajaran",
    image: "/images/projects/web/kedai-kopi.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Siladas",
    description: "Saya membuat website untuk jualan produk saya ketika sedang menjalani program PKK di SMK",
    image: "/images/projects/web/siladas.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Undangan Pernikahan",
    description: "Saya membuat website untuk undangan pernikahan sebagai pembelajaran saya",
    image: "/images/projects/web/pernikahan.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Landing Page PT DHP",
    description: "Saya membuat landing page untuk client freelance saya menggunakan HTML 5, CSS 3, dan Js",
    image: "/images/projects/web/freelance-1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Landing Page SMPN 157 Jakarta",
    description: "Saya membuat landing page untuk client freelance saya menggunakan HTML 5, CSS 3, dan Js",
    image: "/images/projects/web/freelance-2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Website Belajar Online Bahasa Jepang",
    description: "Saya membuat website belajar online dari client freelace saya menggunakan Laravel 10",
    image: "/images/projects/web/web-belajar-online.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "LaPizzetta",
    description: "Saya membuat website untuk membeli pizza dan berbagai macam makanan lainnya menggunakan laravel 10",
    image: "/images/projects/web/freelance-1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Netfilms",
    description: "Saya membuat website untuk menonton film menggunakan Laravel 10",
    image: "/images/projects/web/netfilms.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Gamedrive",
    description: "Saya membuat website untuk topup dan jasa joki berbagai macam game menggunakan Laravel 10",
    image: "/images/projects/web/gamedrive.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Gmetrix HTML CSS",
    description: "Saya telah menyelesaikan ujian dan mendapatkan sertifikasi Gmetrix untuk HTML5 dan CSS3",
    image: "/images/projects/certifications/gmtrix.jpg",
    tag: ["All", "Certifications"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Certiport",
    description: "Saya telah menyelesaikan ujian dan mendapatkan sertifikasi Certiport untuk HTML5 dan CSS3",
    image: "/images/projects/certifications/certiport.jpg",
    tag: ["All", "Certifications"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Frontend Web Developer",
    description: "Saya telah menyelesaikan PKL di PT Kreasi Sawala Nusantara dan mendapatkan sertifikat tanda telah menyelesaikan program PKL",
    image: "/images/projects/certifications/PKL.jpg",
    tag: ["All", "Certifications"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Dicoding",
    description: "Saya telah menyelesaikan ujian dan mendapatkan sertifikasi dicoding untuk 'Belajar Prinsip Pemrogramman SOLID'",
    image: "/images/projects/certifications/dicoding.png",
    tag: ["All", "Certifications"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Certifications"
          isSelected={tag === "Certifications"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
