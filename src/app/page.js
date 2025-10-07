"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Users, FileText, UserPlus, Megaphone } from "lucide-react";

const data = [
  { name: "Jan", earnings: 25000 },
  { name: "Feb", earnings: 18000 },
  { name: "Mar", earnings: 22000 },
  { name: "Apr", earnings: 12000 },
  { name: "May", earnings: 30000 },
  { name: "Jun", earnings: 34233 },
  { name: "Jul", earnings: 25000 },
  { name: "Aug", earnings: 15000 },
  { name: "Sep", earnings: 19000 },
  { name: "Oct", earnings: 21000 },
  { name: "Nov", earnings: 24000 },
  { name: "Dec", earnings: 20000 },
];

export default function HomePage() {
  return (
    <div className="min-h-screen p-8">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Cards */}
        <div className="grid grid-cols-2 gap-6 lg:col-span-1">
          {/* Leads */}
          <div className="p-6 bg-white rounded-xl border flex flex-col items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
              <Users className="text-blue-500" size={24} />
            </div>
            <p className="text-gray-500 text-sm">Leads</p>
            <p className="text-2xl font-bold">9.3k</p>
          </div>

          {/* Registrations */}
          <div className="p-6 bg-white rounded-xl border flex flex-col items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mb-4">
              <FileText className="text-orange-500" size={24} />
            </div>
            <p className="text-gray-500 text-sm">Registrations</p>
            <p className="text-2xl font-bold">8.1k</p>
          </div>

          {/* Admissions */}
          <div className="p-6 bg-white rounded-xl border flex flex-col items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
              <UserPlus className="text-green-500" size={24} />
            </div>
            <p className="text-gray-500 text-sm">Admissions</p>
            <p className="text-2xl font-bold">7.9k</p>
          </div>

          {/* Campaign */}
          <div className="p-6 bg-white rounded-xl border flex flex-col items-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4">
              <Megaphone className="text-purple-500" size={24} />
            </div>
            <p className="text-gray-500 text-sm">Campaign</p>
            <p className="text-2xl font-bold">253</p>
          </div>
        </div>

        {/* Right Side - Earnings Chart */}
        <div className="bg-white rounded-xl border p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Earnings</h2>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>Referrals only</span>
              <button className="px-3 py-1 border rounded-lg">12 months</button>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                formatter={(value) => [`$${value.toLocaleString()}`, "Sales"]}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Line type="monotone" dataKey="earnings" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
