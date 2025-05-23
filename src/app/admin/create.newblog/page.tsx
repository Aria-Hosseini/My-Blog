
import Container from "@/components/Container";
import CreateArticle from "@/components/CreateArticle";
import Sidebar from "@/components/Sidebar";

export default function Createnewblog() {
  

  return (
    <div className="flex min-h-screen bg-gray-50">
   
   <Sidebar />
      

      <main className="flex-1 p-10">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-right">
          اضافه کردن مقاله جدید
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto">
          <Container>

            <CreateArticle />

          </Container>
        </div>
      </main>
    </div>
  );
}
