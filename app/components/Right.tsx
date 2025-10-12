import React from "react";
import Budget from "./Budget";
import RecurringBills from "./RecurringBills";

function Right() {
  return (
    <div className="flex flex-col gap-2 justify-between w-full lg:w-[45%] min-h-[40%] lg:p-5">
      <Budget />
      <RecurringBills />
    </div>
  );
}

export default Right;
