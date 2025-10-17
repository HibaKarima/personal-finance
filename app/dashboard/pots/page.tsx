"use client";
import { Button } from '@/app/components/ui/button'
import { potData, potItem } from '@/assests/assets'
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import Image from 'next/image';
import AddNewPot from '@/app/components/AddNewPot';
import AddPotMoney from '@/app/components/AddPotMoney';
function PotsPage() {
      const [showAddModal, setShowAddModal] = useState(false);
      const [showAddMoney, setShowAddMoney] = useState(false);
  const [mode, setMode] = useState<"add" | "withdraw" | null>(null);

  const handleConfirm = (updatedPot:potItem) => {
    setAddnew((prev) =>
      prev.map((p:potItem) => (p.text === updatedPot.text ? updatedPot : p))
    );
  };
      const [addnew, setAddnew] = useState([...potData]);
      const [deleteModel, setDeleteModel] = useState(false);
      const [currentPot, setCurrentPot] = useState<potItem | null>(null);
  return (
    <div className='p-7 h-auto bg-[#f8f4f0]  pb-30 lg:pb-7'>
         <div className="flex justify-between items-center py-4">
        <h2 className="text-2xl font-bold">Pots</h2>
        <Button
          variant="link"
          className="text-white bg-gray-900 cursor-pointer"
           onClick={() => setShowAddModal(true)}
        >
          + Add New Pots
        </Button>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 w-full gap-5'>
        {
            addnew.map((item:potItem , index:number)=>{
                return(
                    <div key={index} className='bg-white p-5 rounded-xl'>
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
                          setCurrentPot(item);
                          setShowAddModal(true);
                        }}
                      >
                        Edit Pot
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="bg-red-200 cursor-pointer"
                            onClick={() => {
                          setDeleteModel(true);
                          setCurrentPot(item);
                          setShowAddModal(true);
                        }}
                      >
                        Delete Pot
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className='py-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-gray-500'>Total Saved</h3>
                        <h1 className='text-2xl font-bold'>${item.num}</h1>
                    </div>
  <div className="w-full h-2 bg-[#f8f4f0] rounded-3xl overflow-hidden my-3">
                  <div
                    className="h-full rounded transition-all duration-300"
                    style={{
                      width: `${(item.num / item.fullamount) * 100}%`,
                      backgroundColor: item.color,
                    }}
                  ></div>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='font-bold text-gray-500'>{Number(((item.num / item.fullamount) * 100).toFixed(2))}%</p>
                    <p className='text-gray-500 text-sm'>target of ${item.fullamount}</p>
                </div>
                </div>
                <div className='w-full grid grid-cols-2 gap-5'>
                <button className='bg-[#f8f4f0] py-4 px-6 rounded-xl cursor-pointer' 
                onClick={()=>
                {setShowAddMoney(true) 
                  setMode("add");
                setCurrentPot(item);}
                }>+ Add Money</button>               
                <button className='bg-[#f8f4f0] py-4 px-6 rounded-xl cursor-pointer' 
                onClick={()=>{
                  setShowAddMoney(true)
                  setMode("withdraw");
                     setCurrentPot(item);

                  }}>Withdraw</button>               

 </div>
                    </div>
                )
            })
        }
         {showAddModal && (
                  <AddNewPot
                    deleteModel={deleteModel}
                    add={!currentPot}
                    existingPot={currentPot}
                    onClose={() => {
                      setShowAddModal(false);
                      setCurrentPot(null);
                    }}
                    onAdd={(newPot) => {
                      if (deleteModel && currentPot) {
                        setAddnew((prev) =>
                          prev.filter((b) => b.text !== currentPot.text)
                        );
                        setDeleteModel(false);
                      } else if (currentPot) {
                        setAddnew((prev) =>
                          prev.map((b) =>
                            b.text === currentPot.text ? newPot : b
                          )
                        );
                      } else {
                        setAddnew((prev) => [...prev, newPot]);
                      }
        
                      setShowAddModal(false);
                      setCurrentPot(null);
                    }}
                  />
                )}

                 {showAddMoney  && mode && currentPot && (
        <AddPotMoney
          potItem={currentPot}
          mode={mode}
          onClose={() => {
            setCurrentPot(null)
            setShowAddMoney(false)}
          }
            onConfirm={(updatedPot) => {
      setAddnew((prev) =>
        prev.map((b) =>
          b.text === currentPot.text ? updatedPot : b
        )
      );
      setShowAddMoney(false);
      setCurrentPot(null);
    }}
        />
      )}
      </div>
    </div>
  )
}

export default PotsPage