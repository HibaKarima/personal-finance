"use client";
import { budgetItem } from "@/assests/assets";
import Image from "next/image";
import { useState } from "react";

interface AddBudgetModalProps {
  onClose: () => void;
  onAdd: (newBudget: budgetItem) => void;
  add: boolean;
  existingBudget?: budgetItem | null;
  deleteModel: boolean;
}

export default function AddBudgetModal({
  onClose,
  onAdd,
  add,
  deleteModel,
  existingBudget,
}: AddBudgetModalProps) {
  const [category, setCategory] = useState(existingBudget?.text || "");
  const [amount, setAmount] = useState(
    existingBudget?.fullamount.toString() || ""
  );
  const [color, setColor] = useState("#008080");

  const handleSubmit = () => {
    if (!category || !amount) return;
    if (deleteModel) {
      onAdd(existingBudget!);
      return;
    }
    onAdd({
      text: category,
      fullamount: Number(amount),
      num: existingBudget ? existingBudget.num : 0,
      color,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {add ? "Add New Budget" : "Edit Budget"}
          </h2>
          <button onClick={onClose} className=" cursor-pointer">
            <Image
              src="/images/icon-close-modal.svg"
              alt="colse"
              width={20}
              height={20}
            />
          </button>
        </div>
        <p className={`py-5 ${add ? "block" : "hidden"} text-gray-500`}>
          Choose a category to set a spending budget. These categories can help
          you monitor spending.
        </p>
        <p
          className={`py-5 ${
            !add && !deleteModel ? "block" : "hidden"
          } text-gray-500`}
        >
          As your budgets change, feel free to update your spending limits.
        </p>
        <p className={`py-5 ${deleteModel ? "block" : "hidden"} text-gray-500`}>
          Are you sure you want to delete this budget? This action cannot be
          reversed, and all the data inside it will be removed forever.
        </p>

        <div className={`flex-col gap-3 ${deleteModel ? "hidden" : "flex"}`}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Budget Category
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Maximum Spend
            </label>
            <input
              type="number"
              placeholder="$ 0.00"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Theme Color
            </label>

            <div className="w-full border border-gray-300 rounded-lg p-1 mt-1">
              <input
                type="color"
                className="cursor-pointer w-8 h-8 rounded-full "
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          </div>
          <button
            className={`mt-4  bg-black text-white w-full py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer`}
            onClick={handleSubmit}
          >
            {add ? "Add New" : "Save Changes"}
          </button>
        </div>
        <div
          className={` ${
            deleteModel ? "flex" : "hidden"
          } flex-col items-center gap-3`}
        >
          <button
            className="mt-4 bg-red-700 text-white  w-full py-2 rounded-lg transition cursor-pointer"
            onClick={handleSubmit}
          >
            Yes,Confirm
          </button>
          <button
            className=" bg-white w-full py-2 rounded-lg transition cursor-pointer"
            onClick={onClose}
          >
            No,Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
