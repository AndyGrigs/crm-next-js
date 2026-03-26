import React from 'react';
import Header from '@/app/components/header';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  {
    label: 'Total Companies',
    value: '124',
    change: '+12%',
    positive: true,
    icon: '/icons/briefcase.svg',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
  },
  {
    label: 'Active Deals',
    value: '38',
    change: '+5%',
    positive: true,
    icon: '/icons/squares.svg',
    bg: 'bg-green-50',
    iconBg: 'bg-green-100',
  },
  {
    label: 'Revenue (month)',
    value: '$84,200',
    change: '+8.3%',
    positive: true,
    icon: '/icons/squares.svg',
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-100',
  },
  {
    label: 'Closed Deals',
    value: '7',
    change: '-2',
    positive: false,
    icon: '/icons/briefcase.svg',
    bg: 'bg-red-50',
    iconBg: 'bg-red-100',
  },
];

const recentCompanies = [
  { name: 'Acme Corp', industry: 'Technology', status: 'Active', date: 'Mar 25, 2026' },
  { name: 'Global Media', industry: 'Media', status: 'Pending', date: 'Mar 24, 2026' },
  { name: 'Nova Finance', industry: 'Finance', status: 'Active', date: 'Mar 22, 2026' },
  { name: 'Blue Horizon', industry: 'Logistics', status: 'Inactive', date: 'Mar 20, 2026' },
  { name: 'Spark Retail', industry: 'Retail', status: 'Active', date: 'Mar 18, 2026' },
];

const statusColor: Record<string, string> = {
  Active: 'bg-green-100 text-green-700',
  Pending: 'bg-yellow-100 text-yellow-700',
  Inactive: 'bg-gray-100 text-gray-500',
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header>Dashboard</Header>

      <div className="p-8 flex flex-col gap-8">

        {/* Welcome banner */}
        <div className="rounded-2xl bg-gray-900 text-white px-8 py-6 flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm mb-1">Good morning,</p>
            <h2 className="text-2xl font-semibold">Adam Smith 👋</h2>
            <p className="text-gray-400 text-sm mt-1">Here&apos;s what&apos;s happening with your CRM today.</p>
          </div>
          <Image
            src="/images/avatar.png"
            alt="avatar"
            width={64}
            height={64}
            className="rounded-full ring-2 ring-white/20"
          />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div key={stat.label} className={`rounded-2xl ${stat.bg} p-5 flex flex-col gap-3`}>
              <div className={`w-10 h-10 rounded-xl ${stat.iconBg} flex items-center justify-center`}>
                <Image src={stat.icon} alt={stat.label} width={20} height={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
              <span className={`text-xs font-medium ${stat.positive ? 'text-green-600' : 'text-red-500'}`}>
                {stat.change} this month
              </span>
            </div>
          ))}
        </div>

        {/* Recent companies */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h3 className="text-base font-semibold text-gray-900">Recent Companies</h3>
            <Link href="/companies" className="text-sm text-blue-600 hover:underline">View all</Link>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-400 uppercase bg-gray-50">
                <th className="text-left px-6 py-3 font-medium">Company</th>
                <th className="text-left px-6 py-3 font-medium">Industry</th>
                <th className="text-left px-6 py-3 font-medium">Status</th>
                <th className="text-left px-6 py-3 font-medium">Added</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentCompanies.map((company) => (
                <tr key={company.name} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{company.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{company.industry}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColor[company.status]}`}>
                      {company.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">{company.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
