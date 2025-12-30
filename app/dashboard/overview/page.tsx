import React from "react";
import Left from "../../components/Left";
import Right from "../../components/Right";
import OverviewHead from "../../components/OverviewHead";

function Overview() {
  
  return (
    <div className="w-full flex flex-col justify-evenly lg:pb-5 h-screen overflow-hidden pb-30">
      <OverviewHead />
      <div className="flex flex-col lg:flex-row gap-3 items-center h-screen">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default Overview;
