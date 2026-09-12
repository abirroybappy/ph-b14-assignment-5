import { useState } from "react";
import logoImg from "../assets/logo-text.png";

function Logo({ mobile = false }) {
  return (
    <a
      href="#home"
      className={`flex items-center gap-2 ${mobile ? "justify-center" : ""}`}
    >
     

      { (
         <img
          src={logoImg}
          alt="Dev Stack"
          className="h-9 w-auto object-contain"
        />
      )}
    </a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Technologies", "#technologies"],
    ["Projects", "#projects"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <header className=" border-b border-gray-100 bg-white/90 backdrop-blur-lg">
      <div className="section-container">
        <nav className="hidden h-19 items-center justify-between md:flex">
          <Logo />

          <div className="flex items-center gap-7">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-semibold text-gray-600 transition hover:text-gray-950"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-semibold text-gray-700 transition hover:text-gray-950">
              Sign In
            </button>

            <button className="bg-[#D91B7E] rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5">
              Sign Up
            </button>
          </div>
        </nav>

        <nav className="relative flex h-19 items-center justify-between md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700"
            aria-label="Toggle navigation menu"
          >
            {(
              <span className="text-xl">☰</span>
            )}
          </button>

          <Logo mobile />

          <div className="flex items-center gap-1.5">
            <button className="px-2 py-2 text-xs font-semibold text-gray-700">
              Sign In
            </button>

            <button className="bg-[#D91B7E] rounded-full px-3 py-2 text-xs font-bold text-white">
              Sign Up
            </button>
          </div>

         
        </nav>
      </div>
    </header>
  );
}