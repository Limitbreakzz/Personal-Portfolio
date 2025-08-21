import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#F5F5F5] text-[#1A0F0F] min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-5xl">
      <h1 className="text-3xl font-bold mb-6 border-b border-gray-600 pb-2">
          Contact
        </h1>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 place-items-center mb-16">
          {/* เบอร์ติดต่อ */}
          <div className="flex flex-col items-center text-center transition-all duration-300 transform hover:scale-110">
            <img
              src="https://th.bing.com/th/id/R.29d944392a4cdad0128458820ecde85d?rik=AI2F2L1YKAT8TA&pid=ImgRaw&r=0"
              className="h-20 mb-4"
              alt="มือถือ"
            />
            <span className="text-lg font-semibold">เบอร์ติดต่อ</span>
            <span className="text-lg text-[#1A0F0F]">098-074-0536</span>
          </div>

          {/* อีเมล */}
          <div className="flex flex-col items-center text-center transition-all duration-300 transform hover:scale-110">
            <img
              src="https://th.bing.com/th/id/R.f497211d19df7e4e9272fc5b318f46de?rik=HESYdAKZMt2dow&pid=ImgRaw&r=0"
              className="h-20 mb-4"
              alt="อีเมล"
            />
            <span className="text-lg font-semibold">อีเมล</span>
            <a
              href="mailto:lomphongsrathongmee@gmail.com"
              className="text-lg text-[#1A0F0F] hover:underline hover:text-[#333333]"
            >
              lomphongsrathongmee@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center text-center transition-all duration-300 transform hover:scale-110">
            <img
              src="https://th.bing.com/th/id/R.f12560820c5070ee4be83c3feb569ce1?rik=l9Xz9PiZqqnDJQ&pid=ImgRaw&r=0"
              className="h-20 mb-4"
              alt="GitHub"
            />
            <span className="text-lg font-semibold">GitHub</span>
            <a
              href="https://github.com/Limitbreakzz"
              className="text-lg text-[#1A0F0F] hover:underline hover:text-[#333333]"
            >
              Limitbreakzz
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded bg-[#EDEDED] border border-gray-600 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded bg-[#EDEDED] border border-gray-600 focus:outline-none"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-4 rounded bg-[#EDEDED] text-[#1A0F0F] border border-gray-600 focus:outline-none"
          ></textarea>
          <div className="flex">
            <button className="bg-[#100E09] text-[#F0F2F5] px-8 py-3 rounded-lg font-semibold hover:bg-[#333333] transition">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
