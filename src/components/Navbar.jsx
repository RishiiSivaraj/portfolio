
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-[#240b36] to-[#c31432]  shadow z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold text-[var(--color-background)]">RISHII SIVARAJ SR</div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul className={`md:flex gap-6 items-center ${isOpen ? "block mt-4" : "hidden md:block"}`}>
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-800 dark:text-gray-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
