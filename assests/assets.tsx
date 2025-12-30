import { StaticImageData } from "next/image";
import navIcon1 from "../public/images/icon-nav-overview.svg";
import navIcon2 from "../public/images/icon-nav-transactions.svg";
import navIcon3 from "../public/images/icon-nav-budgets.svg";
import navIcon4 from "../public/images/icon-nav-pots.svg";
import navIcon5 from "../public/images/icon-nav-recurring-bills.svg";

export interface sidebar {
  icon: StaticImageData | string;
  text: string;
  link: string;
}
export const sidebarData: sidebar[] = [
  { icon: navIcon1, text: "Overview", link: "/dashboard" },
  { icon: navIcon2, text: "Transactions", link: "/dashboard/transactionsPage" },
  { icon: navIcon3, text: "Budgets", link: "/dashboard/budgets" },
  { icon: navIcon4, text: "Pots", link: "/dashboard/pots" },
  {
    icon: navIcon5,
    text: "Recurring Bills",
    link: "/dashboard/recurringBills",
  },
];
export interface cardItem {
  text: string;
  num: string;
}
export const cardData: cardItem[] = [
  { text: "Current Balance", num: "4,836,00" },
  { text: "Income", num: "3,814,25" },
  { text: "Expenses", num: "1,700,50" },
];

export interface potItem {
  text: string;
  num: number;
  color: string;
  fullamount: number;
}
export const potData: potItem[] = [
  { text: "Savings", num: 1000, color: "#277C78", fullamount: 1500 },
  { text: "Consert Ticket", num: 100, color: "#626070", fullamount: 150 },
  { text: "Gift", num: 50, color: "#82C9D7", fullamount: 150 },
  { text: "New Laptop", num: 10, color: " #F2CDAC", fullamount: 150 },
  { text: "Holiday", num: 100, color: "#826CB0", fullamount: 150 },
];

export interface budgetItem {
  text: string;
  num: number;
  color: string;
  [key: string]: string | number;
  fullamount: number;
}
export const budgetData: budgetItem[] = [
  { text: "Entertainment", num: 59, color: "#10B981", fullamount: 150 },
  { text: "Bills", num: 110, color: "#64748B", fullamount: 550 },
  { text: "Dining Out", num: 40, color: "#14B8A6", fullamount: 1150 },
  { text: "Personal Care", num: 10, color: "#FACC15", fullamount: 750 },
];
export interface billsNametItem {
  value: number;
  color: string;
  paid: boolean;
  img: string;
  date: string;
  text: string;
}

export interface billstItem {
  text: string;
  value: number;
  color: string;
  num: number;
}

export const billsNameData: billsNametItem[] = [
  {
    text: "Spark Electric Solutions",
    img: "/images/avatars/aqua-flow-utilities.jpg",
    value: 190,
    color: "#10B981",
    paid: true,
    date: "Monthly - 5th",
  },
  {
    text: "Pixel Playground",
    img: "/images/avatars/buzz-marketing-group.jpg",
    value: 194,
    color: "#FACC15",
    paid: true,
    date: "Monthly - 1st",
  },
  {
    text: "Nimbus Data Storage",
    img: "/images/avatars/bytewise.jpg",
    value: 75,
    color: "#14B8A6",
    paid: false,
    date: "Monthly - 29th",
  },
  {
    text: "ByteWise",
    img: "/images/avatars/ecofuel-energy.jpg",
    value: 10,
    color: "#FACC15",
    paid: false,
    date: "Monthly - 18th",
  },
  {
    text: "Pixel Playground",
    img: "/images/avatars/daniel-carter.jpg",
    value: 10,
    color: "#FACC15",
    paid: false,
    date: "Monthly - 31st",
  },
];

//  دالة لاستخراج رقم اليوم من النص
function extractDay(dateStr: string): number {
  const match = dateStr.match(/(\d+)/); // تلتقط الرقم فقط
  return match ? parseInt(match[0]) : 0;
}

