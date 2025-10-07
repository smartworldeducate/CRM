"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const steps = [
  { id: 1, title: "Details", desc: "Name your App" },
  { id: 2, title: "Frameworks", desc: "Define your app framework" },
  { id: 3, title: "Database", desc: "Select the app database type" },
  { id: 4, title: "Storage", desc: "Provide storage details" },
  { id: 5, title: "Completed", desc: "Review and Submit" },
];

export default function CreateAppWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    appName: "",
    category: "Quick Online Courses",
  });

  const categories = [
    {
      id: "Quick Online Courses",
      label: "Quick Online Courses",
      desc: "Creating a clear text structure is just one SEO",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "Face to Face Discussions",
      label: "Face to Face Discussions",
      desc: "Creating a clear text structure is just one aspect",
      color: "bg-pink-100 text-pink-600",
    },
    {
      id: "Full Intro Training",
      label: "Full Intro Training",
      desc: "Creating a clear text structure copywriting",
      color: "bg-green-100 text-green-600",
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="">
      {/* Header */}
      {/* <div className="">
        <h2 className="text-2xl font-bold text-gray-800">Create App</h2>
      </div> */}

      <div className="flex">
        {/* Sidebar Steps */}
        <div className="w-1/3 border-r border-gray-200 ">
          <ul className="space-y-6">
            {steps.map((step) => (
              <li key={step.id} className="flex items-start gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg font-bold text-white 
                    ${
                      currentStep === step.id
                        ? "bg-blue-500"
                        : currentStep > step.id
                        ? "bg-green-500"
                        : "bg-gray-200 text-gray-600"
                    }`}
                >
                  {currentStep > step.id ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      currentStep === step.id
                        ? "text-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-400">{step.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="w-2/3 px-10">
          {currentStep === 1 && (
            
            <div>
              {/* App Name */}
              <div className="p-6 bg-white rounded-xl border">
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
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  App Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.appName}
                  onChange={(e) =>
                    setFormData({ ...formData, appName: e.target.value })
                  }
                  placeholder="Enter your App Name"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.appName}
                  onChange={(e) =>
                    setFormData({ ...formData, appName: e.target.value })
                  }
                  placeholder="Enter your Phone"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              

              {/* Categories */}
              <div>
                <label className="block text-sm font-semibold mb-4">
                  Category <span className="text-red-500">*</span>
                </label>
                <div className="space-y-4">
                  {categories.map((cat) => (
                    <label
                      key={cat.id}
                      className={`flex items-center gap-4 rounded-xl border p-4 cursor-pointer transition mr-4 
                        ${
                          formData.category === cat.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200"
                        }`}
                    >
                      <div
                        className={`h-10 w-10 flex items-center justify-center rounded-lg ${cat.color}`}
                      >
                        <span className="font-bold text-lg">•</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{cat.label}</p>
                        <p className="text-sm text-gray-500">{cat.desc}</p>
                      </div>
                      <input
                        type="radio"
                        name="category"
                        value={cat.id}
                        checked={formData.category === cat.id}
                        onChange={() =>
                          setFormData({ ...formData, category: cat.id })
                        }
                        className="h-4 w-4 text-blue-500"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
           {currentStep === 2 && (
            <div>
              {/* App Name */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  App Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.appName}
                  onChange={(e) =>
                    setFormData({ ...formData, appName: e.target.value })
                  }
                  placeholder="Enter your App Name"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.appName}
                  onChange={(e) =>
                    setFormData({ ...formData, appName: e.target.value })
                  }
                  placeholder="Enter your Phone"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              

              {/* Categories */}
              {/* <div>
                <label className="block text-sm font-semibold mb-4">
                  Category <span className="text-red-500">*</span>
                </label>
                <div className="space-y-4">
                  {categories.map((cat) => (
                    <label
                      key={cat.id}
                      className={`flex items-center gap-4 rounded-xl border p-4 cursor-pointer transition mr-4 
                        ${
                          formData.category === cat.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200"
                        }`}
                    >
                      <div
                        className={`h-10 w-10 flex items-center justify-center rounded-lg ${cat.color}`}
                      >
                        <span className="font-bold text-lg">•</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{cat.label}</p>
                        <p className="text-sm text-gray-500">{cat.desc}</p>
                      </div>
                      <input
                        type="radio"
                        name="category"
                        value={cat.id}
                        checked={formData.category === cat.id}
                        onChange={() =>
                          setFormData({ ...formData, category: cat.id })
                        }
                        className="h-4 w-4 text-blue-500"
                      />
                    </label>
                  ))}
                </div>
              </div> */}
            </div>
          )}
           {currentStep === 3 && (
            <div>
              {/* App Name */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  App Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.appName}
                  onChange={(e) =>
                    setFormData({ ...formData, appName: e.target.value })
                  }
                  placeholder="Enter your App Name"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.appName}
                  onChange={(e) =>
                    setFormData({ ...formData, appName: e.target.value })
                  }
                  placeholder="Enter your Phone"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              

              {/* Categories */}
              <div>
                <label className="block text-sm font-semibold mb-4">
                  Category <span className="text-red-500">*</span>
                </label>
                <div className="space-y-4">
                  {categories.map((cat) => (
                    <label
                      key={cat.id}
                      className={`flex items-center gap-4 rounded-xl border p-4 cursor-pointer transition mr-4 
                        ${
                          formData.category === cat.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200"
                        }`}
                    >
                      <div
                        className={`h-10 w-10 flex items-center justify-center rounded-lg ${cat.color}`}
                      >
                        <span className="font-bold text-lg">•</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{cat.label}</p>
                        <p className="text-sm text-gray-500">{cat.desc}</p>
                      </div>
                      <input
                        type="radio"
                        name="category"
                        value={cat.id}
                        checked={formData.category === cat.id}
                        onChange={() =>
                          setFormData({ ...formData, category: cat.id })
                        }
                        className="h-4 w-4 text-blue-500"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Next Step Button */}
         <div className="mt-10 flex justify-end">
            <button
                onClick={handleNext}
                className="group relative inline-flex items-center gap-2 px-8 py-3 
                        bg-gradient-to-r from-blue-400 to-blue-400 
                        text-white text-sm font-semibold 
                        rounded shadow-md 
                        hover:from-blue-600 hover:to-blue-700 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                        transition-all duration-300"
            >
                {currentStep === steps.length ? "Finish" : "Next Step"}
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
                </span>
            </button>
        </div>

        </div>
      </div>
    </div>
  );
}
