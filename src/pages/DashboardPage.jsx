// DashboardPage.js

import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/UserContext";

const DashboardPage = () => {
  const recentActivityData = [
    { activity: "Logged in", time: "10:00 AM" },
    { activity: "Updated profile", time: "11:15 AM" },
    { activity: "Created new post", time: "1:00 PM" },
    { activity: "Commented on a feed", time: "3:30 PM" },
    { activity: "MAke", time: "4:55 PM" },
  ];

  const {account} = useData();
  

  return (
    <div class="w-screen h-screen flex  bg-[#F8F9FF]">
      <div class="sm:w-64 w-16 h-full bg-[#081A51] flex flex-col px-4 py-5">
        <div class="logo flex items-center mb-6">
          <div class="bg-[#017EFA] sm:mr-5 p-2.5 rounded-md text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h4 class="text-white hidden sm:block font-bold">Dash</h4>
        </div>
        <ul className="space-y-4 text-white w-full">
          <Link to="/dashboard">
            <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">
              Dashboard
            </li>
          </Link>
          <Link to="/admin">
            <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">
              Admin
            </li>
          </Link>
          <Link to="/feed">
            <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">
              Feed
            </li>
          </Link>
        </ul>
      </div>

      <div class="content-wrapper flex flex-col flex-1 h-full">
        <div class="navbar bg-white h-[90px] flex items-center px-9 shadow-md">
          <h2 class="font-bold text-[#1C1F37] text-3xl">Dashboard</h2>
          <nav class="ml-auto flex space-x-6 items-center">
            <div class="bg-[#F5F7FB] h-10 w-10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div class="bg-[#F5F7FB] h-10 w-10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <div class="user flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="font-bold text-base">Username</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-[#9A9A9A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </nav>
        </div>

        <div class="h-[100vh] p-3  bg-white mt-2 rounded-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Credit Stats */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Credit Stats</h2>
              <p className="text-lg">Your total credits: {account.user.credits}</p>

            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Saved Feeds</h2>
              <ul className="space-y-2">
                <li className="text-sm">
                  Feed 1 - Lorem ipsum dolor sit amet.
                </li>
                <li className="text-sm">
                  Feed 2 - Consectetur adipiscing elit.
                </li>
                <li className="text-sm">
                  Feed 3 - Sed do eiusmod tempor incididunt.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 text-left">Activity</th>
                  <th className="py-2 px-4 text-left">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentActivityData.map((activity, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-2 px-4">{activity.activity}</td>
                    <td className="py-2 px-4">{activity.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
