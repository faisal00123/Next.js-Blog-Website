import Link from "next/link.js";
import React, { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="bg-indigo-600">
      <nav className="flex items-center justify-evenly py-3 md:px-16 lg:px-24 xl:px-32 md:py-4 w-full">
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-white">FAISAL'S PROJECT</h1>
        </Link>
        <div
          id="menu"
          className={`${mobileOpen ? "max-md:w-full" : "max-md:w-0"} max-md:absolute max-md:top-0 max-md:z-10 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-black/50 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 text-sm`}
        >
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-gray-200 hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-gray-200 hover:text-gray-300"
          >
            Features
          </Link>
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-gray-200 hover:text-gray-300"
          >
            Affiliate
          </Link>

          <button className="md:hidden bg-slate-900 hover:bg-purple-700 text-slate-50 px-10 h-10 rounded-full text-sm transition">
            Login
          </button>
          <button className="md:hidden bg-slate-900 hover:bg-purple-700 text-slate-50 px-10 h-10 rounded-full text-sm transition">
            Sign up
          </button>
          <button
            id="close-menu"
            onClick={() => setMobileOpen(false)}
            className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="flex justify-between align-bottom items-center gap-2">
          <button className="hidden md:block bg-stone-900 hover:bg-purple-700 text-slate-50 px-10 h-10 rounded-full text-sm transition">
            Login
          </button>
          <button className="hidden md:block bg-stone-900 hover:bg-purple-700 text-slate-50 px-10 h-10 rounded-full text-sm transition">
            Sign up
          </button>
        </div>

        <button
          id="open-menu"
          onClick={() => setMobileOpen(true)}
          className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 12h16" />
            <path d="M4 18h16" />
            <path d="M4 6h16" />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Header;
