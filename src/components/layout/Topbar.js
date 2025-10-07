"use client";
import { User, Menu, ArrowLeftFromLine, ChevronRight, Search, MessageSquare } from "lucide-react";
import { useSelector } from "react-redux";

export default function Topbar({ onToggleSidebar }) {
  const { tabs, activeTab } = useSelector((state) => state.tabs);
  const active = tabs.find((t) => t.path === activeTab);

  return (
    <header className="h-14 flex items-center justify-between px-2 sticky top-0 z-50">
      {/* Left: Sidebar toggle + breadcrumb */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-1 rounded hover:bg-gray-100"
        >
          <ArrowLeftFromLine className="h-5 w-5 text-gray-500" />
        </button>
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <span>Dashboard</span>
          {active && active.path !== "/" && (
            <>
              <ChevronRight className="h-4 w-4 text-gray-600" />
              <span>{active.name}</span>
            </>
          )}
        </div>
      </div>

      {/* Right: Search, Message, Profile */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <button className="p-2 rounded hover:bg-gray-100">
          <Search className="h-5 w-5 text-gray-600" />
        </button>

        {/* Message */}
        <button className="p-2 rounded hover:bg-gray-100">
          <MessageSquare className="h-5 w-5 text-gray-600" />
        </button>

        {/* Greeting + Avatar */}
        {/* <span className="text-sm text-gray-600">Hello, Admin</span> */}
        <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
          <img
            src="https://i.pravatar.cc/40?img=32"
            alt="Hero"
            className="rounded-full border-2 border-white"
          />
        </div>
      </div>
    </header>
  );
}
