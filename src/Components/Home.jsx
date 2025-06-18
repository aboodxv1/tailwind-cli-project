import React from "react";
import { CalendarDays, LayoutDashboard, Users, Settings } from "lucide-react";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-16 md:w-20 bg-gray-200 p-4 flex flex-col items-center space-y-6">
        <LayoutDashboard className="w-6 h-6 text-gray-600" />
        <CalendarDays className="w-6 h-6 text-gray-600" />
        <Users className="w-6 h-6 text-gray-600" />
        <Settings className="w-6 h-6 text-gray-600" />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <h1 className="text-2xl font-semibold mb-6">
          Event Overview <span className="text-gray-500">/ Client Portal 2024</span>
        </h1>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="bg-white rounded-xl p-4 shadow-md col-span-1">
            <h2 className="text-lg font-semibold mb-2">October 2023</h2>
            {/* Placeholder Calendar */}
            <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-700">
              {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
                <div key={d} className="font-medium">{d}</div>
              ))}
              {[...Array(31)].map((_, i) => (
                <div key={i} className="p-2 rounded bg-gray-100">{i + 1}</div>
              ))}
            </div>
          </div>

          {/* Project Timeline */}
          <div className="bg-white rounded-xl p-4 shadow-md col-span-2">
            <h2 className="text-lg font-semibold mb-2">Project Timeline</h2>
            <div className="bg-gray-100 p-4 rounded-lg h-48">
              {/* Placeholder timeline bars */}
              <div className="h-4 bg-gray-300 rounded-full w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-300 rounded-full w-1/2 mb-3"></div>
              <div className="h-4 bg-gray-300 rounded-full w-2/3"></div>
            </div>
          </div>

          {/* Team Contacts */}
          <div className="bg-white rounded-xl p-4 shadow-md col-span-1">
            <h2 className="text-lg font-semibold mb-4">Team Contacts</h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="bg-gray-100 p-2 rounded text-center text-xs font-medium"
                >
                  <div className="w-12 h-12 bg-white rounded-full mx-auto mb-1" />
                  <p>User {n}</p>
                  <p className="text-gray-500">Role</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks Overview */}
          <div className="bg-white rounded-xl p-4 shadow-md col-span-2">
            <h2 className="text-lg font-semibold mb-4">Tasks Overview</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <p>Vendor Follow-up</p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-red-500 text-white px-2 py-1 rounded">Not started</span>
                  <span className="bg-black text-white px-2 py-1 rounded">High priority</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p>Budget Review</p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded">In progress</span>
                  <span className="bg-orange-500 text-white px-2 py-1 rounded">Medium priority</span>
                </div>
              </div>
              {/* Add more task rows as needed */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
