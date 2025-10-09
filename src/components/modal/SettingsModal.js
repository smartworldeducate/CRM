"use client";
import { useState, useRef, useMemo, useEffect } from "react";
import { X } from "lucide-react";
import FileUpload from "../file/FileUpload";

export default function SettingsModal({ onClose }) {
  const [selectedId, setSelectedId] = useState("lead");

  // Section refs
  const leadRef = useRef(null);
  const parentRef = useRef(null);
  const interestRef = useRef(null);
  const documentRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const sections = useMemo(
    () => [
      { id: "lead", label: "Lead Information", ref: leadRef },
      { id: "parent", label: "Parent / Guardian Info", ref: parentRef },
      { id: "interest", label: "Interests & Preferences", ref: interestRef },
      { id: "document", label: "Documents", ref: documentRef },
    ],
    []
  );

  // Scroll Spy effect
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const scrollPosition = scrollContainerRef.current.scrollTop;

      let current = "lead";
      sections.forEach((section) => {
        const el = section.ref.current;
        if (el && scrollPosition >= el.offsetTop - 80) {
          current = section.id;
        }
      });

      setSelectedId(current);
    };

    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id, ref) => {
    setSelectedId(id);
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const SectionHeader = ({ title }) => (
    <div className="py-2 mb-4 border-b border-gray-200">
      <h6 className="font-semibold text-gray-800">{title}</h6>
    </div>
  );

  const Field = ({
    label,
    type = "text",
    isTextarea = false,
    isSelect = false,
    options = [],
  }) => (
    <div className="flex flex-col sm:flex-row items-start gap-3">
      <label className="sm:w-48 text-sm font-medium text-gray-700 sm:pt-2 shrink-0">
        {label}
      </label>
      <div className="flex-1 w-full relative">
        {isTextarea ? (
          <textarea
            rows="3"
            placeholder={`Enter ${label.toLowerCase()}`}
            className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        ) : isSelect ? (
          <select className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Select {label}</option>
            {options.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        ) : type === "date" ? (
          <div className="relative">
            <input
              type="date"
              placeholder={`Select ${label.toLowerCase()}`}
              className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              style={{
                colorScheme: "light",
                paddingRight: "2.5rem",
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400 absolute right-3 top-2.5 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z"
              />
            </svg>
            <style jsx>{`
              input[type="date"]::-webkit-calendar-picker-indicator {
                opacity: 0;
                position: absolute;
                right: 0;
                width: 100%;
                height: 100%;
                cursor: pointer;
              }
            `}</style>
          </div>
        ) : (
          <input
            type={type}
            placeholder={`Enter ${label.toLowerCase()}`}
            className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-gray-100 rounded-2xl w-[92%] max-w-6xl h-[90vh] shadow-2xl flex flex-col overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-gray-200 bg-gray-100 sticky top-0 z-10">
          <h2 className="text-lg font-semibold text-gray-800">Settings</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="w-68 border-gray-200 flex flex-col">
            <nav className="flex-1 overflow-y-auto space-y-1 custom-scroll">
              {sections.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id, tab.ref)}
                  className={`w-full text-left px-5 py-2.5 rounded-md text-sm font-medium transition ${
                    selectedId === tab.id
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <section
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100 custom-scroll space-y-6"
          >
            {/* Lead Information */}
            <div ref={leadRef} id="lead" className="border p-4 rounded-4">
              <SectionHeader title="Lead Information" />
              <div className="space-y-4 pb-4 border-b border-gray-200">
                <Field label="Contact Name" />
                <Field label="Email" type="email" />
                <Field label="Mobile" />
                <Field label="Inquiry Date" type="date" />
                <Field
                  label="Source of Lead"
                  isSelect
                  options={["Website", "Referral", "Walk-in"]}
                />
              </div>

              <SectionHeader title="Student Information" />
              <div className="space-y-4 pb-4 border-b border-gray-200">
                <Field label="First Name" />
                <Field label="Middle Name" />
                <Field label="Last Name" />
                <Field label="DOB" type="date" />
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <label className="sm:w-48 text-sm font-medium text-gray-700 sm:pt-2 shrink-0">
                    Gender
                  </label>
                  <div className="flex-1 flex gap-6">
                    <label className="flex items-center gap-2 text-gray-400">
                      <input type="radio" name="gender" /> Male
                    </label>
                    <label className="flex items-center gap-2 text-gray-400">
                      <input type="radio" name="gender" /> Female
                    </label>
                  </div>
                </div>
                <Field label="Nationality" />
                <Field label="Language(s) Spoken" />
              </div>
            <SectionHeader title="Enrollment information" />
              <div className="space-y-4 pb-4 border-b border-gray-200">
                <Field label="Admission School" />
                <Field label="Grade Level Applying For" isSelect
                  options={["Website", "Referral", "Walk-in"]} />
                <Field label="Intended Start Date" type="date" />
              </div>
               <SectionHeader title="Most Recent Schooling" />
              <div className="space-y-4 pb-4">
                <Field label="Most Recent School" />
                <Field label="Previous GradeFor" isSelect
                  options={["Website", "Referral", "Walk-in"]} />
                  <Field label="Passing Year" isSelect
                  options={["Website", "Referral", "Walk-in"]} />
                  <Field label="Reason for Leaving" isSelect
                  options={["Website", "Referral", "Walk-in"]} />
              </div>
            </div>

            {/* Parent */}
            <div ref={parentRef} id="parent" className="border p-4 rounded-4">
              <SectionHeader title="Basic Information" />
              <div className="space-y-4 pb-4 border-b border-gray-200">
                <Field
                  label="Relationship to Student"
                  isSelect
                  options={["Father", "Mother", "Guardian"]}
                />
                <Field label="CNIC/Passport" />
                <Field label="CNIC Expiry" type="date" />
                <Field label="First Name" />
                <Field label="Last Name" />
                <Field label="Contact Number" />
                <Field label="Landline" />
                <Field label="Email Address" />
                <Field
                  label="Country"
                  isSelect
                  options={["Pakistan", "UAE", "USA"]}
                />
                <Field
                  label="City"
                  isSelect
                  options={["Karachi", "Lahore", "Islamabad"]}
                />
                <Field label="Residential Address" isTextarea />
                <Field label="Occupation" />
                <Field label="Organization" />
                <div className="flex flex-col sm:flex-row gap-6">
                  <label className="flex items-center gap-2 text-sm text-gray-400">
                    <input type="checkbox" /> Alumni (If Yes)
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-400">
                    <input type="checkbox" /> Is Primary Contact
                  </label>
                </div>
              </div>
              <SectionHeader title="Contact Information" />
              <div className="space-y-4 pb-4">
                <Field label="Primary Phone #" />
                <Field label="Seondary Phone #" />
                <Field label="Primary Email Address" />
                <Field label="Home Address" isTextarea />
              </div>
            </div>

            {/* Interests */}
            <div ref={interestRef} id="interest" className="border p-4 rounded-4">
              <SectionHeader title="Preferences" />
              <div className="space-y-4 pb-4 border-b border-gray-200">
                <Field label="Program of Interest" isTextarea />
                <Field label="Extracurricular Interests" />
                <Field
                  label="Primary Language"
                  isSelect
                  options={["English", "Urdu", "Arabic"]}
                />
              </div>

              <SectionHeader title="Special Needs" />
              <div className="space-y-4 pb-4">
                <Field
                  label="Does the child have some special educational needs?"
                  isTextarea
                />
                <Field label="Special Needs" isTextarea />
                <Field label="Any Serious Illness or Allergies" isTextarea />
                <Field label="Any Physical Impairment" isTextarea />
              </div>
            </div>

            {/* Documents */}
            <div ref={documentRef} id="document" className="border p-4 rounded-4">
              <SectionHeader title="Documents" />
              <div className="space-y-6">
                {[
                  { label: "CNIC Certificate", id: "cnic" },
                  { label: "Character Certificate", id: "certificate" },
                ].map((doc) => (
                  <div
                    key={doc.id}
                    className="flex flex-col sm:flex-row items-start gap-3"
                  >
                    <label className="sm:w-48 text-sm font-medium text-gray-700 sm:pt-2 shrink-0">
                      {doc.label}
                    </label>
                    <div className="flex-1 w-full">
                      <FileUpload placeholder={`Upload ${doc.label}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-3 border-gray-200 p-6">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button className="px-5 py-2 rounded-3 bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
                Save Changes
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Slim Scrollbar */}
      <style jsx global>{`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 9999px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }
      `}</style>
    </div>
  );
}
