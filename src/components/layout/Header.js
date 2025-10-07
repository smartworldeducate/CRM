"use client";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My CRM</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={() => alert("Logout clicked")} // ✅ interactive
      >
        Logout
      </button>
    </header>
  );
}
