import { getblog } from "@/app/blogs/page";
import Link from "next/link";

export default function Articlecardlist ({id,title,description}:getblog){
    return(
        <div className="flex flex-col items-center justify-center space-y-3 w-220 h-20 space-x-3 pb-5 pt-5 shadow-lg rounded-3xl  bg-gray-50" dir="rtl">
    <h3 className="" dir="rtl">{title}</h3>
    <div className="flex flex-row space-x-3">
        <button className="bg-red-500 text-white px-4  rounded-md transition-transform hover:scale-110 cursor-pointer">حذف</button>
        <button className="bg-blue-500 text-white px-4 rounded-md transition-transform hover:scale-110 cursor-pointer">ویرایش</button>
        <Link href={`/blogs/${id}`}>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-md transition-transform hover:scale-110 cursor-pointer">
            مشاهده
        </button>
        </Link>       
    </div>
    </div>


    )
}