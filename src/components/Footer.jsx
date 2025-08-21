import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A0F0F] text-[#F0F2F5] py-8 px-4 mt-auto">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between">
        
        {/* โลโก้ / ชื่อเว็บ */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-bold">Personal Portfolio</h3>
          <p className="text-sm text-gray-400">
            เว็บไซต์โปรไฟล์ส่วนตัว (Personal Portfolio) ที่แสดงประวัติการศึกษา, ประสบการณ์การทำงาน, โปรเจกต์ที่ทำ, และข้อมูลติดต่อ.
          </p>
        </div>

        {/* เมนูลิงก์ */}
        <div className="flex space-x-6 mb-6 md:mb-0 text-sm">
          <Link to="/" className="text-[#F0F2F5] hover:text-gray-400 transition-colors">Home</Link>
          <Link to="/AboutMe" className="text-[#F0F2F5] hover:text-gray-400 transition-colors">About Me</Link>
          <Link to="/Contact" className="text-[#F0F2F5] hover:text-gray-400 transition-colors">Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-[#F0F2F5] hover:text-gray-400 transition-colors">
            <i className="bi bi-facebook text-xl"></i>
          </a>
          <a href="#" className="text-[#F0F2F5] hover:text-gray-400 transition-colors">
            <i className="bi bi-tiktok text-xl"></i>
          </a>
          <a href="#" className="text-[#F0F2F5] hover:text-gray-400 transition-colors">
            <i className="bi bi-instagram text-xl"></i>
          </a>
          <a href="#" className="text-[#F0F2F5] hover:text-gray-400 transition-colors">
            <i className="bi bi-youtube text-xl"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs mt-6">
        © 2025 ล้อมพงษ์ สระทองมี 68319010009
      </div>
    </footer>
  );
};

export default Footer;
