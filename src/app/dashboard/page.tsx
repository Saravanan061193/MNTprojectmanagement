"use client";

import { ArrowUpRight, Clock, ShieldAlert, Activity, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function DashboardPage() {
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { data } = await api.get('/api/dashboard/stats');
                setStats(data);
            } catch (err) {
                console.error("Failed to fetch dashboard stats", err);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    if (loading) {
        return <div className="text-white p-8">Loading dashboard...</div>;
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard</h1>
                    <p className="text-gray-400 mt-1">Overview of your technical assets.</p>
                </div>
                <Link href="/dashboard/clients" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-medium shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transition-all flex items-center gap-2">
                    <span className="text-lg leading-none">+</span> New Client
                </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="Active Clients"
                    value={stats?.activeClients || 0}
                    icon={Activity}
                    trend={`${stats?.inactiveClients || 0} Inactive`}
                    trendUp={true}
                />
                <StatsCard
                    title="Total Renewal"
                    value={`₹${(stats?.totalRenewalAmount || 0).toLocaleString()}`}
                    icon={DatabaseIcon}
                    trend="Annual Forecast"
                    trendUp={true}
                    intent="success"
                />
                <StatsCard
                    title="Expiring Soon"
                    value={stats?.expiringSoon || 0}
                    icon={Clock}
                    trend="Next 30 Days"
                    intent={stats?.expiringSoon > 0 ? "danger" : "success"}
                />
                <StatsCard
                    title="System Assets"
                    value={stats?.totalAssets || 0}
                    icon={ShieldAlert}
                    trend="Live Monitoring"
                    intent="neutral"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Urgent Expiries</h3>
                        {stats?.expiringSoon > 0 ? (
                            <div className="space-y-3">
                                {/* Map real expiring items here if API provided them */}
                                <div className="text-gray-400 text-sm">{stats.expiringSoon} assets require your attention within 30 days.</div>
                            </div>
                        ) : (
                            <div className="text-gray-500 text-sm">No urgent expiries in the next 30 days.</div>
                        )}
                    </div>

                    <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-6">Client Status Breakdown</h3>
                        <div className="flex items-center gap-8">
                            <div className="flex-1 space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-400">Active Clients</span>
                                    <span className="text-emerald-400 font-bold">{stats?.activeClients || 0}</span>
                                </div>
                                <div className="w-full bg-[#1a1a1a] h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-emerald-500 h-full rounded-full transition-all duration-1000"
                                        style={{ width: `${(stats?.activeClients / (stats?.totalClients || 1)) * 100}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-400">Inactive / On Hold</span>
                                    <span className="text-red-400 font-bold">{stats?.inactiveClients || 0}</span>
                                </div>
                                <div className="w-full bg-[#1a1a1a] h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-red-500 h-full rounded-full transition-all duration-1000"
                                        style={{ width: `${(stats?.inactiveClients / (stats?.totalClients || 1)) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                        <div className="space-y-4">
                            {/* Placeholder for activity */}
                            <div className="text-gray-500 text-sm">No recent activity logged.</div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/10 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-2">Quick Actions</h3>
                        <div className="space-y-2">
                            <Link href="/dashboard/assets" className="block w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm text-gray-300 hover:text-white transition-all border border-transparent hover:border-white/10">
                                Add New Asset
                            </Link>
                            <Link href="/dashboard/reports" className="block w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm text-gray-300 hover:text-white transition-all border border-transparent hover:border-white/10">
                                Generate Report
                            </Link>
                            <Link href="/dashboard/reports" className="block w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm text-gray-300 hover:text-white transition-all border border-transparent hover:border-white/10">
                                View Audit Logs
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatsCard({ title, value, icon: Icon, trend, trendUp, intent = "neutral" }: any) {
    return (
        <div className="bg-[#111] border border-[#222] p-5 rounded-2xl hover:border-[#333] transition-all group">
            <div className="flex items-start justify-between mb-4">
                <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                    intent === "danger" ? "bg-red-500/10 text-red-500" :
                        intent === "success" ? "bg-green-500/10 text-green-500" :
                            "bg-blue-500/10 text-blue-500"
                )}>
                    <Icon size={20} />
                </div>
                {trend && (
                    <span className={cn(
                        "text-xs px-2 py-1 rounded-full border",
                        intent === "danger" ? "bg-red-500/10 border-red-500/20 text-red-400" : "bg-green-500/10 border-green-500/20 text-green-400"
                    )}>
                        {trend}
                    </span>
                )}
            </div>
            <div>
                <p className="text-sm font-medium text-gray-400">{title}</p>
                <h3 className="text-2xl font-bold text-white mt-1 group-hover:scale-[1.02] origin-left transition-transform">{value}</h3>
            </div>
        </div>
    );
}

function DatabaseIcon({ size }: { size: number }) {
    return <ArrowUpRight size={size} />; // Placeholder
}
