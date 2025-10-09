"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeTab, setActiveTab, refreshTab } from "../../redux/slices/tabsSlice";
import Link from "next/link";
import { X, Home, RefreshCw } from "lucide-react";

export default function Tabs() {
  const { tabs, activeTab } = useSelector((state) => state.tabs);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between border-gray-300 bg-gradient-to-r from-[#E6FBFE] to-[#EDDDFB] p-2">
      {/* Left side icons and tabs */}
      <div className="flex items-center space-x-2">
        <Home className="h-6 w-6 text-green-300 hover:text-red-500 cursor-pointer" />
        {tabs.map((tab) => (
          <div
            key={tab.path}
            className={`flex items-center px-3 py-1 rounded-md cursor-pointer ${
              activeTab === tab.path
                ? "bg-white border border-b-0 !text-gray-900"
                : "bg-gray-100 !text-gray-600 shadow-lg"
            }`}
          >
            <Link
              href={tab.path}
              onClick={() => dispatch(setActiveTab(tab.path))}
              className="mr-2 !text-gray-700 hover:!text-gray-900 !no-underline hover:!no-underline"
            >
              {tab.name}
            </Link>
            {tab.path !== "/" && (
              <button
                onClick={() => dispatch(removeTab(tab.path))}
                className="text-sm text-red-500 hover:text-red-700"
              >
                <X className="h-3 w-3 text-gray-500 hover:text-red-500" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* ✅ Right side refresh icon */}
      <div
        className="border-l border-blue-500 pl-3 cursor-pointer flex items-center gap-1"
        onClick={() => dispatch(refreshTab(activeTab))}
      >
        <RefreshCw className="h-5 w-5 text-blue-500" />
      </div>
    </div>
  );
}
