"use client";

export default function Input({ value = "", onChange, placeholder = "" }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="border rounded p-2 w-full"
    />
  );
}
