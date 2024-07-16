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
          <div>
            <span
              onClick={() => setIsContactFormOpen(true)}
              className="text-red-600 underline font-semibold hover:bg-black p-1 rounded-md cursor-pointer"
            >
              Start a project
            </span>
          </div>
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
        <nav className="p-4 flex items-center justify-center flex-col gap-40 h-full bg-black">
          <Link className="text-5xl text-red-600 uppercase hover:text-red-700 font-extrabold" href='/'>Home</Link>
          <Link className="text-5xl text-red-600 uppercase hover:text-red-700 font-extrabold" href='/'>Gallery</Link>
          <Link className="text-5xl text-red-600 uppercase hover:text-red-700 font-extrabold" href='/'>SOUnds</Link>
          <Link className="text-5xl text-red-600 uppercase hover:text-red-700 font-extrabold" href='/'>Contact</Link>
        </nav>
      </div>

      {/* Sliding Contact Form */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform ${
          isContactFormOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <button
          onClick={() => setIsContactFormOpen(false)}
          className="p-4 bg-red-600"
        >
          Close
        </button>
        <div className="p-4">
          <h2 className="mb-4">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" className="w-full p-2 text-gray-900" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" className="w-full p-2 text-gray-900" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" className="w-full p-2 text-gray-900" rows="4"></textarea>
            </div>
            <button type="submit" className="p-2 bg-green-600 text-white">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
