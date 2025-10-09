"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Star,
  Eye,
  EyeOff,
  ReceiptText,
  GitBranchPlus,
  ChevronsUpDown,
  X,
  SlidersHorizontal,
  Search,
  Plus,
} from "lucide-react";
import SettingsModal from "@/components/modal/SettingsModal";

/**
 * Dashboard page — interactive & modal add (in-memory)
 * Drop this in app/dashboard/page.jsx
 */

const TABS = [
  "Inquiry",
  "Contacted",
  "Engagement",
  "Qualified",
  "Application",
  "Assessment",
  "Matured",
];

const initialScheduled = [
  {
    uid: 1,
    id: 25147,
    channel: "Web",
    leftColor: "#3B82F6",
    name: "James Walker",
    date: "15 Aug, 2024",
    child: { name: "Sophia Collins", grade: "Grade 2 - Indigo", code: "283831" },
    followup: { name: "Henry Mitchell", date: "17 Aug, 2024 09:30 AM" },
    starred: false,
    hidden: false,
  },
  {
    uid: 2,
    id: 91453,
    channel: "Telephone",
    leftColor: "#d144e4ff",
    name: "Emily Carter",
    date: "13 Aug, 2024",
    child: { name: "Daniel Brooks", grade: "Pre-Nursery - Red", code: "514793" },
    followup: { name: "Grace Morgan", date: "18 Aug, 2024 10:45 AM" },
    starred: true,
    hidden: false,
  },
  {
    uid: 3,
    id: 25148,
    channel: "Walk-in",
    leftColor: "#f6da3bff",
    name: "William Hughes",
    date: "15 Aug, 2024",
    child: { name: "Charlotte Reed", grade: "Grade 2 - Indigo", code: "283831" },
    followup: { name: "Chloe Stevens", date: "17 Aug, 2024 09:30 AM" },
    starred: false,
    hidden: false,
  },
];

