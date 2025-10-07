"use client";

import { Users, Leaf, FileText, Shapes } from "lucide-react";

export default function StatusBadges() {
  const statuses = [
    {
      label: "NEW",
      color: "bg-purple-100 text-purple-700",
      icon: <Shapes size={30} className="text-purple-600" />,
    },
    {
      label: "UNQUALIFIED",
      color: "bg-orange-100 text-orange-700",
      icon: <Users size={30} className="text-orange-500" />,
    },
    {
      label: "NURTURING",
      color: "bg-green-100 text-green-700",
      icon: <Leaf size={30} className="text-green-600" />,
    },
    {
      label: "CONVERTED",
      color: "bg-pink-100 text-pink-700",
      icon: <FileText size={30} className="text-pink-500" />,
    },
  ];

  return (
    <div className="flex gap-4">
      {statuses.map((status) => (
        <div
          key={status.label}
          className={`flex items-center justify-between w-50 h-18 px-4 py-2 rounded-xl ${status.color}`}
        >
          <span className="font-semibold tracking-wide text-lg">
            {status.label}
          </span>
          {status.icon}
        </div>
      ))}
    </div>
  );
}
