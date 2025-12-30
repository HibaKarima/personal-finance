import { cardData, cardItem } from "@/assests/assets";
import React from "react";

function OverviewHead() {
  return (
    <div className="flex gap-5 flex-col pt-5 lg:px-4 pb-3 lg:pb-0 w-full">
      <h1 className="text-2xl font-bold">Overview</h1>
      <div className="grid md:grid-cols-3 sm:grid-rows-3 md:grid-rows-1 gap-2">
        {cardData.map((item: cardItem, index: number) => {
          return (
            <div
              key={index}
              className=" p-4 bg-white hover:bg-gray-900 hover:text-white rounded-xl min-h-[100px]"
            >
              <p>{item.text}</p>
              <h1 className="text-2xl pt-3">${item.num}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OverviewHead;
