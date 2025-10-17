import React from "react";
import Left from "../../components/Left";
import Right from "../../components/Right";
import OverviewHead from "../../components/OverviewHead";

function Overview() {
  
  return (
    <div className="w-full lg:pb-5 h-auto overflow-hidden pb-30">
      <OverviewHead />
      <div className="flex flex-col lg:flex-row gap-3 items-center">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default Overview;
