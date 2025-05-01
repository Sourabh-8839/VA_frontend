// src/components/Sidebar.js

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div class="sm:w-64 w-16 h-full bg-[#081A51] flex flex-col px-4 py-5">
       <div class="logo flex items-center mb-6">
         <div class="bg-[#017EFA] sm:mr-5 p-2.5 rounded-md text-white">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
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
  );
};

export default Sidebar;
