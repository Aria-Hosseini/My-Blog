import { getblog } from "../page";

interface blogprops {
  params: Promise<{ id: number }>;
  SearchParams: Promise<{}>;
}

export default async function blog(props: blogprops) {
  const { id } = await props.params;

  const result = await fetch(`http://localhost:8000/articles/${id}`);
  const data = (await result.json()) as getblog;

  return (
    <div className="max-w-4xl mx-auto p-10 bg-gradient-to-br from-purple-100 to-purple-200 shadow-2xl rounded-3xl mt-20 border border-purple-300 mb-20">
      <div className="flex flex-col space-y-3 items-center justify-center mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-snug tracking-tight">
          {data.title}
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          منتشر شده توسط سایت | تاریخ مقاله
        </p>
      </div>

      <hr className="my-8 border-purple-300" />

      <div
        dir="rtl"
        className="text-gray-800 leading-relaxed prose prose-lg prose-slate max-w-none text-justify"
        dangerouslySetInnerHTML={{ __html: data.description || "" }}
      />
    </div>
  );
}
