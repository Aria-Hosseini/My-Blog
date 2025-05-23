"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar(){
     const pathname = usePathname();

  const navItems = [
    { name: "داشبورد", href: "/admin" },
    { name: "افزودن مقاله", href: "/admin/create.newblog" },
    { name: "همه مقالات", href: "/admin/allBlogs" },
  ];

    return(
        <div>
            <aside className="w-64 bg-white shadow-lg p-6 min-h-screen">
                    <h2 className="text-2xl font-bold mb-8 text-center text-purple-700">پنل ادمین</h2>
                    <nav className="space-y-4">
                    {navItems.map((item) => (
                        <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 rounded-lg text-right font-medium transition ${
                            pathname === item.href
                            ? "bg-purple-100 text-purple-700 font-semibold"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                        >
                        {item.name}
                        </Link>
                    ))}
                    </nav>
            </aside>
        </div>
    )
}