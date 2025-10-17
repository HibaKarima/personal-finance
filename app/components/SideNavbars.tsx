"use client";
import { sidebar, sidebarData } from "@/assests/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface SidebarProps {
  isOpen: boolean;         
  closeSidebar: () => void;
}
function SideNavbars({ isOpen, closeSidebar }: SidebarProps) {
  const pathname = usePathname();
  return (
    <div className={`${isOpen ? "flex" : "hidden"} lg:w-[20%] rounded-t-xl lg:rounded-t-none lg:rounded-r-xl w-full  min-h-screen h-full  flex-row lg:flex-col bg-gray-950 shadow text-gray-100 lg:py-6 lg:pr-6 lg:pl-0 p-5  fixed bottom-0 right-3 left-0 lg:right-auto z-50`}>
      <h2 className="text-2xl font-extrabold mb-10 ml-12 tracking-tight hidden lg:block">
        finance
      </h2>

      <div className="flex lg:flex-col lg:gap-6 lg:items-start items-center w-full  justify-evenly">
        {sidebarData.map((item: sidebar, index: number) => {
          const isActive = pathname === item.link;
          return (
            <Link
              href={item.link}
              key={index}
              className={`flex flex-col lg:flex-row items-center justify-evenly lg:gap-3 lg:px-4 lg:py-3 lg:rounded-r-xl lg:rounded-t-none  rounded-t-xl cursor-pointer transition-all duration-200 w-full ${
                isActive
                  ? "bg-neutral-100 text-gray-900 font-medium lg:border-l-4 lg:border-b-0 border-b-4 border-emerald-400 py-2"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-700"
              }`}
            >
              <div className="w-full lg:justify-start lg:gap-2 gap-5 flex lg:ml-8 flex-col lg:flex-row justify-center items-center">
                <Image
                  src={item.icon}
                  alt={`${item.text} image`}
                  width={20}
                  height={20}
                />{" "}
                <p className="hidden md:block">{item.text}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className=" hidden lg:block absolute bottom-15 text-center left-10 text-gray-400 group hover:text-gray-600 transition-colors duration-300">
        <Link href="" className="flex gap-3 items-center font-semibold" onClick={closeSidebar}>
          <Image
            src="/images/icon-minimize-menu.svg"
            alt="minmize icon"
            width={17}
            height={17}
            className="transition-transform duration-500 group-hover:-translate-x-2"
          />{" "}
          Minimize Menue
        </Link>
      </div>
    </div>
  );
}
export default SideNavbars;
