"use client";
import { useState } from "react";
import { FaStar, FaRegStar, FaEye, FaCopy, FaShareAlt, FaTimes } from "react-icons/fa";
import {
  Star,
  StarOff,
  Eye,
  EyeOff,
  ReceiptText,
  Share2,
  GitBranchPlus,
  ChevronsUpDown,
  X,
} from "lucide-react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

export default function Dashboard() {
    const tabs = ["Inquiry", "Contacted", "Engagement", "Qualified", "Application", "Assessment", "Matured"];
    const [activeTab, setActiveTab] = useState("Inquiry");
    const [search, setSearch] = useState("");
    const [sortField, setSortField] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSort = (field) => {
        if (sortField === field) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortOrder("asc");
        }
    };

    const renderSortIcon = (field) => {
        if (sortField !== field) return <ChevronsUpDown className="w-4 h-4 inline ml-1 text-gray-400" />;
        return sortOrder === "asc" ? (
            <ChevronsUpDown className="w-4 h-4 inline ml-1 text-blue-500" />
        ) : (
            <ChevronsUpDown className="w-4 h-4 inline ml-1 text-blue-500" />
        );
    };

    // ✅ Filters state (removable)
    const [filters, setFilters] = useState([
        "Branch: 206 - LMA 51-FCC Arizona",
        "Created by: Saadia",
        "Time Period: 15min",
        "Campaign: Social Media",
        "filter"
    ]);

    const removeFilter = (filter) => {
        setFilters(filters.filter((f) => f !== filter));
    };

    // Dummy data
    const scheduledFollowUps = [
        {
            id: 25147,
            channel: "Web",
            color: "bg-green-50",
            name: "James Walker",
            date: "15 Aug, 2024",
            child: { name: "Sophia Collins", grade: "Grade 2 - Indigo", code: "283831" },
            followup: { name: "Henry Mitchell", date: "17 Aug, 2024 09:30 AM" },
        },
        {
            id: 91453,
            channel: "Telephone",
            color: "bg-green-50",
            name: "Emily Carter",
            date: "13 Aug, 2024",
            child: { name: "Daniel Brooks", grade: "Pre-Nursery - Red", code: "514793" },
            followup: { name: "Grace Morgan", date: "18 Aug, 2024 10:45 AM" },
        },
        {
            id: 25147,
            channel: "Web",
            color: "bg-green-50",
            name: "James Walker",
            date: "15 Aug, 2024",
            child: { name: "Sophia Collins", grade: "Grade 2 - Indigo", code: "283831" },
            followup: { name: "Henry Mitchell", date: "17 Aug, 2024 09:30 AM" },
        },
        {
            id: 91453,
            channel: "Telephone",
            color: "bg-green-50",
            name: "Emily Carter",
            date: "13 Aug, 2024",
            child: { name: "Daniel Brooks", grade: "Pre-Nursery - Red", code: "514793" },
            followup: { name: "Grace Morgan", date: "18 Aug, 2024 10:45 AM" },
        },
    ];

    const allVisitors = [
        {
            id: 25147,
            channel: "Call Center",
            color: "bg-green-50",
            name: "Olivia Bennett",
            date: "13 Aug, 2024",
            child: { name: "Benjamin Harris", grade: "Grade 2 - Indigo", code: "283831" },
            followup: { name: "Grace Morgan", date: "18 Aug, 2024 10:45 AM" },
        },
        {
            id: 25147,
            channel: "Walk-in",
            color: "bg-green-50",
            name: "Michael Turner",
            date: "15 Aug, 2024",
            child: { name: "Amelia Foster", grade: "Pre-Nursery - Red", code: "514793" },
            followup: { name: "Chloe Stevens", date: "17 Aug, 2024 09:30 AM" },
        },
        {
            id: 25147,
            channel: "Call Center",
            color: "bg-green-50",
            name: "Olivia Bennett",
            date: "13 Aug, 2024",
            child: { name: "Benjamin Harris", grade: "Grade 2 - Indigo", code: "283831" },
            followup: { name: "Grace Morgan", date: "18 Aug, 2024 10:45 AM" },
        },
        {
            id: 25147,
            channel: "Walk-in",
            color: "bg-green-50",
            name: "Michael Turner",
            date: "15 Aug, 2024",
            child: { name: "Amelia Foster", grade: "Pre-Nursery - Red", code: "514793" },
            followup: { name: "Chloe Stevens", date: "17 Aug, 2024 09:30 AM" },
        },
    ];

    const filterRows = (rows) =>
        rows.filter(
            (r) =>
                r.name.toLowerCase().includes(search.toLowerCase()) ||
                r.child.name.toLowerCase().includes(search.toLowerCase())
        );

    const Row = ({ data }) => (
        <tr className="hover:bg-gray-50 transition border">
            <td className="px-4 py-2 border">
                <div className="flex justify-center items-center gap-2">
                    <Star className="w-4 h-4 text-gray-400 cursor-pointer hover:text-yellow-400" />
                    <EyeOff className="w-4 h-4 cursor-pointer text-gray-400 hover:text-gray-600" />
                </div>
            </td>
            <td className="px-4 py-2 border">
                <span className="font-medium pr-2">{data.id}</span>
                <span className={`px-2 py-0.5 border border-green-700 text-xs rounded text-green-500 ${data.color}`}>
                    {data.channel}
                </span>
            </td>
            <td className="px-4 py-2 border border-l-4 border-gray-200">
                <div className="flex items-center space-x-3">
                    {/* Image */}
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-200 font-bold border-1 border-orange-300">A</span>

                    {/* Name + Date */}
                    <div className="flex flex-col">
                        <span className="font-medium text-gray-700">{data.name}</span>
                        <span className="text-sm text-gray-500">{data.date}</span>
                    </div>
                    <span className={`px-2 py-0.5 border border-blue-500 text-xs rounded text-blue-500 bg-blue-50`}>
                        {data.channel}
                    </span>
                </div>
            </td>
         <td className="px-4 py-2 border border-l-4 border-gray-200">
                <div className="flex items-center space-x-3">
                    {/* Image */}
                    {/* <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-200 font-bold border-1 border-orange-300">A</span> */}

                    {/* Name + Date */}
                    <div className="flex flex-col">
                        <span className="font-medium text-gray-700">{data.name}</span>
                        <span className="text-sm text-gray-500">{data.date}</span>
                    </div>
                    <span className={`px-2 py-0.5 border border-blue-500 text-xs rounded text-purple-500 bg-purple-100`}>
                        {data.channel}
                    </span>
                </div>
            </td>
            <td className="px-4 py-2 border">
                <span className="text-blue-600 font-medium">{data.followup.name}</span>
                <div className="text-sm text-gray-500">{data.followup.date}</div>
            </td>
            <td className="px-4 py-2 gap-3 text-center text-gray-400">
                <div className="flex justify-center items-center gap-3">
                    <Eye className="w-4 h-4 cursor-pointer hover:text-gray-600" />
                </div>
            </td>
            <td className="px-4 py-2 text-gray-400 border">
                <div className="flex justify-center items-center gap-3">
                    <ReceiptText className="w-4 h-4 text-blue-500 cursor-pointer hover:text-gray-600" />
                </div>
            </td>
            <td className="px-4 py-2 text-gray-400 border">
                <div className="flex justify-center items-center gap-3">
                    <GitBranchPlus className="w-4 h-4 text-purple-500 cursor-pointer hover:text-gray-600"/>
                </div>
            </td>
        </tr>
    );

    return (
        <div className="p-6 min-h-screen">
            <nav className="flex items-center justify-between bg-white px-6">
                {/* Tabs */}
                <div className="flex gap-6">
                    {tabs.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-1 text-sm font-light ${activeTab === tab
                                ? "border-b-2 border-blue-600 text-blue-600"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Add New Button */}
                <button className="bg-blue-500 text-white text-sm font-light px-4 py-2 rounded hover:bg-blue-600">
                    + Add New
                </button>
            </nav>


            {/* Filters */}
            <div className="rounded-2xl p-0 m-0">
                <div className="p-4 bg-white border mt-5 mb-4 flex flex-wrap gap-3 items-center rounded">
                    {filters.map((filter, idx) => (
                        filter == "filter" ? (  <span
                            key={idx}
                            className="flex items-center gap-2 text-sm px-3 py-1 rounded-lg border bg-blue-100 font-light"
                        >
                            {filter}
                            <X
                                className="w-4 h-4 text-blue-400 cursor-pointer hover:text-blue-600"
                                onClick={() => removeFilter(filter)}
                            />
                        </span>):(  <span
                            key={idx}
                            className="flex items-center text-gray-700 gap-2 text-sm px-3 py-1 rounded-lg border"
                        >
                            {filter}
                            <X
                                className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                                onClick={() => removeFilter(filter)}
                            />
                        </span>)
                      
                    ))}
                    <input
                        type="text"
                        placeholder="Search name, team name..."
                        className="ml-auto border rounded px-3 py-1 text-sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="shadow-sm rounded-lg border border-gray-200 overflow-hidden">
                    <div className="bg-white flex bg-gray-100 border-b border-gray-300 text-gray-700 font-semibold text-sm">
                        <div className="w-1/13 px-4 py-3 border-l border-gray-300 text-center"></div>

                        <div
                            className="w-1/6 px-4 py-3 border-l border-gray-300 cursor-pointer text-gray-500 font-medium"
                            onClick={() => handleSort("leadId")}
                        >
                            Lead ID {renderSortIcon("leadId")}
                        </div>

                        <div
                            className="w-1/4 px-4 py-3 border-l border-gray-300 cursor-pointer text-gray-500 font-medium"
                            onClick={() => handleSort("prospect")}
                        >
                            Prospect {renderSortIcon("prospect")}
                        </div>

                        <div
                            className="w-1/5 px-4 py-3 border-l border-gray-300 cursor-pointer text-gray-500 font-medium"
                            onClick={() => handleSort("childName")}
                        >
                            Child Name {renderSortIcon("childName")}
                        </div>

                        <div
                            className="w-1/6 px-4 py-3 border-l border-gray-300 cursor-pointer text-gray-500 font-medium"
                            onClick={() => handleSort("followUp")}
                        >
                            Follow Up {renderSortIcon("followUp")}
                        </div>

                        <div
                            className="w-1/5 px-4 py-3 border-l border-gray-300 text-center cursor-pointer text-gray-500 font-medium"
                            onClick={() => handleSort("contact")}
                        >
                            Contact {renderSortIcon("contact")}
                        </div>
                    </div>
                </div>


                {/* Scheduled Follow-ups */}
                <div className="bg-white overflow-hidden">

                    <div className="px-6 py-3 font-medium text-gray-500 bg-gray-100">Scheduled Follow-ups for today</div>
                    <table className="w-full text-left text-sm">
                        <tbody>
                            {filterRows(scheduledFollowUps).map((row, idx) => (
                                <Row key={idx} data={row} />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* All Visitors */}
                <div className="bg-white overflow-hidden">
                    <div className="px-6 py-3 font-medium text-gray-500 bg-gray-100">All Visitor</div>
                    <table className="w-full text-left text-sm">
                        <tbody>
                            {filterRows(allVisitors).map((row, idx) => (
                                <Row key={idx} data={row} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