//  دالة الحساب الأساسية
export const getBillsSummary = (bills: billsNametItem[]): billstItem[] => {
  const currentDay = new Date().getDate();

  const paidBills = bills.filter((b) => b.paid);
  const paidTotal = paidBills.reduce((sum, b) => sum + b.value, 0);

  const dueSoonBills = bills.filter((b) => {
    const day = extractDay(b.date);
    const diff = day - currentDay;
    return !b.paid && diff >= 0 && diff <= 2;
  });
  const dueSoonTotal = dueSoonBills.reduce((sum, b) => sum + b.value, 0);

  const upcomingBills = bills.filter((b) => {
    const day = extractDay(b.date);
    const diff = day - currentDay;
    return !b.paid && diff > 2;
  });
  const upcomingTotal = upcomingBills.reduce((sum, b) => sum + b.value, 0);

  return [
    {
      text: "Paid Bills",
      value: paidTotal,
      color: "#10B981",
      num: paidBills.length,
    },
    {
      text: "Total Upcoming",
      value: upcomingTotal,
      color: "#FACC15",
      num: upcomingBills.length,
    },
    {
      text: "Due Soon",
      value: dueSoonTotal,
      color: "#14B8A6",
      num: dueSoonBills.length,
    },
  ];
};

export const billsData = getBillsSummary(billsNameData);

export interface transactionItem {
  img: StaticImageData | string;
  name: string;
  amount: number;
  date: string;
  state: string;
  category: string;
}
export const transactionData: transactionItem[] = [
  {
    img: "/images/avatars/elevate-education.jpg",
    name: "elevate education",
    amount: 6,
    date: "11 Aug 2024",
    state: "earning",
    category: "Entertainment",
  },
  {
    img: "/images/avatars/ella-phillips.jpg",
    name: "ella phillips",
    amount: 876,
    date: "1 Sep 2024",
    state: "spending",
    category: "Entertainment",
  },
  {
    img: "/images/avatars/emma-richardson.jpg",
    name: "emma richardson",
    amount: 876,
    date: "10 Aug 2027",
    state: "earning",
    category: "Entertainment",
  },
  {
    img: "/images/avatars/ethan-clark.jpg",
    name: "ethan clark",
    amount: 8706,
    date: "10 Aug 2024",
    state: "spending",
    category: "General",
  },
  {
    img: "/images/avatars/flavor-fiesta.jpg",
    name: "flavor fiesta",
    amount: 876,
    date: "10 Aug 2028",
    state: "spending",
    category: "General",
  },
  {
    img: "/images/avatars/green-plate-eatery.jpg",
    name: "green plate",
    amount: 6,
    date: "10 Aug 2024",
    state: "earning",
    category: "Dining Out",
  },
  {
    img: "/images/avatars/harper-edwards.jpg",
    name: "harper edwards",
    amount: 876,
    date: "10 Aug 2025",
    state: "spending",
    category: "Dining Out",
  },
  {
    img: "/images/avatars/james-thompson.jpg",
    name: "james thompson",
    amount: 876,
    date: "10 Aug 2023",
    state: "earning",
    category: "Dining Out",
  },
  {
    img: "/images/avatars/rina-sato.jpg",
    name: "rina sato",
    amount: 8706,
    date: "10 Aug 2022",
    state: "spending",
    category: "Bills",
  },
  {
    img: "/images/avatars/pixel-playground.jpg",
    name: "pixel playground",
    amount: 876,
    date: "10 Aug 2021",
    state: "spending",
    category: "Bills",
  },
  {
    img: "/images/avatars/liam-hughes.jpg",
    name: "liam hughe",
    amount: 6,
    date: "10 Aug 2004",
    state: "earning",
    category: "Bills",
  },
  {
    img: "/images/avatars/yuna-kim.jpg",
    name: "yuna kim",
    amount: 876,
    date: "10 Aug 2020",
    state: "spending",
    category: "Personal Care",
  },
  {
    img: "/images/avatars/william-harris.jpg",
    name: "william harris",
    amount: 876,
    date: "10 Aug 2011",
    state: "earning",
    category: "Personal Care",
  },
  {
    img: "/images/avatars/urban-services-hub.jpg",
    name: "urban services",
    amount: 8706,
    date: "10 Aug 2012",
    state: "spending",
    category: "Personal Care",
  },
  {
    img: "/images/avatars/technova-innovations.jpg",
    name: "technova innovations",
    amount: 876,
    date: "10 Aug 2024",
    state: "spending",
    category: "dining",
  },
];
