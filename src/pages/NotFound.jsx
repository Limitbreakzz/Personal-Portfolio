import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-white">
        <p className="text-8xl font-bold text-[#1A0F0F]">404</p>
        <p className="text-2xl text-[#1A0F0F] mt-4">Page Not Found</p>
        <p className="text-lg text-[#1A0F0F] mt-2">ขออภัย, ไม่พบหน้าที่คุณกำลังมองหา</p>
        <Link to="/" className="mt-8 px-6 py-3 bg-[#100E09] font-bold text-[#F0F2F5] rounded-lg shadow-md hover:bg-[#333333] transition duration-300">
          กลับสู่หน้าหลัก
        </Link>
      </div>
    </>
  );
};

export default NotFound;