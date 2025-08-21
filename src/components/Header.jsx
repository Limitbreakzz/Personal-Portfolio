import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About Me', link: '/AboutMe' },
    { name: 'Education', link: '/Education' },
    { name: 'Work Experience', link: '/WorkExperience' },
    { name: 'Projects', link: '/Projects' },
    { name: 'Skills', link: '/Skills' },
    { name: 'Contact', link: '/Contact' },
    { name: 'Blog', link: '/Blog' }
  ]

  return (
    <>
      <header className="bg-[#1A0F0F] text-[#F0F2F5] flex justify-between items-center py-6 px-8 border-b border-gray-200">
        
        {/* โลโก้ */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-xl font-bold">
            <span className="text-[#F0F2F5]">Personal Portfolio</span>
          </Link>
        </div>

        {/* เมนู Desktop */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.link} className="hover:text-gray-500">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons + Burger Menu */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-500">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="hover:text-gray-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-500">
            <i className="fab fa-instagram"></i>
          </a>

          {/* Burger Button (มือถือ) */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* เมนู Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1A0F0F] px-6 py-4 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="block py-2 border-b border-[#F0F2F5] text-[#F0F2F5] hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default Header
