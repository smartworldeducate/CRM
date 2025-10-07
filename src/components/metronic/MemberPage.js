// app/members/page.js
"use client";

import { useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function MembersPage() {
  const [members] = useState([
    {
      id: 1,
      name: "Ana Simmons",
      skills: "HTML, JS, ReactJS",
      company: "Intertico",
      companyRole: "Web, UI/UX Design",
      progress: 50,
      color: "bg-blue-500",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Jessie Clarcson",
      skills: "C#, ASP.NET, MS SQL",
      company: "Agoda",
      companyRole: "Houses & Hotels",
      progress: 70,
      color: "bg-pink-500",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Lebron Wayde",
      skills: "PHP, Laravel, VueJS",
      company: "RoadGee",
      companyRole: "Transportation",
      progress: 60,
      color: "bg-green-500",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 4,
      name: "Natali Goodwin",
      skills: "Python, PostgreSQL, ReactJS",
      company: "The Hill",
      companyRole: "Insurance",
      progress: 50,
      color: "bg-yellow-500",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 5,
      name: "Kevin Leonard",
      skills: "HTML, JS, ReactJS",
      company: "RoadGee",
      companyRole: "Art Director",
      progress: 90,
      color: "bg-purple-500",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
  ]);

    return (
    <div className="p-6 bg-white rounded-xl shadow-sm border">
      {/* Count */}
      <h2 className="text-4xl font-bold text-gray-900">357</h2>
      <p className="text-gray-500">Professionals</p>

      {/* Heroes */}
      <div className="mt-6">
        <p className="text-gray-700 font-semibold">Today's Heroes</p>
        <div className="flex items-center mt-3 space-x-[-10px]">
          {/* Avatars */}
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-white font-bold border-2 border-white">A</span>
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="Hero"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold border-2 border-white">S</span>
          <img
            src="https://i.pravatar.cc/40?img=32"
            alt="Hero"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-500 text-white font-bold border-2 border-white">P</span>
          <img
            src="https://i.pravatar.cc/40?img=52"
            alt="Hero"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white text-sm border-2 border-white">
            +42
          </span>
        </div>
      </div>
    </div>
  );

}
