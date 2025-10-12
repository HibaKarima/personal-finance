"use client";
import { transactionData, transactionItem } from "@/assests/assets";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/app/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import Image from "next/image";
import React, { useState, useMemo } from "react";

function TransactionsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(transactionData.length / itemsPerPage);
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return transactionData.slice(start, start + itemsPerPage);
  }, [currentPage, transactionData]);
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="lg:py-2 lg:px-10 w-full pb-30 h-screen px-5">
      <h1 className="text-2xl font-bold py-4">Transactions</h1>
      <div className="rounded-xl bg-white p-4">
        <div className="flex justify-between items-center px-2">
          <div className="relative">
            <input
              type="text"
              value={search}
              placeholder="Search Transaction"
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
                <DropdownMenuItem>Latest</DropdownMenuItem>
                <DropdownMenuItem>Oldest</DropdownMenuItem>
                <DropdownMenuItem>A to Z</DropdownMenuItem>
                <DropdownMenuItem>Z to A</DropdownMenuItem>
                <DropdownMenuItem>Highest</DropdownMenuItem>
                <DropdownMenuItem>Lowest</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div>
                  <div className="hidden md:flex cursor-pointer shadow px-3 py-2 rounded gap-1 items-center">
                    <p>Category </p>
                    <Image
                      src="/images/icon-caret-down.svg"
                      alt="caret down"
                      width={10}
                      height={10}
                    />
                  </div>
                  <Image
                    src="/images/icon-filter-mobile.svg"
                    alt="filter"
                    width={20}
                    height={20}
                    className="md:hidden cursor-pointer pr-1"
                  />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56 bg-gray-200 mr-6">
                <DropdownMenuItem
                  onClick={() => setCategory("all")}
                  className="font-bold"
                >
                  All Transactions
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategory("general")}>
                  General
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategory("bills")}>
                  Bills
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategory("entertainment")}>
                  Entertainment
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategory("groceries")}>
                  Groceries
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategory("dining")}>
                  Dining Out
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategory("transportation")}>
                  Transportation
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="w-full h-full text-sm mt-5 flex flex-col flex-1 justify-center items-center px-2">
          <div className="w-full">
            <div className="text-gray-500 border-b text-left border-gray-500 flex items-center justify-between w-full  px-2">
              <div className="pb-2">Recipient / Sender</div>
              <div className="hidden gap-5 items-center text-center md:flex">
                <p className="pb-2">Category</p>
                <p className="pb-2">Transaction Date</p>
              </div>
              <div className="pb-2 text-right">Amount</div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            {currentData.map((item: transactionItem, index: number) => (
              <div
                key={index}
                className="border-b border-gray-500 hover:bg-gray-50 flex items-center justify-between w-full py-0.5 px-2"
              >
                <div className=" flex gap-5 items-center">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={23}
                    height={23}
                    className=" rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">{item.name}</span>
                    <p className="text-gray-500 md:hidden text-sm">
                      {item.category}
                    </p>
                  </div>
                </div>

                <div className="hidden gap-5 items-center md:flex">
                  <p className="text-gray-500">{item.category}</p>
                  <p className="text-gray-500">{item.date}</p>
                </div>

                <div
                  className={`text-right font-semibold ${
                    item.state === "earning"
                      ? "text-green-600"
                      : "text-black-500"
                  }`}
                >
                  {item.state === "earning" ? "+" : "-"}$
                  {Math.abs(item.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-6">
          <Pagination>
            <PaginationContent className="w-full justify-between items-center px-4">
              <PaginationItem className="border-1 rounded-xl border-gray-500 text-gray-800">
                <PaginationPrevious
                  href="#"
                  size="default"
                  onClick={handlePrevious}
                />
              </PaginationItem>
              <div className="flex gap-3">
                {Array.from({ length: totalPages }, (_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === i + 1}
                      onClick={() => handlePageClick(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </div>
              <PaginationItem className="border-1 rounded-xl border-gray-500 text-gray-8">
                <PaginationNext href="#" size="default" onClick={handleNext} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default TransactionsPage;
