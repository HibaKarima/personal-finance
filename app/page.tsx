import Link from "next/link";
import Hero from "./components/Hero";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <main className="bg-[#f8f4f0]">
       <header className="flex justify-between p-8 bg-gray-100 shadow-xl w-full h-auto rounded-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight">personal finance</h1>
        <div>
           <Link href="/signup"><Button className="bg-gray-800 text-white hover:bg-gray-500 px-8 py-3 text-lg font-semibold shadow-lg rounded-full hover:-translate-y-1 hover:scale-105  transform transition duration-300 cursor-pointer">Sign up</Button></Link>
        </div>
       </header>
       <Hero/>
    </main>
  );
}
