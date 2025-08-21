import React from "react";

const WorkExperience = () => {
  const jobs = [
    { year: "2024", role: "Intern", company: "ร้านไมโครคอม", desc: "ทำทุกอย่างที่ทำได้" },
  ];

  return (
    <section className="bg-[#F5F5F5] text-[#1A0F0F] min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-6 border-b border-[#333333] pb-2">
          Work Experience
        </h1>
        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <div key={idx} className="text-[#1A0F0F] border rounded-lg p-4 bg-[#EDEDED]">
              <h3 className="text-[#1A0F0F] text-xl font-semibold">{job.role} @ {job.company}</h3>
              <p className="text-sm text-[#333333]">{job.year}</p>
              <p>{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
