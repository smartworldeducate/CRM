"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import lpg from "../../../public/login.png";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      dispatch(login({ email: formData.email }));
      router.push("/");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side Login Form (50%) */}
      <div className="flex w-1/2 items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 border border-gray-300 rounded">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Sign In
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            {/* <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div> */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-semibold mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <a
                  href="/forgot-password"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-3 flex items-center">
              {/* <input
                type="checkbox"
                id="remember"
                name="remember"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              /> */}
              <input
  type="checkbox"
  id="remember"
  name="remember"
  className="h-4 w-4 rounded border border-gray-300 bg-gray-200 checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-500"
/>
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember Me
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full p-2 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500 transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      {/* Right Side Image (50%) */}
      <div className="w-1/2 relative hidden md:block">
        <Image
          src={lpg}
          alt="Login Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
