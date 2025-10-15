
import { StaticImageData } from "next/image";
import navIcon1 from "../public/images/icon-nav-overview.svg"
import navIcon2 from "../public/images/icon-nav-transactions.svg"
import navIcon3 from "../public/images/icon-nav-budgets.svg"
import navIcon4 from "../public/images/icon-nav-pots.svg"
import navIcon5 from "../public/images/icon-nav-recurring-bills.svg"


export interface sidebar {
  icon: StaticImageData | string;
  text: string;
  link:string;
}
export const sidebarData:sidebar[] = [
   {icon: navIcon1 , text : "Overview",link:'/dashboard'},
   {icon: navIcon2 , text : "Transactions",link:'/dashboard/transactionsPage'},
   {icon: navIcon3 , text : "Budgets",link:'/dashboard/budgets'},
   {icon: navIcon4 , text : "Pots",link:'overview'},
   {icon: navIcon5 , text : "Recurring Bills",link:'overview'},
   
];
export interface cardItem {
  text: string;
  num:string;
}
export const cardData:cardItem[] = [
   {text: "Current Balance" , num :"4,836,00" },
   {text: "Income" , num : "3,814,25"},
   {text: "Expenses" , num : "1,700,50"},
   
];

export interface potItem {
  text: string;
  num:string;
  color:string;
}
export const potData:potItem[] = [
   {text: "Savings" , num :"159",color:'bg-emerald-600' },
   {text: "Consert Ticket" , num : "110",color:'bg-slate-600'},
   {text: "Gift" , num : "40",color:'bg-teal-500'},
   {text: "New Laptop" , num : "10",color:'bg-amber-300'},
];

export interface budgetItem {
  text: string;
  num:number;
  color:string;
  [key: string]: string | number;
  fullamount:number;
}
export const budgetData:budgetItem[] = [
   {text: "Entertainment" , num :59,color:'#10B981' ,fullamount:150},
   {text: "Bills" , num : 110,color:'#64748B',fullamount:550},
   {text: "Dining Out" , num : 40,color:'#14B8A6',fullamount:1150},
   {text: "Personal Care" , num : 10,color:'#FACC15',fullamount:750},
];

export interface billstItem {
  text: string;
  value:number;
  color:string;
}
export const billsData:billstItem [] = [
   {text: "Paid Bills" , value :190,color:'#10B981' },
   {text: "Total Upcoming" , value : 194,color:'#FACC15'},
   {text: "Due Soon" , value : 75,color:'#14B8A6'},
   {text: "Personal Care" , value : 10,color:'#FACC15'},
];

export interface transactionItem {
  img:  StaticImageData | string;
  name:string;
  amount:number;
  date:string;
  state:string;
  category: string
}
export const transactionData: transactionItem[] = [
   {img: "/images/logo-small.svg" , name :"Karima",amount:6,date:'11 Aug 2024',state:"earning",category: "Entertainment" },
   {img: "/images/logo-small.svg" , name :"Karima",amount:876,date:'1 Sep 2024' ,state:"spending",category: "Entertainment"},
   {img: "/images/logo-small.svg" , name :"Karima",amount:876,date:'10 Aug 2027',state:"earning",category: "Entertainment" },
   {img: "/images/logo-small.svg" , name :"Hiba Karima",amount:8706,date:'10 Aug 2024',state:"spending",category: "General" },
   {img: "/images/logo-small.svg" , name :"Hiba Karima",amount:876,date:'10 Aug 2028',state:"spending" ,category: "General"},
      {img: "/images/logo-small.svg" , name :"alaa",amount:6,date:'10 Aug 2024',state:"earning",category: "Dining Out" },
   {img: "/images/logo-small.svg" , name :"Hiba Karima",amount:876,date:'10 Aug 2025' ,state:"spending",category: "Dining Out"},
   {img: "/images/logo-small.svg" , name :"Hiba Karima",amount:876,date:'10 Aug 2023',state:"earning",category: "Dining Out" },
   {img: "/images/logo-small.svg" , name :"Hiba Karima",amount:8706,date:'10 Aug 2022',state:"spending",category: "Bills" },
   {img: "/images/logo-small.svg" , name :"Hiba Karima",amount:876,date:'10 Aug 2021',state:"spending" ,category: "Bills"},
      {img: "/images/logo-small.svg" , name :"Hiba Karima",amount:6,date:'10 Aug 2004',state:"earning",category: "Bills" },
   {img: "/images/logo-small.svg" , name :"Hiba Karima",amount:876,date:'10 Aug 2020' ,state:"spending",category: "Personal Care"},
   {img: "/images/logo-small.svg" , name :"Hiba Karima",amount:876,date:'10 Aug 2011',state:"earning",category: "Personal Care" },
   {img: "/images/logo-small.svg" , name :"Hiba Karima",amount:8706,date:'10 Aug 2012',state:"spending",category: "Personal Care" },
   {img: "/images/logo-small.svg" , name :"aiasaa",amount:876,date:'10 Aug 2024',state:"spending" ,category: "dining"},

];