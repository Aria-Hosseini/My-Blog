import Articles from "@/components/Articles";
import { getblog } from "./blogs/page";
import Link from "next/link";

export default async function Home() {

  const result = await fetch("http://localhost:8000/articles");
  const data = (await result.json() ) as getblog[];

  console.log(data);


  return (
    <div className="h-full bg-[#fffdef] flex flex-col items-center justify-center px-4 py-16">

  <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
    Welcome To My Blog
  </h1>
  <p className="max-w-xl text-center text-gray-700 mb-8 text-lg">
    Search Read And Recognize Everything!
  </p>

  <div className="flex space-x-4 rtl:space-x-reverse mb-10">
    <a
      href="/blogs"
      className="px-6 py-3 rounded-lg border border-gray-300 bg-gradient-to-br from-purple-100 to-purple-200 text-gray-800 shadow-lg hover:bg-gray-100 transition-colors duration-200"
    >
      View All Blogs
    </a>
    <a
      href="/createblog"
      className="px-6 py-3 rounded-lg border border-gray-300 bg-gradient-to-br from-purple-600 to-purple-500 text-gray-800 shadow-lg hover:bg-gray-100 transition-colors duration-200"
    >
      Create a New Blog
    </a>
  </div>

  <div className="flex flex-row items-center justify-center space-x-5 w-full max-w-6xl">
    {data.slice(-4).map((result) => (
      <Link key={result.id} href={`/blogs/${result.id}`}>
        <Articles {...result} />
      </Link>
    ))}
  </div>
</div>

  );
}
