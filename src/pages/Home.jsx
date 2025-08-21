import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-[#F5F5F5] text-gray-800">
      {/* ส่วนเนื้อหาหลัก (Hero Section) */}
      <section className="min-h-[70vh] flex items-center justify-center p-8 relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          {/* กล่องข้อความด้านซ้าย */}
          <div className="md:w-1/3 text-left p-4">
            <h1 className="text-4xl md:text-5xl font-light text-g[#1A0F0F] mb-2">Lomphong Srathongmee</h1>
          </div>

          {/* รูปภาพตรงกลาง */}
          <div className="md:w-1/3 flex justify-center p-4 z-10 h-full">
            <img
              src="/picture/me.png"
              alt="me"
              className="w-full h-full max-w-lg object-cover"
            />
          </div>

          {/* กล่องข้อความด้านขวา */}
          <div className="md:w-1/3 text-right p-4">
            <h1 className="text-4xl md:text-5xl font-light text-[#1A0F0F] mb-2">BIG Programmer</h1>
          </div>
        </div>
      </section>

      {/* ส่วน "SOME OF MY LATEST WORK" */}
      <section className="bg-[#EDEDED] py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-lg uppercase text-[#1A0F0F] tracking-widest font-bold mb-8">
            SOME OF MY LATEST WORK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* การ์ดผลงาน 1 */}
            <div className="bg-[#F5F5F5] rounded-lg shadow-md p-4">
              <img
                src="/picture/me2.png"
                alt="Latest Work 1"
                className="w-full h-110 rounded-lg mb-4"
              />
              <p className="text-4xl text-[#1A0F0F] font-semibold">โดนจับ</p>
            </div>
            {/* การ์ดผลงาน 2 */}
            <div className="bg-[#F5F5F5] rounded-lg shadow-md p-4">
              <img
                src="/picture/bin.jpg"
                alt="Latest Work 2"
                className="w-full h-110 rounded-lg mb-4"
              />
              <p className="text-4xl text-[#1A0F0F] font-semibold">หนีออกจากประเทศ</p>
            </div>
            {/* การ์ดผลงาน 3 */}
            <div className="bg-[#F5F5F5] rounded-lg shadow-md p-4">
              <img
                src="/picture/me3.jpg"
                alt="Latest Work 3"
                className="w-full h-110 rounded-lg mb-4"
              />
              <p className="text-4xl text-[#1A0F0F] font-semibold">โดนจับรอบ 2</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;