const initialAllVisitors = [
  {
    uid: 101,
    id: 35111,
    channel: "Call Center",
    leftColor: "#e443aeff",
    name: "Olivia Bennett",
    date: "13 Aug, 2024",
    child: { name: "Benjamin Harris", grade: "Grade 2 - Indigo", code: "283831" },
    followup: { name: "Grace Morgan", date: "18 Aug, 2024 10:45 AM" },
    starred: false,
    hidden: false,
  },
  {
    uid: 102,
    id: 35112,
    channel: "Walk-in",
    leftColor: "#e069fdff",
    name: "Michael Turner",
    date: "15 Aug, 2024",
    child: { name: "Amelia Foster", grade: "Pre-Nursery - Red", code: "514793" },
    followup: { name: "Chloe Stevens", date: "17 Aug, 2024 09:30 AM" },
    starred: false,
    hidden: false,
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [scheduled, setScheduled] = useState(initialScheduled);
  const [allVisitors, setAllVisitors] = useState(initialAllVisitors);
  
const [openModal, setOpenModal] = useState(false);
  const [filters, setFilters] = useState([
    "Branch: 206 - LMA 51-FCC Arizona",
    "Created by: Saadia",
    "Time Period: 15min",
    "Campaign: Social Media",
  ]);

  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const [isModalOpen, setModalOpen] = useState(false);

  // modal form state
  const [form, setForm] = useState({
    id: "",
    channel: "Web",
    name: "",
    date: "",
    childName: "",
    childGrade: "",
    followupName: "",
    followupDate: "",
  });

  // helper: remove filter
  const removeFilter = (f) => setFilters((prev) => prev.filter((x) => x !== f));

  // toggle star and hidden on a row (search both arrays)
  const toggleRowFlag = (uid, flag, table = "both") => {
    const update = (arr, setter) =>
      setter(
        arr.map((r) => (r.uid === uid ? { ...r, [flag]: !r[flag] } : r))
      );

    if (table === "scheduled" || table === "both") update(scheduled, setScheduled);
    if (table === "all" || table === "both") update(allVisitors, setAllVisitors);
  };

  // sorting handler
  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder((o) => (o === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  // generic sort function for rows array
  const sortRows = (rows) => {
    if (!sortField) return rows;
    const sorted = [...rows].sort((a, b) => {
      const getVal = (r) => {
        if (sortField === "leadId") return r.id;
        if (sortField === "prospect") return r.name?.toLowerCase() ?? "";
        if (sortField === "childName") return r.child?.name?.toLowerCase() ?? "";
        if (sortField === "followUp") return r.followup?.name?.toLowerCase() ?? "";
        return "";
      };
      const va = getVal(a);
      const vb = getVal(b);
      if (va < vb) return sortOrder === "asc" ? -1 : 1;
      if (va > vb) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  };

  // filter rows based on search text
  const filterRows = (rows) => {
    if (!search.trim()) return rows;
    const q = search.toLowerCase();
    return rows.filter(
      (r) =>
        (r.name && r.name.toLowerCase().includes(q)) ||
        (r.child?.name && r.child.name.toLowerCase().includes(q)) ||
        (r.followup?.name && r.followup.name.toLowerCase().includes(q))
    );
  };

  // compose displayed data (sorted + filtered)
  const displayedScheduled = useMemo(
    () => sortRows(filterRows(scheduled)),
    [scheduled, search, sortField, sortOrder]
  );
  const displayedAll = useMemo(
    () => sortRows(filterRows(allVisitors)),
    [allVisitors, search, sortField, sortOrder]
  );

  // Add new entry (in-memory) — push to allVisitors (you can change)
  const handleAddNew = (e) => {
    e.preventDefault();
    // Basic validation
    if (!form.name || !form.childName) return alert("Please fill Name and Child Name");

    const uid = Date.now();
    const newRow = {
      uid,
      id: form.id || Math.floor(Math.random() * 90000) + 10000,
      channel: form.channel || "Web",
      leftColor: "#9CA3AF",
      name: form.name,
      date: form.date || new Date().toLocaleDateString(),
      child: { name: form.childName, grade: form.childGrade || "N/A", code: String(Math.floor(Math.random() * 900000) + 100000) },
      followup: { name: form.followupName || "TBD", date: form.followupDate || "" },
      starred: false,
      hidden: false,
    };
    setAllVisitors((p) => [newRow, ...p]);
    // reset + close
    setForm({
      id: "",
      channel: "Web",
      name: "",
      date: "",
      childName: "",
      childGrade: "",
      followupName: "",
      followupDate: "",
    });
    setModalOpen(false);
  };

  // small row component
  const Row = ({ r, table }) => {
    if (r.hidden) {
      // Show minimal row when hidden (user toggled eye off)
      return (
        <tr className="opacity-60">
          <td className="px-4 py-3 border text-center">
            <div style={{ boxShadow: `inset 4px 0 0 0 ${r.leftColor}` }} className="inline-block w-full h-full" />
          </td>
          <td className="px-4 py-3 border">{r.id}</td>
          <td className="px-4 py-3 border text-gray-500 italic">Hidden</td>
          <td className="px-4 py-3 border" />
          <td className="px-4 py-3 border" />
          <td className="px-4 py-3 border text-center">
            <div className="flex justify-center gap-3">
              <button onClick={() => toggleRowFlag(r.uid, "hidden", table)} title="Show"><Eye className="w-4 h-4 text-gray-500" /></button>
            </div>
          </td>
        </tr>
      );
    }

    return (
      <tr className="hover:bg-gray-50 transition">
        <td className="px-4 py-3 border" style={{ boxShadow: `inset 4px 0 0 0 ${r.leftColor}` }}>
          <div className="flex items-center justify-center gap-2">
            <button onClick={() => toggleRowFlag(r.uid, "starred", table)} title="Star">
              <Star className={`w-4 h-4 ${r.starred ? "text-yellow-400" : "text-gray-300"}`} />
            </button>
            <button onClick={() => toggleRowFlag(r.uid, "hidden", table)} title={r.hidden ? "Show" : "Hide"}>
              {r.hidden ? <Eye className="w-4 h-4 text-gray-500" /> : <EyeOff className="w-4 h-4 text-gray-300" />}
            </button>
          </div>
        </td>

        <td className="px-4 py-3 border">
          <div className="flex items-center gap-2">
            <span className="font-medium">{r.id}</span>
            <span className="px-2 py-0.5 text-xs rounded border text-green-600 bg-green-50">{r.channel}</span>
          </div>
        </td>

        <td className="px-4 py-3 border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-semibold text-orange-600">{(r.name||"A").charAt(0)}</div>
            <div>
              <div className="font-medium text-gray-700">{r.name}</div>
              <div className="text-xs text-gray-500">{r.date}</div>
            </div>
             <span className="px-2 py-0.5 text-xs rounded border border-orange-200 text-orange-600 bg-orange-50">{r.channel}</span>
          </div>
        </td>

        <td className="px-4 py-3 border">
          <div>
            <div className="font-medium text-gray-700">{r.child?.name}</div>
            <div className="text-xs text-gray-500">{r.child?.grade} <span className="ml-2 text-purple-600 text-xs px-2 border border-purple-200 rounded-2 p-1 bg-purple-100">{r.child?.code}</span></div>
            
          </div>
          
        </td>

        <td className="px-4 py-3 border">
          <div>
            <div className="text-blue-600 font-medium">{r.followup?.name}</div>
            <div className="text-xs text-gray-500">{r.followup?.date}</div>
          </div>
        </td>

        <td className="px-4 py-3 border text-center">
          <div className="flex justify-center gap-3">
            <button title="View"><Eye className="w-4 h-4 text-gray-400" /></button>
            <button title="Receipt"><ReceiptText className="w-4 h-4 text-blue-500" /></button>
            <button title="Branch"><GitBranchPlus className="w-4 h-4 text-purple-500" /></button>
          </div>
        </td>
      </tr>
    );
  };

  // small UI helper for sort icon
  const renderSortIcon = (field) => (
    <ChevronsUpDown className={`w-4 h-4 inline ml-1 ${sortField === field ? "text-blue-600" : "text-gray-400"}`} />
  );

  return (
    <div className="p-6 min-h-screen bg-slate-50">
      {/* Top nav */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-6">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`pb-2 text-sm ${activeTab === t ? "text-blue-600 border-b-2 border-blue-500 font-medium" : "text-gray-500 hover:text-gray-700"}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div>
          <button onClick={() => setOpenModal(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add New
          </button>
        </div>
      </div>

      {/* Filters bar */}
      <div className="bg-white rounded-2xl p-4 mb-5 border">
        <div className="flex flex-wrap gap-3 items-center">
          {filters.map((f) => (
            <div key={f} className="flex items-center gap-2 px-3 py-1 border rounded-lg text-sm text-gray-700">
              <span>{f}</span>
              <button onClick={() => removeFilter(f)}><X className="w-4 h-4 text-gray-400" /></button>
            </div>
          ))}

          <div className="ml-auto flex items-center gap-3">
            <button className="flex items-center gap-2 text-sm px-3 py-1 border rounded bg-blue-50 text-blue-600"><SlidersHorizontal className="w-4 h-4"/> Filters</button>

            <div className="relative">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-3 py-1 border rounded text-sm"
                placeholder="Type name, team name..."
              />
              <Search className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

 <div className="rounded-lg border border-gray-200 overflow-hidden">
                    <div className="flex bg-gray-50 border-b border-gray-300 text-gray-700 font-semibold text-sm">
                        <div className="w-1/10 px-4 py-3 border-l border-gray-300 text-center"></div>

                        <div
                            className="w-1/5 px-4 py-3 border-gray-300 cursor-pointer text-gray-500 font-medium"
                            onClick={() => handleSort("leadId")}
                        >
                            Lead ID {renderSortIcon("leadId")}
                        </div>

                        <div
                            className="w-1/4 py-3 border-gray-300 cursor-pointer text-gray-500 font-medium"
                            onClick={() => handleSort("prospect")}
                        >
                            Prospect {renderSortIcon("prospect")}
                        </div>

                        <div
                            className="w-1/5 px-4 py-3 border-gray-300 cursor-pointer text-gray-500 font-medium"
                            onClick={() => handleSort("childName")}
                        >
                            Child Name {renderSortIcon("childName")}
                        </div>

                        <div
                            className="w-1/6 px-5 py-3 border-gray-300 cursor-pointer text-gray-500 font-medium"
                            onClick={() => handleSort("followUp")}
                        >
                            Follow Up {renderSortIcon("followUp")}
                        </div>

                        <div
                            className="w-1/6 px-4 py-3 border-gray-300 text-center cursor-pointer text-gray-500 font-medium"
                            onClick={() => handleSort("contact")}
                        >
                            Contact {renderSortIcon("contact")}
                        </div>
                    </div>
                </div>


      {/* Scheduled Follow-ups */}
      <div className="">
        <div className="text-sm text-gray-500 py-4">Scheduled Follow-ups for today</div>
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
          <table className="w-full text-left text-sm">
            <tbody>
              {displayedScheduled.length ? (
                displayedScheduled.map((r) => <Row key={r.uid} r={r} table="scheduled" />)
              ) : (
                <tr><td className="p-4 text-center text-gray-500" colSpan={6}>No rows</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* All Visitors */}
      <div>
        <div className="text-sm text-gray-500 py-4">All Visitor</div>
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
          <table className="w-full text-left text-sm">
            <tbody>
              {displayedAll.length ? (
                displayedAll.map((r) => <Row key={r.uid} r={r} table="all" />)
              ) : (
                <tr><td className="p-4 text-center text-gray-500" colSpan={6}>No rows</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal (Add New) */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setModalOpen(false)} />
          <div className="relative bg-white rounded-lg max-w-lg w-full p-6 shadow-lg z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Add New Lead</h3>
              <button onClick={() => setModalOpen(false)}><X className="w-5 h-5 text-gray-500" /></button>
            </div>

            <form onSubmit={handleAddNew} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input value={form.id} onChange={(e)=>setForm(f=>({...f,id:e.target.value}))} placeholder="Lead ID (optional)" className="px-3 py-2 border rounded" />
                <select value={form.channel} onChange={(e)=>setForm(f=>({...f,channel:e.target.value}))} className="px-3 py-2 border rounded">
                  <option>Web</option>
                  <option>Telephone</option>
                  <option>Call Center</option>
                  <option>Walk-in</option>
                </select>
              </div>

              <input value={form.name} onChange={(e)=>setForm(f=>({...f,name:e.target.value}))} placeholder="Prospect Name" className="w-full px-3 py-2 border rounded" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input value={form.childName} onChange={(e)=>setForm(f=>({...f,childName:e.target.value}))} placeholder="Child Name" className="px-3 py-2 border rounded" />
                <input value={form.childGrade} onChange={(e)=>setForm(f=>({...f,childGrade:e.target.value}))} placeholder="Child Grade" className="px-3 py-2 border rounded" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input value={form.followupName} onChange={(e)=>setForm(f=>({...f,followupName:e.target.value}))} placeholder="Follow-up Name" className="px-3 py-2 border rounded" />
                <input value={form.followupDate} onChange={(e)=>setForm(f=>({...f,followupDate:e.target.value}))} placeholder="Follow-up Date/time" className="px-3 py-2 border rounded" />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
              </div>
            </form>
          </div>
        </div>
      )} */}
      {openModal && (
        <SettingsModal onClose={() => setOpenModal(false)} />
      )}
    </div>
  );
}
