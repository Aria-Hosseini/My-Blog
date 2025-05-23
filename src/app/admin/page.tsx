
import Sidebar from "@/components/Sidebar";

export default function Admin() {
  

  return (
    <div className="flex min-h-screen bg-gray-100">
    
      <Sidebar />

    
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">👋 خوش آمدید</h1>
        <p className="text-gray-600">یکی از گزینه‌های منو را از سمت راست انتخاب کنید.</p>
      </main>
    </div>
  );
}
