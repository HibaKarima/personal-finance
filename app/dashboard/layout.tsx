import SideNavbars from "../components/SideNavbars";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <SideNavbars />
      <main className="flex-1 bg-[#f8f4f0]">{children}</main>
    </div>
  );
}
