"use client";

import { useState } from "react";
import {
  Plus,
  Grid,
  List,
  MoreVertical,
  ChevronDown,
  Video,
  Image,
  PlayCircle,
  ShoppingCart,
  Mail,
} from "lucide-react";

const TABS = [
  { id: "leads", label: "Leads" },
  { id: "registration", label: "Registration" },
  { id: "admissions", label: "Admissions" },
  { id: "campaign", label: "Campaign" },
];

const campaigns = [
  {
    id: 1,
    icon: <Video className="w-6 h-6" />,
    iconBg: "bg-[rgba(145,70,255,0.08)]",
    iconColor: "text-[#9146FF]",
    title: "Twitch Live Session",
    subtitle: "Live Gaming Spectacle Unveiled",
    stats: [
      { v: "50.7%", label: "Traffic Up" },
      { v: "20.1k", label: "New Fans" },
      { v: "$100k", label: "Donated" },
    ],
    status: "Completed",
  },
  {
    id: 2,
    icon: <Image className="w-6 h-6" />,
    iconBg: "bg-[rgba(225,48,108,0.06)]",
    iconColor: "text-[#E1306C]",
    title: "Photo Promotion",
    subtitle: "Visual Stories Unleashed Worldwide",
    stats: [
      { v: "25k", label: "Link Hits" },
      { v: "32.9%", label: "Engage Uptick" },
      { v: "$7.5k", label: "Earnings" },
    ],
    status: "Running",
  },
  {
    id: 3,
    icon: <PlayCircle className="w-6 h-6" />,
    iconBg: "bg-[rgba(255,0,0,0.06)]",
    iconColor: "text-[#FF0000]",
    title: "Video Viral",
    subtitle: "Video Content Showcase Spotlighted",
    stats: [
      { v: "12M", label: "Video Plays" },
      { v: "40%", label: "Sub Gain" },
      { v: "25k", label: "Link Hits" },
    ],
    status: "Running",
  },
  {
    id: 4,
    icon: <ShoppingCart className="w-6 h-6" />,
    iconBg: "bg-[rgba(255,153,0,0.06)]",
    iconColor: "text-[#FF9900]",
    title: "Product Push",
    subtitle: "Prime Shopping Bliss Delivered",
    stats: [
      { v: "50%", label: "Traffic Rise" },
      { v: "$34.9k", label: "Product Sales" },
      { v: "10k", label: "Actions" },
    ],
    status: "Completed",
  },
  {
    id: 5,
    icon: <Mail className="w-6 h-6" />,
    iconBg: "bg-[rgba(29,78,216,0.06)]",
    iconColor: "text-[#1D4ED8]",
    title: "Email Engagement",
    subtitle: "Inbox Interaction Boost Achieved",
    stats: [
      { v: "24.3k", label: "Sent" },
      { v: "34.8%", label: "Opened" },
      { v: "$20.5k", label: "Revenue" },
    ],
    status: "Running",
  },
];

export default function CampaignPage() {
  const [view, setView] = useState("list");
  const [activeTab, setActiveTab] = useState("campaign");

  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 py-6">
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="flex overflow-x-auto gap-6 pb-2 sm:pb-0 no-scrollbar">
          {TABS.map((t) => {
            const active = t.id === activeTab;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className="relative flex items-center gap-2 text-sm font-medium text-gray-700 whitespace-nowrap"
              >
                <span
                  className={`flex items-center gap-2 ${
                    active ? "text-blue-600" : ""
                  }`}
                >
                  {t.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      active ? "text-blue-600" : "text-gray-400"
                    }`}
                  />
                </span>
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-md hover:bg-gray-100 ${
              view === "grid" ? "bg-gray-100" : ""
            }`}
            aria-label="Grid view"
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-md hover:bg-gray-100 ${
              view === "list" ? "bg-gray-100" : ""
            }`}
            aria-label="List view"
          >
            <List className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-md text-sm">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">New Campaign</span>
          </button>
        </div>
      </div>

      {/* Campaign count */}
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        56 Campaigns
      </h2>

      {/* Campaign cards */}
      <div
        className={
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 gap-4"
            : "space-y-4"
        }
      >
        {campaigns.map((c) => (
          <div
            key={c.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            {/* Left */}
            <div className="flex items-center gap-4 mb-3 sm:mb-0">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-lg ${c.iconBg}`}
              >
                <div className={`${c.iconColor}`}>{c.icon}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  {c.title}
                </div>
                <div className="text-xs text-gray-500">{c.subtitle}</div>
              </div>
            </div>

            {/* Center stats (scrollable on mobile) */}
            <div className="flex gap-3 sm:gap-6 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 no-scrollbar">
              {c.stats.map((s, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center sm:text-right px-3 py-2 rounded-md border border-gray-100 min-w-[90px] bg-white flex-shrink-0"
                >
                  <div className="text-sm font-semibold text-gray-900">
                    {s.v}
                  </div>
                  <div className="text-xs text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Right: status */}
            <div className="flex items-center justify-end gap-2 mt-3 sm:mt-0">
              <span
                className={`text-sm font-medium px-3 py-1 rounded-md ${
                  c.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {c.status}
              </span>
              <button className="p-2 rounded-full hover:bg-gray-50">
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
