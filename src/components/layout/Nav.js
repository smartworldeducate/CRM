"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex space-x-6 p-4 bg-gray-100 shadow">
      <Link href="/employee" className="hover:text-blue-600">Employee</Link>
      <Link href="/students" className="hover:text-blue-600">Students</Link>
      <Link href="/payments" className="hover:text-blue-600">Payments</Link>
      <Link href="/engagement" className="hover:text-blue-600">Engagement</Link>
      <Link href="/school" className="hover:text-blue-600">School</Link>
    </nav>
  );
}