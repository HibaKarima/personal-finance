import { billsData, billstItem } from "@/assests/assets";

import React from "react";
import Title from "./Title";

function RecurringBills() {
  return (
    <div className="flex flex-col gap-2 p-5 rounded-2xl bg-white shadow-sm">
           <Title title="Recurring Bills" link="/dashboard/recurringBills" text="See Details"/>

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
