import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Reusable StatCard
interface StatCardProps {
  title: string;
  value: number | string;
  trend?: string;
  bgColor: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend, bgColor, icon }) => {
  return (
    <div className={`flex items-center p-4 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 ${bgColor} text-white`}>
      <div className="p-3 bg-white bg-opacity-20 rounded-full mr-4">{icon}</div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
        {trend && <p className="text-xs mt-1">{trend}</p>}
      </div>
    </div>
  );
};

export const DashboardView: React.FC = () => {
  const attendanceData = [
    { month: 'Jan', attendance: 92 },
    { month: 'Feb', attendance: 94 },
    { month: 'Mar', attendance: 95 },
    { month: 'Apr', attendance: 93 },
    { month: 'May', attendance: 96 },
  ];

  const recentActivity = [
    { action: 'New student enrolled', time: '2 hours ago', type: 'success' },
    { action: 'Grade report generated', time: '4 hours ago', type: 'info' },
    { action: 'Parent meeting scheduled', time: '1 day ago', type: 'warning' },
    { action: 'Attendance marked for Grade 10', time: '2 days ago', type: 'success' },
  ];

  const upcomingEvents = [
    { event: 'Parent-Teacher Conference', date: 'Nov 20, 2025', type: 'Meeting' },
    { event: 'Final Exams Begin', date: 'Dec 1, 2025', type: 'Exam' },
    { event: 'Winter Break', date: 'Dec 15, 2025', type: 'Holiday' },
    { event: 'Science Fair', date: 'Jan 10, 2026', type: 'Event' },
  ];

  // Badge colors based on type
  const eventBadgeColor = (type: string) => {
    switch (type) {
      case 'Exam':
        return 'bg-red-200 text-red-800';
      case 'Holiday':
        return 'bg-green-200 text-green-800';
      case 'Meeting':
        return 'bg-yellow-200 text-yellow-800';
      case 'Event':
      default:
        return 'bg-blue-200 text-blue-800';
    }
  };

  return (
    <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value={1247}
          trend="+12% from last month"
          bgColor="bg-blue-500"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>}
        />
        <StatCard
          title="Total Teachers"
          value={87}
          trend="+5 new this semester"
          bgColor="bg-orange-500"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>}
        />
        <StatCard
          title="Avg Attendance"
          value="94.5%"
          trend="+2.3% this week"
          bgColor="bg-green-500"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>}
        />
        <StatCard
          title="Active Classes"
          value={42}
          bgColor="bg-purple-500"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>}
        />
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Attendance Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={attendanceData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="attendance" stroke="#4ade80" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${
                  item.type === 'success' ? 'bg-green-500' :
                  item.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.action}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events with Badges */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {upcomingEvents.map((item, i) => (
            <div key={i} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2">
                <p className="font-medium">{item.event}</p>
                <span className={`px-2 py-0.5 rounded text-xs font-semibold ${eventBadgeColor(item.type)}`}>
                  {item.type}
                </span>
              </div>
              <p className="text-sm text-gray-600">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
