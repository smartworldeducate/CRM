"use client";

import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTab } from "../../redux/slices/tabsSlice";
import Image from "next/image";
import logo from "../../../public/logo.png";
import {
  Home,
  FileText,
  ClipboardList,
  CalendarCheck,
  BarChart2,
  GraduationCap,
  MessageSquare,
  Shield,
  Settings,
  Users2,
  Minus,
  Plus,
} from "lucide-react";

const icons = {
  Home,
  FileText,
  ClipboardList,
  CalendarCheck,
  BarChart2,
  GraduationCap,
  MessageSquare,
  Shield,
  Settings,
  Users2,
};

export default function Sidebar({ collapsed }) {
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState("CRM");

  // Sidebar modules (CRM has children)
  const modules = [
    { name: "Dashboard", path: "/", icon: "Home" },
    {
      name: "CRM",
      icon: "Users2",
      children: [
        { name: "Leads", path: "/crm/leads" },
        { name: "Registrations", path: "/crm/registrations" },
        { name: "Admissions", path: "/crm/campaign" },
        { name: "Campaign", path: "/crm/campaign" },
      ],
    },
    { name: "Billing", path: "/employee", icon: "FileText" },
    { name: "Process", path: "/students", icon: "ClipboardList" },
    { name: "Attendance", path: "/payments", icon: "CalendarCheck" },
    { name: "Analytics", path: "/engagement", icon: "BarChart2" },
    { name: "Academics", path: "/school", icon: "GraduationCap" },
    { name: "Communications", path: "/engagement", icon: "MessageSquare" },
    { name: "Security", path: "/payments", icon: "Shield" },
    { name: "Setup", path: "/engagement", icon: "Settings" },
  ];

  const handleModuleClick = (mod) => {
    if (mod.children) {
      setOpenMenu(openMenu === mod.name ? "" : mod.name);
    } else {
      dispatch(addTab({ name: mod.name, path: mod.path, icon: mod.icon }));
    }
  };

  return (
    <aside
      className={`h-full border-r border-gray-200 transition-all duration-300 bg-white ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Logo */}
      {/* <div className="flex p-3 items-center justify-center py-4">
        {!collapsed ? (
          <Image src={logo} alt="logo" className="h-8 w-auto" />
        ) : (
          <span className="font-bold text-lg">CRM</span>
        )}
      </div> */}
      <div className="flex p-3 py-4">
        {!collapsed ? (
          // <Image src={logo} alt="logo" className="h-8 w-auto" />
              <span className="font-bold !text-gray-500 text-lg">CRM</span>
        ) : (
          <span className="font-bold !text-gray-500 text-lg">CRM</span>
        )}
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-1 mt-2">
        {modules.map((mod) => {
          const Icon = icons[mod.icon];
          const isOpen = openMenu === mod.name;

          return (
            <div key={mod.name}>
              {/* Main Menu Item */}
              <Link
                href={mod.path || "#"}
                onClick={(e) => {
                  if (mod.children) {
                    e.preventDefault();
                    handleModuleClick(mod);
                  } else {
                    handleModuleClick(mod);
                  }
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md !text-gray-500 hover:!text-gray-700 !no-underline hover:!no-underline hover:bg-gray-200"
              >
                <div className="flex items-center gap-3">
                  {Icon && <Icon className="h-5 w-5 text-gray-500" />}
                  {!collapsed && <span>{mod.name}</span>}
                </div>
                {!collapsed && mod.children && (
                  <span>{isOpen ? <Minus size={16} /> : <Plus size={16} />}</span>
                )}
              </Link>

              {/* Submenu (for CRM) */}
              {!collapsed && isOpen && mod.children && (
                <div className="ml-9 mt-1 flex flex-col border-l border-gray-200">
                  {mod.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.path}
                      onClick={() =>
                        dispatch(
                          addTab({
                            name: child.name,
                            path: child.path,
                            parent: mod.name,
                          })
                        )
                      }
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md !text-gray-500 hover:!text-gray-700 !no-underline hover:!no-underline hover:bg-gray-200"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
