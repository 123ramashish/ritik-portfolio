import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-12 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <a href="/zunaki/portfolio" className="text-white p-2 shadow-lg rounded-xl bg-black whitespace-nowrap border border-gray-100">Zunaki Portfolio</a>
      <a href="/ritik/portfolio" className="text-white p-2 shadow-lg rounded-xl bg-black whitespace-nowrap border border-gray-100">Ritik Portfolio</a>
      
    </div>
  );
}
