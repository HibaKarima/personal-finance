"use client"
import { useState } from "react";
import SideNavbars from "../components/SideNavbars";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex relative">
      <SideNavbars isOpen={isOpen} closeSidebar={() => setIsOpen(false)}/>
      <main  className={`transition-all duration-500 bg-[#f8f4f0] absolute right-0 ${
      isOpen ? "lg:w-[80%]" : "w-full"
    }`}>
      <>
            <button className={` left-0 text-white bg-black shadow rounded-r-3xl py-3 px-5 bottom-11 fixed ${isOpen ? "hidden" : "block"} cursor-pointer`} onClick={()=>setIsOpen(!isOpen)}>open menu</button>

      {children}
      </></main>
    </div>
  );
}
