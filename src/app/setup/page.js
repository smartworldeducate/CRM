"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

const functionsData = [
  {
    id: 1,
    title: "EMPLOYEE HR",
    children: [
      {
        id: 2,
        title: "Performance Appraisal",
        children: [
          { id: 6, title: "Appraisal Entry" },
          { id: 104, title: "Employee Manual Appraisal" },
          { id: 129, title: "Function Line Manager" },
          { id: 9, title: "Salary Planning" },
          { id: 10, title: "Increments Approval" },
        ],
      },
      {
        id: 3,
        title: "Increments",
        children: [{ id: 59, title: "Update Payroll" }],
      },
      {
        id: 4,
        title: "Setup",
        children: [
          { id: 12, title: "Development Area List" },
          { id: 112, title: "Employee Trainings" },
        ],
      },
    ],
  },
];

function TreeItem({ item, level = 0 }) {
  // inline padding so we can vary per-level easily
  const pl = 18 * level + 6; // tune spacing per level
  return (
    <div>
      <div
        className="flex items-center justify-between py-3 transition-colors rounded-sm"
        style={{ paddingLeft: pl }}
      >
        <div className="flex items-center gap-3">
          {/* small circle ID */}
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-50 border text-xs font-medium text-gray-600">
            {item.id}
          </div>

          {/* title */}
          <div className="text-sm text-gray-800 font-medium">{item.title}</div>
        </div>

        {/* right aligned checkboxes (3 columns) */}
        <div className="flex items-center gap-12 pr-2">
          <input
            type="checkbox"
            className="w-4 h-4 accent-blue-600 border-gray-300"
            aria-label={`read-${item.id}`}
          />
          <input
            type="checkbox"
            className="w-4 h-4 accent-blue-600 border-gray-300"
            aria-label={`write-${item.id}`}
          />
          <input
            type="checkbox"
            className="w-4 h-4 accent-blue-600 border-gray-300"
            aria-label={`selectall-${item.id}`}
          />
        </div>
      </div>

      {/* children with vertical connector line */}
      {item.children && (
        <div className="ml-6 pl-4 border-l border-gray-200">
          {item.children.map((ch) => (
            <TreeItem key={ch.id} item={ch} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function AssignFunctionPage() {
  const [selectedUser, setSelectedUser] = useState("Muhammad Moeez Zeeshan");

//   const users = [
//     { name: "Tyler Hero", role: "Appraisal Entry", access: "All", color: "bg-pink-50 text-pink-600" },
//     { name: "Esther Howard", role: "Employee Manual Appraisal", access: "Read", color: "bg-purple-50 text-purple-600" },
//     { name: "Jacob Jones", role: "Development Area List", access: "Write", color: "bg-green-50 text-green-600" },
//   ];

  const employees = [
    { name: "Tyler Hero", functions: "26 Functions", color: "bg-yellow-50 text-yellow-600" },
    { name: "Zack Martin", functions: "26 Functions", color: "bg-blue-50 text-blue-600" },
    { name: "Jane Doe", functions: "26 Functions", color: "bg-red-50 text-red-600" },
    { name: "Leslie Alexander", functions: "203 tasks", color: "bg-green-50 text-green-600" },
  ];
    const [users, setUsers] = useState([
    { name: "John Doe", role: "Admin", access: "Full", color: "bg-blue-50" },
    { name: "Jane Smith", role: "Manager", access: "Limited", color: "bg-green-50" },
    { name: "Ali Khan", role: "Student", access: "Read", color: "bg-yellow-50" },
  ]);
  const roles = ["Admin", "Manager", "Student", "Viewer"];

  const handleRoleChange = (index, newRole) => {
    const updatedUsers = [...users];
    updatedUsers[index].role = newRole;
    setUsers(updatedUsers);
  };
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Top Tabs */}
      <div className="flex items-center gap-6 pb-3 mb-6">
        {["Users", "Modules", "Assign Function", "Assign Scope"].map((tab) => (
          <button
            key={tab}
            className={`pb-2 text-sm font-medium ${tab === "Assign Function" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
          >
            {tab}
          </button>
        ))}

        <div className="ml-auto">
          <span className="inline-block bg-green-100 text-green-600 px-3 py-2 rounded-md text-xs font-semibold">CRM</span>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT: User Functions (big card) */}
        <div className="col-span-8">
          <div className="rounded-xl border shadow-sm p-6">
            <h5 className="font-semibold text-gray-400 mb-4">User Functions</h5>

            {/* header row */}
            <div className="flex items-center justify-between text-sm text-gray-600 border-y-[1px] border-gray-200 py-3">
              <div className="pl-3">Description</div>

              <div className="flex items-center gap-1 px-2">
                <div className="w-12 text-center">Read</div>
                <div className="w-12 text-center">Write</div>
                <div className="w-15 text-center">Select All</div>
              </div>
            </div>

            {/* tree container with an absolute left guide line - optional for stronger visual */}
            <div className="mt-4">
              {functionsData.map((root) => (
                <div key={root.id} className="relative">
                  {/* If you want a full left guide line for the whole tree, uncomment the next line */}
                  {/* <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" /> */}

                  <TreeItem item={root} level={0} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <div className="col-span-4 space-y-6">
          {/* Search User card */}
          <div className="rounded-xl border shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-semibold text-gray-400 mb-4">Search User</h5>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex-1">
                <input
                  className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200"
                  value={selectedUser}
                  onChange={(e) => setSelectedUser(e.target.value)}
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-2 text-sm">Search</button>
            </div>

            <div className="space-y-3">
              {users.map((u, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white border rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className={`${u.color} w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm`}>{u.name.charAt(0)}</div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">{u.name}</div>
                      <div className="text-xs text-gray-400">{u.role}</div>
                    </div>
                  </div>
                  <div>
                    <select
                value={u.role}
                onChange={(e) => handleRoleChange(i, e.target.value)}
                className="text-xs bg-gray-50 border border-gray-300 rounded px-2 py-1 pr-8 !text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {roles.map((role, idx) => (
                  <option key={idx} value={role}>
                    {role}
                  </option>
                ))}
              </select>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Employees with same roles */}
          <div className="rounded-xl border shadow-sm p-5">
            <h5 className="font-semibold text-gray-400 mb-4">4 Employees have same Roles</h5>

            <div className="space-y-3">
              {employees.map((emp, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white border rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className={`${emp.color} w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm`}>{emp.name.charAt(0)}</div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">{emp.name}</div>
                      <div className="text-xs text-gray-400">{emp.functions}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="text-gray-400 hover:text-red-500">
                      <X size={16} />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14M5 12h14" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
