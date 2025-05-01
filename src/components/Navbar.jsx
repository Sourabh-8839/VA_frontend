// src/components/Navbar.js

import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
      <div className="text-lg font-semibold">Dashboard</div>
      <div className="flex items-center space-x-4">
        <div className="text-sm">User Name</div>
        <img
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="User Avatar"
          className="h-10 w-10 rounded-full border-2 border-gray-300"
        />
      </div>
    </div>
  );
};

export default Navbar;
