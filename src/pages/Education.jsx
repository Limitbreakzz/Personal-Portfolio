import React from "react";

const Education = () => {
  const schools = [
    { year: "2025 - ", place: "อาชีวศึกษานครปฐม", desc: "ประกาศนียบัตรวิชาชีพชั้นสูง" },
    { year: "2021 - 2024", place: "อาชีวศึกษานครปฐม", desc: "ประกาศนียบัตรวิชาชีพ" },
    { year: "2017 - 2020", place: "โรงเรียนศรีวิชียวิทยา", desc: "มัธยมต้น แผนวิทย์-คณิต" }
  ];

  return (
    <section className="bg-[#F5F5F5] text-[#1A0F0F] min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-6 border-b border-gray-600 pb-2">
          Education
        </h1>
        <ul className="space-y-6">
          {schools.map((edu, idx) => (
            <li key={idx} className="bg-[#EDEDED] border-l-4 border-yellow-500 border-t-0 border-b-0 rounded-lg shadow-md pl-4 p-3">
              <h3 className="text-xl font-semibold">{edu.place}</h3>
              <p className="text-sm text-gray-400">{edu.year}</p>
              <p>{edu.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
