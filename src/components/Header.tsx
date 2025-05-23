"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-purple-100 to-purple-200 shadow-md py-4 px-6 flex justify-between items-center border-b border-purple-300">
      <Link href="/">
        <span className="text-2xl font-extrabold text-gray-800 hover:text-purple-700 transition duration-200">
          my Blog
        </span>
      </Link>

      <nav className="flex space-x-6">
        {[
          { href: "/", label: "Home" },
          { href: "/blogs", label: "Blogs" },
          { href: "/createblog", label: "Create Blog" },
          { href: "/aboute", label: "About Us" },
          { href: "/contact", label: "Contact Us" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} className="relative group text-gray-800 font-medium hover:text-purple-700 transition duration-200">
            {label}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
