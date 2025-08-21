import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "CSS",
      img: "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png",
    },
    {
      name: "JavaScript",
      img: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png",
    },
    {
      name: "React",
      img: "https://th.bing.com/th/id/R.c49f5cb27fbadd3705c5ac5e6bc7a837?rik=YIksOUnDXModqA&pid=ImgRaw&r=0",
    },
    {
      name: "Tailwind",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042",
    },
    {
      name: "Node.js",
      img: "https://th.bing.com/th/id/R.4dfe01148ebce3a9de8ab55279b0b4bc?rik=Cb%2f46GSGyzIMJA&pid=ImgRaw&r=0",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] text-[#1A0F0F] min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-6 border-b border-gray-600 pb-2">
          Skills
        </h1>

        {/* ใช้ grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center transition-all duration-300 transform hover:scale-110"
            >
              <img alt={skill.name} className="h-20 mb-4" src={skill.img} />
              <span className="text-lg text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
