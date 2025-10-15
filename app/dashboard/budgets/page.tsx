"use client";
import AddBudgetModal from "@/app/components/AddNewBudget";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import {
  budgetData,
  budgetItem,
  transactionData,
  transactionItem,
} from "@/assests/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

function BudgetsPage() {
  const total = budgetData.reduce((sum, d) => sum + d.num, 0);
  const limit = 975;
  const [showAddModal, setShowAddModal] = useState(false);
  const [addnew, setAddnew] = useState([...budgetData]);
  const [deleteModel, setDeleteModel] = useState(false);
  const [currentBudget, setCurrentBudget] = useState<budgetItem | null>(null);
  return (
    <div className="w-full p-8 lg:pb-8 pb-30 h-auto bg-[#f8f4f0]">
      <div className="flex justify-between items-center py-4">
        <h2 className="text-2xl font-bold">Budgets</h2>
        <Button
          variant="link"
          className="text-white bg-gray-900 cursor-pointer"
          onClick={() => setShowAddModal(true)}
        >
          + Add New Budget
        </Button>
      </div>
      <div className="flex lg:flex-row flex-col gap-2 lg:justify-between ">
        <div className="flex flex-col items-center justify-between shadow-xl border-1 border-gray-200 p-4 rounded-2xl lg:w-[45%] w-full h-fit bg-white">
          <div className="relative">
            <PieChart width={200} height={200}>
              <Pie
                data={addnew}
                dataKey="num"
                innerRadius={60}
                outerRadius={90}
                startAngle={90}
                endAngle={450}
              >
                {addnew.map((item1: budgetItem, index: number) => (
                  <Cell key={`cell-${index}`} fill={item1.color} />
                ))}
              </Pie>
            </PieChart>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold text-gray-900">${total}</h2>
              <p className="text-gray-500 text-sm">of ${limit} limit</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-2xl font-semibold py-2">Spending Summary</h2>
            {addnew.map((item: budgetItem, index: number) => {
              return (
                <div
                  key={index}
                  className="flex w-full gap-3 items-center border-b-1 border-gray-100 shadow py-2 px-3 rounded-xl"
                >
                  <div
                    className={`w-1 h-10 rounded`}
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-gray-500 text-sm">{item.text}</p>
                    <div className="flex gap-1 items-center">
                      <h4 className="font-semibold text-gray-900">
                        ${item.num}.00
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {" "}
                        of ${item.fullamount}.00
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 lg:w-[50%] w-full justify-center">
          {addnew.map((item: budgetItem, index: number) => {
            const relatedTransactions = transactionData
              .filter((t: transactionItem) => t.category === item.text)
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              );
            return (
              <div
                key={index}
                className="p-5 border-1 border-gray-200 shadow-xl rounded-2xl w-full bg-white"
              >
                <div className="flex items-center justify-between">
                  <div className=" flex items-center gap-3 p-2">
                    <div
                      className="w-5 h-5 rounded-full "
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <h2 className="text-2xl font-bold">{item.text}</h2>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="border-0 shadow-none">
                      <Image
                        src="/images/icon-ellipsis.svg"
                        alt="ellipsis icon"
                        width={20}
                        height={10}
                        className="cursor-pointer"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-20">
                      <DropdownMenuItem
                        className="bg-gray-200 cursor-pointer"
                        onClick={() => {
                          setCurrentBudget(item);
                          setShowAddModal(true);
                        }}
                      >
                        Edit Budget
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="bg-red-200 cursor-pointer"
                        onClick={() => {
                          setDeleteModel(true);
                          setCurrentBudget(item);
                          setShowAddModal(true);
                        }}
                      >
                        Delete Budget
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <p className="text-gray-500 py-2">
                  Maximum of ${item.fullamount}.00
                </p>
                <div className="w-full h-5 bg-[#f8f4f0] rounded overflow-hidden my-3">
                  <div
                    className="h-full rounded transition-all duration-300"
                    style={{
                      width: `${(item.num / item.fullamount) * 100}%`,
                      backgroundColor: item.color,
                    }}
                  ></div>
                </div>
                <div className="flex items-center gap-50 w-full p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-1 h-10 rounded bg-green-700"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div>
                      <p className="text-gray-500">Spent</p>
                      <h3>${item.num}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-1 h-10 rounded bg-[#f8f4f0]`}></div>
                    <div>
                      <p className="text-gray-500">Remaining</p>
                      <h3>${item.fullamount - item.num}.00</h3>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8f4f0] p-5 rounded-2xl">
                  <div className="flex justify-between items-center mb-2">
                    <h1 className="text-xl font-semibold text-gray-900">
                      Latest Spending
                    </h1>
                    <Link
                      href="/"
                      className="text-gray-500 text-sm flex items-center gap-3 hover:text-gray-700"
                    >
                      See All{" "}
                      <Image
                        src="/images/icon-caret-right.svg"
                        alt="carret"
                        width={5}
                        height={5}
                      />
                    </Link>
                  </div>
                  {relatedTransactions
                    .slice(0, 3)
                    .map((item1: transactionItem, index1: number) => {
                      return (
                        <div key={index1} className="">
                          <div className="flex items-center justify-between border-b-1 border-b-gray-200 p-2">
                            <div className="flex items-center gap-3">
                              <Image
                                src={item1.img}
                                alt="profile"
                                width={20}
                                height={20}
                                className="rounded-full lg:block hidden"
                              />
                              <p>{item1.name}</p>
                            </div>
                            <div className="flex flex-col gap-1 items-start">
                              <h3 className="font-semibold ">
                                ${item1.amount}.00
                              </h3>
                              <p className="text-gray-500 text-sm">
                                {item1.date}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
        {showAddModal && (
          <AddBudgetModal
            deleteModel={deleteModel}
            add={!currentBudget}
            existingBudget={currentBudget}
            onClose={() => {
              setShowAddModal(false);
              setCurrentBudget(null);
            }}
            onAdd={(newBudget) => {
              if (deleteModel && currentBudget) {
                setAddnew((prev) =>
                  prev.filter((b) => b.text !== currentBudget.text)
                );
                setDeleteModel(false);
              } else if (currentBudget) {
                setAddnew((prev) =>
                  prev.map((b) =>
                    b.text === currentBudget.text ? newBudget : b
                  )
                );
              } else {
                setAddnew((prev) => [...prev, newBudget]);
              }

              setShowAddModal(false);
              setCurrentBudget(null);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default BudgetsPage;
