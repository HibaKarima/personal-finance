"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import {
  billsData,
  billsNameData,
  billsNametItem,
  billstItem,
} from "@/assests/assets";
function RecurringBills() {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("Latest");
  const extractDay = (date: string) => {
    const match = date.match(/\d+/); 
    return match ? parseInt(match[0]) : 0;
  };
  const currentDay = new Date().getDate();

  const filteredData = useMemo(() => {
    return billsNameData.filter((item) =>
      search ? item.text.toLowerCase().includes(search.toLowerCase()) : true
    );
  }, [search]);
  const sorted = [...filteredData];

  switch (sortOption) {
    case "Latest":
      sorted.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      break;
    case "Oldest":
      sorted.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      break;
    case "A to Z":
      sorted.sort((a, b) => a.text.localeCompare(b.text));
      break;
    case "Z to A":
      sorted.sort((a, b) => b.text.localeCompare(a.text));
    case "Highest":
      sorted.sort((a, b) => b.value - a.value);
      break;
    case "Lowest":
      sorted.sort((a, b) => a.value - b.value);
      break;
  }
  const total = billsNameData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="p-7 w-full min-h-screen">
      <h1 className="text-2xl font-bold py-4">Recurring Bills</h1>
      <div className="flex justify-between items-center w-full">
        <div className="flex lg:flex-col flex-row gap-5 lg:w-[25%] w-full">
          <div className="bg-black rounded-xl lg:w-full p-5 text-white">
            <Image
              src="/images/icon-recurring-bills.svg"
              alt="icon-recurring-bills"
              width={40}
              height={40}
              className="mb-4"
            />
            <div>
              <p>Total Bills</p>
              <h2 className="font-bold text-2xl">${total}</h2>
            </div>
          </div>
          <div className=" rounded-xl lg:w-full p-5 bg-white">
            <h2 className="mb-2">Summary</h2>
            {billsData.map((item1: billstItem, index1: number) => {
              return (
                <div
                  key={index1}
                  className={`flex ${
                    item1.text == "Due Soon" ? "text-red-500" : "text-gray-500"
                  } items-center justify-between py-3 border-b-1 border-b-gray-200`}
                >
                  <p>{item1.text}</p>
                  <p className="font-bold">
                    {item1.num} (${item1.value}.00)
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rounded-xl bg-white p-7 lg:w-[70%] w-full">
          <div className="flex justify-between items-center px-2">
            <div className="relative">
              <input
                type="text"
                value={search}
                placeholder="Search bill"
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-200 rounded-md pl-10 pr-3 lg:py-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
              <Image
                src="/images/icon-search.svg"
                alt="seaarch icon"
                width={18}
                height={18}
                className="absolute right-3 top-2 text-gray-400 lg:w-4.5 lg:h-4.5 w-3 h-3"
              />
            </div>
            <div className="flex gap-4 ">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>
                    <div className="hidden md:flex cursor-pointer shadow px-3 py-2 rounded gap-1 items-center">
                      <p>Sort by </p>
                      <Image
                        src="/images/icon-caret-down.svg"
                        alt="caret down"
                        width={10}
                        height={10}
                      />
                    </div>
                    <Image
                      src="/images/icon-sort-mobile.svg"
                      alt="filter"
                      width={20}
                      height={20}
                      className="md:hidden cursor-pointer"
                    />
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-46 bg-gray-200 mr-6">
                  {[
                    "Latest",
                    "Oldest",
                    "A to Z",
                    "Z to A",
                    "Highest",
                    "Lowest",
                  ].map((option) => (
                    <DropdownMenuItem
                      key={option}
                      onClick={() => setSortOption(option)}
                      className={
                        sortOption === option ? "font-semibold bg-gray-300" : ""
                      }
                    >
                      {option}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="w-full  text-sm mt-5 flex flex-col flex-1 items-center px-2">
            <div className="w-full">
              <div className="text-gray-500 border-b text-left border-gray-500 flex items-center flex-1 justify-between w-full  px-3">
                <div className="pb-5">Bill Title</div>
                <div className="pb-5">Due Date</div>
                <div className="pb-5 text-right">Amount</div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-5 items-center">
              {sorted.map((item: billsNametItem, index: number) => (
                <div
                  key={index}
                  className="border-b border-gray-500 hover:bg-gray-50 flex items-center flex-1 justify-between w-full p-3 text-left"
                >
                  <div className="flex gap-3 items-center">
                    <Image
                      src={item.img}
                      alt="profile"
                      width={23}
                      height={23}
                      className=" rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="font-medium">{item.text}</p>
                      <div className=" md:hidden flex gap-1.5 items-center">
                        <p className="text-gray-500 text-sm">{item.date}</p>
                        {(() => {
                          const billDay = extractDay(item.date);
                          const diff = billDay - currentDay;

                          if (item.paid) {
                            return (
                              <Image
                                src="/images/icon-bill-paid.svg"
                                alt="paid"
                                width={10}
                                height={10}
                              />
                            );
                          } else if (!item.paid && diff <= 2 && diff >= 0) {
                            return (
                              <Image
                                src="/images/icon-bill-due.svg"
                                alt="due soon"
                                width={10}
                                height={10}
                              />
                            );
                          } else {
                            return null;
                          }
                        })()}{" "}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex  text-center  items-center justify-center gap-2 text-gray-600">
                    <p className="text-gray-500 text-sm">{item.date}</p>
                    {(() => {
                      const billDay = extractDay(item.date);
                      const diff = billDay - currentDay;

                      if (item.paid) {
                        return (
                          <Image
                            src="/images/icon-bill-paid.svg"
                            alt="paid"
                            width={10}
                            height={10}
                          />
                        );
                      } else if (!item.paid && diff <= 2 && diff >= 0) {
                        return (
                          <Image
                            src="/images/icon-bill-due.svg"
                            alt="due soon"
                            width={10}
                            height={10}
                          />
                        );
                      } else {
                        return null;
                      }
                    })()}
                  </div>
                  <div>
                    <h1>{item.value}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecurringBills;
