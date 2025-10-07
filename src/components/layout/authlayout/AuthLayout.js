// AuthLayout.js
"use client";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import Tabs from "@/components/layout/Tabs";
import Topbar from "@/components/layout/Topbar";
import { useState } from "react";
export default function AuthLayout({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const pathname = usePathname();
 const [collapsed, setCollapsed] = useState(false);
  // If not logged in, always redirect to /login
  if (!isAuthenticated && pathname !== "/login") {
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
    return null;
  }

  // ✅ On login page → show children only, no sidebar, no flex
  if (pathname === "/login") {
    return (
      <div className="h-screen w-screen">
        {children}
      </div>
    );
  }

  // ✅ Authenticated → show dashboard with sidebar + tabs
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar collapsed={collapsed}/>
      <div className="flex-1 flex flex-col h-full">
         <Topbar onToggleSidebar={() => setCollapsed(!collapsed)} />
        <Tabs />
        <main className="flex-1 overflow-y-auto p-6 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}
