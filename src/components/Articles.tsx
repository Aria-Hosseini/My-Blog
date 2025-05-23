import { getblog } from "@/app/blogs/page";

export default function Articles({ id, title, description }: getblog) {
  const plainText = description?.replace(/<[^>]+>/g , "") || "";

  return (
    <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-85 h-60 p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-purple-300">
      <h3 dir="rtl" className="text-xl font-extrabold text-gray-800 mb-3 line-clamp-1">
        {title}
      </h3>
      <p
        dir="rtl"
        className="text-gray-700 text-sm overflow-hidden line-clamp-5 leading-relaxed"
        title={plainText}
      >
        {plainText}
      </p>
    </div>
  );
}
