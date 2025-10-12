import { transactionData, transactionItem } from "@/assests/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Transactions() {
  return (
    <div className="bg-white rounded-2xl px-4 py-2 shadow-sm mt-2 max-h-[350px] ">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl font-semibold text-gray-900">Transactions</h1>
        <Link
          href="/"
          className="text-gray-500 text-sm flex items-center gap-3 hover:text-gray-700"
        >
          View All{" "}
          <Image
            src="images/icon-caret-right.svg"
            alt="carret"
            width={5}
            height={5}
          ></Image>
        </Link>
      </div>

      <div className="flex flex-col gap-2 ">
        {transactionData
          .slice(0, 5)
          .map((item: transactionItem, index: number) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-none"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                </div>
              </div>

              <div className="text-right">
                <p
                  className={`font-semibold ${
                    item.state === "earning"
                      ? "text-green-600"
                      : "text-black-500"
                  }`}
                >
                  {item.state === "earning"
                    ? `+${item.amount}`
                    : `-${item.amount}`}
                  $
                </p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Transactions;
