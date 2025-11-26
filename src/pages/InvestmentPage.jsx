import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { TrendingUp, TrendingDown, DollarSign, Bitcoin, Building } from "lucide-react";

const portfolioData = [
    { name: "Stocks", value: 45000, color: "#3b82f6" },
    { name: "Crypto", value: 15000, color: "#f59e0b" },
    { name: "Real Estate", value: 80000, color: "#10b981" },
    { name: "Cash", value: 10000, color: "#64748b" },
];

const assets = [
    { id: 1, name: "Apple Inc. (AAPL)", type: "Stock", price: 175.43, holdings: 10, value: 1754.30, change: "+1.2%" },
    { id: 2, name: "Bitcoin (BTC)", type: "Crypto", price: 42000.00, holdings: 0.25, value: 10500.00, change: "-0.5%" },
    { id: 3, name: "Vanguard S&P 500", type: "ETF", price: 410.20, holdings: 50, value: 20510.00, change: "+0.8%" },
    { id: 4, name: "Rental Property A", type: "Real Estate", price: 80000, holdings: 1, value: 80000, change: "+5.0%" },
];

export default function InvestmentPage() {
    const totalValue = portfolioData.reduce((sum, item) => sum + item.value, 0);

    return (
        <DashboardLayout>
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-text-main">Investment Portfolio</h1>
                    <p className="text-text-muted mt-2">Track and manage your asset allocation.</p>
                </div>

                {/* Portfolio Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Portfolio Allocation</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col md:flex-row items-center gap-8">
                            <div className="h-[250px] w-full md:w-1/2">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={portfolioData}
                                            dataKey="value"
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                        >
                                            {portfolioData.map((entry, index) => (
                                                <Cell key={index} fill={entry.color} stroke="rgba(0,0,0,0)" />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                            itemStyle={{ color: '#f8fafc' }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="w-full md:w-1/2 space-y-4">
                                {portfolioData.map((item) => (
                                    <div key={item.name} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                            <span className="text-text-main font-medium">{item.name}</span>
                                        </div>
                                        <span className="text-text-muted">
                                            {((item.value / totalValue) * 100).toFixed(1)}%
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="space-y-6">
                        <Card>
                            <CardContent className="pt-6">
                                <p className="text-text-muted mb-1">Total Portfolio Value</p>
                                <h2 className="text-4xl font-bold text-text-main mb-2">
                                    ${totalValue.toLocaleString()}
                                </h2>
                                <div className="flex items-center gap-2 text-success bg-success/10 w-fit px-3 py-1 rounded-full">
                                    <TrendingUp size={16} />
                                    <span className="text-sm font-medium">+4.2% (24h)</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                        <DollarSign size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-muted">Top Performer</p>
                                        <p className="font-bold text-text-main">Apple Inc.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-warning/10 text-warning">
                                        <Bitcoin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-muted">Crypto Holdings</p>
                                        <p className="font-bold text-text-main">$15,000</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Assets Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Your Assets</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10 text-left">
                                        <th className="pb-4 text-text-muted font-medium">Asset Name</th>
                                        <th className="pb-4 text-text-muted font-medium">Type</th>
                                        <th className="pb-4 text-text-muted font-medium">Price</th>
                                        <th className="pb-4 text-text-muted font-medium">Holdings</th>
                                        <th className="pb-4 text-text-muted font-medium">Total Value</th>
                                        <th className="pb-4 text-text-muted font-medium">24h Change</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {assets.map((asset) => (
                                        <tr key={asset.id} className="group hover:bg-white/5 transition-colors">
                                            <td className="py-4 font-medium text-text-main">{asset.name}</td>
                                            <td className="py-4">
                                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-text-muted">
                                                    {asset.type}
                                                </span>
                                            </td>
                                            <td className="py-4 text-text-muted">${asset.price.toLocaleString()}</td>
                                            <td className="py-4 text-text-muted">{asset.holdings}</td>
                                            <td className="py-4 font-medium text-text-main">${asset.value.toLocaleString()}</td>
                                            <td className={`py-4 font-medium ${asset.change.startsWith('+') ? 'text-success' : 'text-danger'}`}>
                                                {asset.change}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
