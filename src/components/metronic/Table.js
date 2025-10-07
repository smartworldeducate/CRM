"use client";
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
const teams = [
  {
    id: 1,
    name: "Product Management",
    description: "Product development & lifecycle",
    rating: 5,
    lastModified: "21 Oct, 2024",
    members: [
      "https://i.pravatar.cc/40?img=1",
      "https://i.pravatar.cc/40?img=2",
      "https://i.pravatar.cc/40?img=3",
    ],
    extraMembers: "+10",
  },
  {
    id: 2,
    name: "Marketing Team",
    description: "Campaigns & market analysis",
    rating: 4,
    lastModified: "15 Oct, 2024",
    members: [
      "https://i.pravatar.cc/40?img=4",
      "https://i.pravatar.cc/40?img=5",
    ],
    extraMembers: "G",
  },
  {
    id: 3,
    name: "HR Department",
    description: "Talent acquisition, employee welfare",
    rating: 5,
    lastModified: "10 Oct, 2024",
    members: [
      "https://i.pravatar.cc/40?img=6",
      "https://i.pravatar.cc/40?img=7",
      "https://i.pravatar.cc/40?img=8",
    ],
    extraMembers: "+A",
  },
  {
    id: 4,
    name: "Sales Division",
    description: "Customer relations, sales strategy",
    rating: 5,
    lastModified: "05 Oct, 2024",
    members: [
      "https://i.pravatar.cc/40?img=9",
      "https://i.pravatar.cc/40?img=10",
    ],
  },
  {
    id: 5,
    name: "Development Team",
    description: "Software development",
    rating: 4,
    lastModified: "01 Oct, 2024",
    members: [
      "https://i.pravatar.cc/40?img=11",
      "https://i.pravatar.cc/40?img=12",
      "https://i.pravatar.cc/40?img=13",
    ],
    extraMembers: "+5",
  },
];

export default function MetronicTable() {
    
 const [page, setPage] = useState(1);

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Teams</h2>
          <input
            type="text"
            placeholder="Search Teams"
            className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Table */}
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b text-left bg-gray-50">
              <th className="p-3">
                <input
                    type="checkbox"
                    className="form-check-input"
                  />
              </th>
              <th className="p-3">Team</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Last Modified</th>
              <th className="p-3">Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
               <input
                    type="checkbox"
                    className="form-check-input"
                  />
                </td>
                <td className="p-3">
                  <div className="font-medium">{team.name}</div>
                  <div className="text-gray-500 text-xs">{team.description}</div>
                </td>
                <td className="p-3 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < team.rating ? (
                      <FaStar key={i} className="text-yellow-400" />
                    ) : (
                      <FaRegStar key={i} className="text-gray-300" />
                    )
                  )}
                </td>
                <td className="p-3 text-gray-600">{team.lastModified}</td>
                <td className="p-3">
                  <div className="flex items-center -space-x-2">
                    {team.members.map((avatar, idx) => (
                      <img
                        key={idx}
                        src={avatar}
                        alt="member"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                    {team.extraMembers && (
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white text-xs border-2 border-white">
                        {team.extraMembers}
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <div>
            Show{" "}
            <select className="border rounded px-2 py-1">
              <option>5</option>
              <option>10</option>
              <option>15</option>
            </select>{" "}
            per page
          </div>
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 border rounded">&lt;</button>
            <span>{page}</span>
            <button className="px-2 py-1 border rounded">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
