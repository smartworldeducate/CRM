"use client";
import { useSelector } from "react-redux";

export default function TabRenderer({ children }) {
  const { tabs, activeTab } = useSelector((state) => state.tabs);
  const currentTab = tabs.find((t) => t.path === activeTab);

  return <div key={currentTab?.refreshKey || 0}>{children}</div>;
}
