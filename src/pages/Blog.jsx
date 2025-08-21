import React from "react";

const Blog = () => {
  const posts = [
    { title: "เริ่มต้นกับ React", date: "Aug 2025", desc: "แชร์ประสบการณ์การเรียน React เบื้องต้น" },
    { title: "UI/UX สำคัญยังไง?", date: "Jul 2025", desc: "แนวคิดและเคล็ดลับการออกแบบ UX/UI" }
  ];

  return (
    <section className="bg-[#F5F5F5] text-[#1A0F0F] min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-6 border-b border-gray-600 pb-2">
          Blog
        </h1>
        <div className="space-y-6">
          {posts.map((post, idx) => (
            <div key={idx} className="p-6 bg-[#EDEDED] border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-400">{post.date}</p>
              <p className="mt-2">{post.desc}</p>
              <a href="#" className="text-yellow-500 hover:underline mt-2 inline-block">Read More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
