"use client";

import StatusBadges from "@/components/layout/StatusBadges";
import {
  Search,
  Building2,
  Briefcase,
  Calendar,
  Mail,
  Calendar1,
} from "lucide-react";

export default function LeadPage() {
  return (
    <div className="px-4">
    <div className="flex items-center justify-between rounded-2xl p-4 mb-6">
      {/* Left: Search */}
      <div className="flex items-center gap-3 border border-gray-200 w-3/4 p-3 rounded-xl">
        <Search className="text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search Name / Mobile / CNIC"
          className="w-full text-sm text-gray-600 outline-none placeholder-gray-400"
        />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-gray-50 p-[2px]">
          <div className="hex flex items-center justify-center bg-[#E8EAFD] hover:bg-[#dce0fb] transition">
            <Building2 className="w-5 h-5 text-[#4B4DED]" />
          </div>
        </div>

        <div className="rounded-2xl bg-gray-50 p-[2px]">
          <div className="hex flex items-center justify-center bg-[#FFF3E6] hover:bg-[#ffe7d1] transition">
            <Briefcase className="w-5 h-5 text-[#FF8A00]" />
          </div>
        </div>

        <div className="rounded-2xl bg-gray-50 p-[2px]">
          <div className="hex flex items-center justify-center bg-[#E6F9E8] hover:bg-[#d8f3db] transition">
            <Calendar className="w-5 h-5 text-[#3DDC97]" />
          </div>
        </div>

        <div className="rounded-2xl bg-gray-50 p-[2px]">
          <div className="hex flex items-center justify-center bg-[#F3ECFF] hover:bg-[#e9ddff] transition">
            <Mail type="fill" className="w-5 h-5 text-[#9B51E0]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Rounded Hexagon (smoothed polygon) */
        .hex {
          width: 50px;
          height: 46px;
          clip-path: polygon(
            27% 8%,
            73% 8%,
            97% 50%,
            73% 92%,
            27% 92%,
            3% 50%
          );
          border: 1px solid #d1d5db; /* gray-300 */
          border-radius: 8px; /* Adds slight curvature feel */
          transition: all 0.3s ease;
        }

        .hex:hover {
          filter: brightness(0.97);
        }
      `}</style>
    </div>
    <div className="mb-4">
    <StatusBadges/>
    </div>
     <div className="flex mb-6">
      {/* Left: Search */}
      <div className="flex w-1/4">
           <div className="w-64 border-r border-gray-200">
          <button className="text-sm text-gray-500 mb-2">
            Advanced Settings
          </button>
          <div className="flex flex-col gap-1">
            <button className="text-sm text-gray-600 hover:text-gray-800 text-left py-1">
              Lead Contact
            </button>
            <button className="text-sm text-gray-600 hover:text-gray-800 text-left py-1 bg-gray-100 rounded-md pl-2">
              Student Information
            </button>
            <button className="text-sm text-gray-600 hover:text-gray-800 text-left py-1">
              Enrollment Information
            </button>
            <button className="text-sm text-gray-600 hover:text-gray-800 text-left py-1">
              Most Recent Schooling
            </button>
          </div>

          <button className="text-sm text-gray-500 mt-4 mb-2">
            Parent Guardian Information
          </button>
          <div className="flex flex-col gap-1">
            <button className="text-sm text-gray-600 hover:text-gray-800 text-left py-1">
              Basic Information
            </button>
            <button className="text-sm text-gray-600 hover:text-gray-800 text-left py-1">
              Contact Information
            </button>
          </div>

          <button className="text-sm text-gray-500 mt-4 mb-2">
            Interests & Preferences
          </button>
          <div className="flex flex-col gap-1">
            <button className="text-sm text-gray-600 hover:text-gray-800 text-left py-1">
              Preferences
            </button>
            <button className="text-sm text-gray-600 hover:text-gray-800 text-left py-1">
              Special Needs
            </button>
          </div>
        </div>
      </div>

      {/* Right: Icons */}
     <div className="flex w-full">
      
      <div className="w-full space-y-6">
         <p className="text-lg font-semibold text-gray-900 mb-4">
            Lead Information
          </p>
        {/* Lead Contact */}
        <div className="bg-white rounded-lg p-6 border w-full">
          <p className="text-lg font-semibold text-gray-900 mb-4">
            Lead Contact
          </p>
          <div className="space-y-4">
            {/* Name */}
            <div className="flex items-center w-full">
              <label className="w-32 text-sm text-gray-600">Name</label>
              <input
                type="text"
                defaultValue="Sophia Collins"
                className="flex-1 bg-gray-50 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            {/* Email */}
            <div className="flex items-center w-full">
              <label className="w-32 text-sm text-gray-600">Email</label>
              <input
                type="email"
                defaultValue="sophia@schoolflow360.com"
                className="flex-1 bg-gray-50 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            {/* Mobile */}
            <div className="flex items-center w-full">
              <label className="w-32 text-sm text-gray-600">Mobile</label>
              <input
                type="text"
                defaultValue="+1 202-555-0147"
                className="flex-1 bg-gray-50 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Student Information */}
        <div className="bg-white rounded-lg border p-6 w-full">
          <p className="text-lg text-gray-900 font-semibold text-gray-800 mb-4">
            Student Information
          </p>
          <div className="space-y-4">
            {/* First + Middle */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="flex items-center">
                <label className="w-32 text-sm text-gray-600">First Name</label>
                <input
                  type="text"
                  defaultValue="Emily"
                  className="flex-1 bg-gray-50 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex items-center">
                <label className="w-32 text-sm text-gray-600">Middle Name</label>
                <input
                  type="text"
                  defaultValue="Carter"
                  className="flex-1 bg-gray-50 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Last + DOB */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="flex items-center">
                <label className="w-32 text-sm text-gray-600">Last Name</label>
                <input
                  type="text"
                  defaultValue="john"
                  className="flex-1 bg-gray-50 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex items-center">
                <label className="w-32 text-sm text-gray-600">DOB</label>
                <div className="flex-1 relative">
                  <input
                    type="date"
                    defaultValue="15, Oct 2016"
                    className="w-full bg-gray-50 text-gray-500 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                 {/* <Calendar1 className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" /> */}
                </div>
              </div>
            </div>

            {/* Gender */}
            <div className="flex items-center w-full">
              <label className="w-32 text-sm text-gray-600">Gender</label>
              <select className="flex-1 bg-gray-50 rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

   
    </div>
    </div>
  );
}
