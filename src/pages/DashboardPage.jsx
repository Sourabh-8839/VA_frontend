import React from 'react'

const DashboardPage = () => {
  // Hardcoded user role for demo
  const role = 'user' // Change to 'admin' to test admin view

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {role === 'admin' ? (
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-blue-700">Admin Panel</h2>
          <ul className="list-disc pl-6">
            <li>Manage Users & Credits</li>
            <li>View Reported Content</li>
            <li>Access Feed Analytics</li>
            <li>Moderate User Activity</li>
          </ul>
        </div>
      ) : (
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-green-700">User Dashboard</h2>
          <ul className="list-disc pl-6">
            <li>Credit Balance: 120</li>
            <li>Saved Posts: 8</li>
            <li>Daily Login Streak: 5 days</li>
            <li>Recent Activity: 3 shares, 5 saves</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default DashboardPage
