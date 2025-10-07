"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeTab, setActiveTab } from "../../redux/slices/tabsSlice";
import Link from "next/link";
import { X, Home, Users, DollarSign, BookOpen, Building2, BarChart2 } from "lucide-react";
export default function Tabs() {
  const { tabs, activeTab } = useSelector((state) => state.tabs);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center space-x-2 border-gray-300 bg-gradient-to-r from-[#E6FBFE] to-[#EDDDFB] p-2">
      <Home className="h-6 w-6 text-green-300 hover:text-red-500" />
      {tabs.map((tab) => (
        <div
          key={tab.path}
          className={`flex items-center px-3 py-1 rounded-md cursor-pointer ${
            activeTab === tab.path
              ? "bg-white border border-b-0 !text-gray-900"
              : "bg-gray-200 !text-gray-600"
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
  );
}
