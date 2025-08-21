import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      year: "2025",
      tech: ["React", "TailwindCSS"],
      desc: "เว็บไซต์แนะนำตัวเองพร้อมการแสดงข้อมูล About, Skills, Projects และ Contact",
      link: "https://personal-portfolio-jcq6.onrender.com"
    },
    {
      title: "Tourism Website",
      year: "2025",
      tech: ["React", "TailwindCSS", "Bootstrap"],
      desc: "เว็บรวบรวมข้อมูลการท่องเที่ยวเชิงวัฒนธรรม พร้อมระบบกรองจังหวัดและสถานที่",
      link: "https://lomphong-travel.onrender.com/"
    }
  ];

  return (
    <section className="bg-[#F5F5F5] text-[#1A0F0F] min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-6 border-b border-gray-600 pb-2">
          Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#EDEDED] border rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-sm text-[#333333] italic">{proj.year}</p>
              <p className="text-sm text-[#333333] mb-3">{proj.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-[#D4D4D4] rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
