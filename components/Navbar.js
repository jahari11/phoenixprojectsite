import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <div className="mb-6 z-10 relative">
        <div className="flex justify-between">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-red-600 underline font-semibold hover:bg-black p-1 rounded-md cursor-pointer"
          >
            {isMenuOpen ? "X" : "Menu"}
          </button>
        </div>
        <div className="flex justify-center">
          <div className="text-4xl md:text-9xl text-red-600 font-bold">
            PHOENIXPROJECT☮︎
          </div>
        </div>
      </div>
      

      {/* Sliding Navigation Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <nav className="p-4 flex items-center justify-center flex-col gap-40 h-full backdrop-blur-lg">
          <Link className="text-5xl text-red-600 uppercase hover:text-red-700 font-extrabold" href='/'>Home</Link>
          <Link className="text-5xl text-red-600 uppercase hover:text-red-700 font-extrabold" href='/'>Gallery</Link>
          <Link className="text-5xl text-red-600 uppercase hover:text-red-700 font-extrabold" href='/'>SOUnds</Link>
          <Link className="text-5xl text-red-600 uppercase hover:text-red-700 font-extrabold" href='/'>Contact</Link>
        </nav>
      </div>
    </div>
  );
}
