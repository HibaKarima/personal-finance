import { billsData, billstItem } from "@/assests/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function RecurringBills() {
  return (
    <div className="flex flex-col gap-2 p-5 rounded-2xl bg-white shadow-sm">
      <div className="flex justify-between gap-4 items-center">
        <h1 className="text-xl font-semibold text-gray-900">Recurring Bills</h1>
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
      <div className="flex flex-col items-center gap-2 rounded-2xl">
        {billsData.slice(0, 3).map((item: billstItem, index: number) => (
          <div
            key={index}
            className="flex justify-between items-center rounded-xl border-s-5 bg-[#f8f4f0] p-4 w-full"
            style={{ borderInlineStartColor: item.color }}
          >
            <p className="text-gray-500">{item.text}</p>
            <h2 className=" font-bold text-gray-900 ">${item.value}.00</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecurringBills;
