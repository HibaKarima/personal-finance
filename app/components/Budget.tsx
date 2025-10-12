"use client";
import { budgetData, budgetItem } from "@/assests/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

function Budget() {
  const total = budgetData.reduce((sum, d) => sum + d.num, 0);
  const limit = 975;
  return (
    <div className="h-auto bg-white rounded-2xl p-4 shadow-sm w-full">
      <div className="flex justify-between gap-4 items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-900">Budgets</h1>
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
      <div className="flex items-center justify-around  ">
        <div className="relative">
          <PieChart width={200} height={200}>
            <Pie
              data={budgetData}
              dataKey="num"
              innerRadius={60}
              outerRadius={90}
              startAngle={90}
              endAngle={450}
            >
              {budgetData.map((item1: budgetItem, index: number) => (
                <Cell key={`cell-${index}`} fill={item1.color} />
              ))}
            </Pie>
          </PieChart>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-gray-900">${total}</h2>
            <p className="text-gray-500 text-sm">of ${limit} limit</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {budgetData.map((item: budgetItem, index: number) => {
            return (
              <div key={index} className="flex items-center gap-3">
                <div
                  className={`w-1 h-10 rounded`}
                  style={{ backgroundColor: item.color }}
                ></div>
                <div>
                  <p className="text-gray-500 text-sm">{item.text}</p>
                  <h4 className="font-semibold text-gray-900">
                    ${item.num}.00
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Budget;
