import { getblog } from "@/app/blogs/page";
import Articlecardlist from "@/components/Articlecardlist";
import Sidebar from "@/components/Sidebar";

export default async function AllBlogs() {
 
  const result = await fetch("http://localhost:8000/articles");
  const data = (await result.json()) as getblog[];

  console.log(data);

  return (
    <div className="flex min-h-screen bg-gray-50">
     
      
      <Sidebar />
      
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-right">
          لیست تمام مقاله‌ها
        </h1>
          <span className="text-sm text-gray-500">
            تعداد مقالات: {data.length}
          </span>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex flex-col items-center justify-center space-y-5">
            {
            data.map((result)=>(
              <Articlecardlist key={result.id} {...result} />
            ))
            }
          </div>

        </div>
      </main>
    </div>
  );
}
