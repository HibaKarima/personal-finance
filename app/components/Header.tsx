import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-100 shadow-xl w-full h-auto rounded-b-2xl">
      <h1 className="text-4xl font-extrabold tracking-tight">finance</h1>
      <div>
        <Link href="/singin">
          <Button className="border-gray-800 border-2 hover:text-white hover:bg-gray-500  text-lg font-semibold shadow-lg rounded-full hover:scale-105 transform transition duration-300">
            Sign in
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
