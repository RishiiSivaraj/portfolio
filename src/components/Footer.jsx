import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
const Footer = () => {

    const links = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Certificates", href: "#certificates" },
        { name: "Contact", href: "#contact" },
      ];

  return (
    <footer className="relative bg-gradient-to-r from-[#240b36] to-[#c31432] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl animate-float1" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl animate-float2" />
        <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-cyan-500 rounded-full filter blur-3xl animate-float3" />
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="group">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-[#240b36] to-[#c31432] rounded-lg flex items-center justify-center transform group-hover:rotate-15 transition duration-500">
                <span className="text-xl font-bold">SR</span>
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-background)]">
                RISHII SIVARAJ
              </h2>
            </div>
            <p className="text-white mb-6">
              Innovating digital experiences one line of code at a time.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              {/* GitHub */}
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-background)] text-[var(--color-foreground)] flex items-center justify-center hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-all duration-300">
                {/* Add GitHub Icon */}
                <FaGithub size={25} />
              </a>
              {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-background)] text-[var(--color-foreground)] flex items-center justify-center hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:text-[var(--color-background)] transition-all duration-300">
                {/* Add Instagram Icon */}
                <FaInstagram  size={25}/>
              </a>
              {/* Linkedin */}
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-background)] text-[var(--color-foreground)] flex items-center justify-center hover:text-[#0072b1] hover:shadow-lg transition-all duration-300">
                {/* Add Linkedin Icon */}
                <FaLinkedin size={25}/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white hover:text-white hover:pl-2 transition-all duration-300 flex items-center group">
                    <span className="w-1 h-1 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center">
                    {/* Email icon */}
                    <MdAlternateEmail />
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-white">Email</p>
                  <a href="mailto:rishiisivaraj3@gmail.com" className="text-white  transition">rishiisivaraj3@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center">
                    {/* Phone icon */}
                    <FaPhoneVolume />
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-white">Phone</p>
                  <a href="tel:+918123456789" className="text-white transition">+91 8123456789</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Info.</h3>
            <p className="text-white mb-4">This Portfolio Page is made with React and Tailwind CSS.</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-[var(--color-background)] flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--color-background)] text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rishii Sivaraj.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
