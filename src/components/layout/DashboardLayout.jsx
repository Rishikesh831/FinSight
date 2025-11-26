import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, PieChart, Wallet, Settings, LogOut } from "lucide-react";
import { clsx } from "clsx";

const SidebarItem = ({ icon: Icon, label, to, active }) => (
    <Link
        to={to}
        className={clsx(
            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
            active
                ? "bg-primary/10 text-primary"
                : "text-text-muted hover:bg-white/5 hover:text-text-main"
        )}
    >
        <Icon size={20} className={clsx(active ? "text-primary" : "text-text-muted group-hover:text-text-main")} />
        <span className="font-medium">{label}</span>
        {active && (
            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
        )}
    </Link>
);

export default function DashboardLayout({ children }) {
    const location = useLocation();

    return (
        <div className="flex min-h-screen bg-background text-text-main font-sans selection:bg-primary/30">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-screen w-72 border-r border-white/5 bg-surface/30 backdrop-blur-xl p-6 hidden md:flex flex-col z-50">
                <div className="flex items-center gap-3 px-2 mb-10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="font-bold text-white">F</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight">FinSight</span>
                </div>

                <nav className="flex-1 space-y-2">
                    <SidebarItem
                        icon={LayoutDashboard}
                        label="Dashboard"
                        to="/dashboard"
                        active={location.pathname === "/dashboard"}
                    />
                    <SidebarItem
                        icon={Wallet}
                        label="Transactions"
                        to="/details"
                        active={location.pathname === "/details"}
                    />
                    <SidebarItem
                        icon={PieChart}
                        label="Investments"
                        to="/investments"
                        active={location.pathname === "/investments"}
                    />
                    <SidebarItem
                        icon={PieChart}
                        label="Quadrant"
                        to="/quadrant"
                        active={location.pathname === "/quadrant"}
                    />
                </nav>

                <div className="pt-6 border-t border-white/5 space-y-2">
                    <SidebarItem icon={Settings} label="Settings" to="/settings" />
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-danger hover:bg-danger/10 transition-all">
                        <LogOut size={20} />
                        <span className="font-medium">Log Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-72 p-8 overflow-x-hidden">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
