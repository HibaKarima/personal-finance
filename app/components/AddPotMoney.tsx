import { potItem } from "@/assests/assets";
import Image from "next/image";
import React, { useState } from "react";
interface AddPotMoneyProps {
  potItem: potItem;
  mode: "add" | "withdraw";
  onClose: () => void;
  onConfirm: (updatedPot: potItem) => void;
}
function AddPotMoney({ potItem, mode, onClose, onConfirm }: AddPotMoneyProps) {
  const [amount, setAmount] = useState<number>(0);

  const handleConfirm = () => {
    const updatedPot =
      mode === "add"
        ? { ...potItem, num: potItem.num + amount }
        : { ...potItem, num: Math.max(potItem.num - amount, 0) };

    onConfirm(updatedPot);
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-xl font-semibold`}>
            {mode === "add"
              ? `Add to ${potItem.text}`
              : `Withdraw from ${potItem.text}`}
          </h2>
          <button onClick={onClose} className="cursor-pointer">
            <Image
              src="/images/icon-close-modal.svg"
              alt="colse"
              width={20}
              height={20}
            />
          </button>
        </div>
        <p className="text-gray-500 py-3">
          Lorem ipsum,uuos blanditiis eveniet numquam? Nam voluptas nostrum,
          neque distinctio soluta quibusdam id atque nisi quaerat omnis?
        </p>
        <div className="py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500">Total Saved</h3>
            <h1 className="text-2xl font-bold">{potItem.num}</h1>
          </div>
          <div className="w-full h-1 bg-[#f8f4f0] rounded-3xl overflow-hidden my-3">
            <div
              className="h-full rounded transition-all duration-300"
              style={{
                width: `${(potItem.num / potItem.fullamount) * 100}%`,
                backgroundColor: "yellow",
              }}
            ></div>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-bold text-gray-500">
              {Number(((potItem.num / potItem.fullamount) * 100).toFixed(2))}%
            </p>
            <p className="text-gray-500 text-sm">
              target of ${potItem.fullamount}
            </p>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Amount to Add
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <button
          className={`mt-4  bg-black text-white w-full py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer`}
          onClick={handleConfirm}
        >
          {mode === "add" ? "Confirm Addition" : "Confirm Withdrawal"}{" "}
        </button>
      </div>
    </div>
  );
}

export default AddPotMoney;
