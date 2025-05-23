import Articles from "@/components/Articles";
import Container from "@/components/Container";
import Link from "next/link";

export interface getblog {
    id?: number;
    title?: string;
    description?: string; 
}

export default async function Blogs() {
    const result = await fetch("http://localhost:8000/articles");
    const data = (await result.json()) as getblog[];

    console.log(data); 

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Container>
                <div className="grid grid-cols-4 place-items-center gap-4 py-5 px-5">
                    {data.map((article) => (
                        <Link href={`/blogs/${article.id}`}> <Articles key={article.id} {...article} /> </Link>
                       
                    ))}
                </div>
            </Container>
        </div>
    );
}
