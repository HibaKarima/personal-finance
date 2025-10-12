import { potData, potItem } from "@/assests/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Pots() {
  return (
    <div className="h-auto bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex justify-between gap-4 items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-900">Pots</h1>
        <Link
          href="/"
          className="text-gray-500 text-sm flex items-center gap-3 hover:text-gray-700"
        >
          See Details{" "}
          <Image
            src="images/icon-caret-right.svg"
            alt="carret"
            width={5}
            height={5}
          ></Image>
        </Link>
      </div>
      <div className="flex items-center gap-2 md:justify-evenly">
        <div className="flex items-center lg:gap-4 gap-2 bg-gray-50 rounded-xl md:px-10 py-4 px-3">
          <Image
            src="images/icon-pot.svg"
            alt="icon pot"
            width={40}
            height={40}
            className="object-contain"
          />
          <div>
            <p className="text-gray-500 text-sm mb-1">Total Saved</p>
            <h2 className="lg:text-3xl text-xl  font-bold text-gray-900">
              $850
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:gap-x-10 lg:gap-y-4 gap-3">
          {potData.map((item: potItem, index: number) => {
            return (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-1 rounded h-full ${item.color}`}></div>
                <div>
                  <p className="text-gray-500 text-sm">{item.text}</p>
                  <h4 className="font-semibold text-gray-900">${item.num}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Pots;
