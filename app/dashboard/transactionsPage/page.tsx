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
  const [sortOption, setSortOption] = useState("Latest");

  const itemsPerPage = 10;
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
 
  const filteredData = useMemo(() => {
  return transactionData
    .filter((item) =>
      search ? item.name.toLowerCase().includes(search.toLowerCase()) : true
    )
    .filter((item) => (category !== "all" ? item.category === category : true));
}, [search, category]);


const sortedData = useMemo(() => {
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
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "Z to A":
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "Highest":
      sorted.sort((a, b) => b.amount - a.amount);
      break;
    case "Lowest":
      sorted.sort((a, b) => a.amount - b.amount);
      break;
  }

  return sorted;
}, [filteredData, sortOption]);


const totalPages = Math.ceil(sortedData.length / itemsPerPage);
const currentData = useMemo(() => {
  const start = (currentPage - 1) * itemsPerPage;
  return sortedData.slice(start, start + itemsPerPage);
}, [sortedData, currentPage]);

  return (
    <div className="lg:py-2 lg:px-10 w-full pb-30 h-screen px-5">
      <h1 className="text-2xl font-bold py-5">Transactions</h1>
      <div className="rounded-xl bg-white p-5">
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
                 {["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"].map(
      (option) => (
        <DropdownMenuItem
          key={option}
          onClick={() => setSortOption(option)}
          className={sortOption === option ? "font-semibold bg-gray-300" : ""}
        >
          {option}
        </DropdownMenuItem>
      )
    )}
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
                  onClick={() =>{
                     setCategory("all");
                    setSortOption("none");
                    setSearch("")
                    }}
                  className="font-bold"

                >
                  All Transactions
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategory("General")}>
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
           <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] items-center w-full px-2 border-b border-gray-500 text-gray-500">
  <div className="pb-2">Recipient / Sender</div>
  <div className="grid grid-cols-[1fr_1fr] items-center ">
  <div className="pb-2 text-center">Category</div>
  <div className="pb-2 text-center">Transaction Date</div>
  </div>
  <div className="pb-2 text-right ">Amount</div>
</div>

          </div>
         <div className="w-full flex flex-col gap-3">
  {currentData.map((item: transactionItem, index: number) => (
    <div
      key={index}
      className="grid grid-cols-[1fr_1fr_1fr] items-center w-full px-2 py-2 border-b border-gray-200 hover:bg-gray-50"
    >
      {/* Recipient */}
      <div className="flex gap-4 items-center">
        <Image
          src={item.img}
          alt={item.name}
          width={35}
          height={35}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-medium">{item.name}</span>
          <span className="text-gray-500 text-sm md:hidden">
            {item.category}
          </span>
        </div>
      </div>

      {/* Category */}
      <div className="grid grid-cols-[1fr_1fr] items-center">
      <div className="hidden md:block text-center text-gray-500">
        {item.category}
      </div>

      {/* Date */}
      <div className="hidden md:block text-center text-gray-500">
        {item.date}
      </div>
</div>
      {/* Amount */}
      <div
        className={`text-right font-semibold ${
          item.state === "earning" ? "text-green-600" : "text-black"
        }`}
      >
        {item.state === "earning" ? "+" : "-"}$
        {Math.abs(item.amount).toFixed(2)}
      </div>
    </div>
  ))}
</div>

        </div>
        {filteredData.length === 0 && (
         
              <div
               
                className="text-center p-4 text-gray-500 italic w-full"
              >
                No transactions found
                
              </div>
          
          )}
        <div className="w-full mt-6">
          {totalPages > 1 && (
          <Pagination>
            <PaginationContent className="w-full justify-between items-center px-4">
              <PaginationItem className="border rounded-xl border-gray-500 text-gray-800">
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
              <PaginationItem className="border rounded-xl border-gray-500 text-gray-8">
                <PaginationNext href="#" size="default" onClick={handleNext} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          )}
        </div>
      </div>
    </div>
  );
}

export default TransactionsPage;
