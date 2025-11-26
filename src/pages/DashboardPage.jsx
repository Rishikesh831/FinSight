import React, { useMemo } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
  Sankey,
} from "recharts";
import { ArrowUpRight, ArrowDownRight, DollarSign, Wallet, TrendingUp } from "lucide-react";

// === Mock Data ===
const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 1398 },
  { name: "Mar", income: 5000, expense: 2000 },
  { name: "Apr", income: 4780, expense: 3908 },
  { name: "May", income: 5890, expense: 4800 },
  { name: "Jun", income: 6390, expense: 3800 },
  { name: "Jul", income: 7490, expense: 4300 },
];

const pieData = [
  { name: "Rent", value: 400 },
  { name: "Groceries", value: 300 },
  { name: "Utilities", value: 200 },
  { name: "Leisure", value: 100 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

const sankeyData = {
  nodes: [
    { name: "Salary" },
    { name: "Freelancing" },
    { name: "Investments" },
    { name: "Rent" },
    { name: "Groceries" },
    { name: "Utilities" },
    { name: "Entertainment" },
    { name: "Savings" },
    { name: "Emergency Fund" },
  ],
  links: [
    { source: 0, target: 3, value: 2500 },
    { source: 0, target: 4, value: 800 },
    { source: 0, target: 5, value: 400 },
    { source: 0, target: 6, value: 600 },
    { source: 0, target: 7, value: 1200 },
    { source: 1, target: 4, value: 400 },
    { source: 1, target: 7, value: 600 },
    { source: 2, target: 8, value: 1000 },
    { source: 2, target: 7, value: 800 },
  ],
};

const StatCard = ({ title, value, trend, trendValue, icon: Icon, colorClass }) => (
  <Card>
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-text-muted">{title}</p>
        <h3 className="text-2xl font-bold mt-2 text-text-main">{value}</h3>
      </div>
      <div className={`p-3 rounded-xl bg-white/5 ${colorClass}`}>
        <Icon size={20} />
      </div>
    </div>
    <div className="mt-4 flex items-center gap-2">
      {trend === "up" ? (
        <ArrowUpRight size={16} className="text-success" />
      ) : (
        <ArrowDownRight size={16} className="text-danger" />
      )}
      <span className={trend === "up" ? "text-success text-sm" : "text-danger text-sm"}>
        {trendValue}
      </span>
      <span className="text-text-muted text-sm">vs last month</span>
    </div>
  </Card>
);

const DashboardPage = () => {
  const avgIncome = useMemo(
    () => data.reduce((sum, d) => sum + d.income, 0) / data.length,
    []
  );
  const avgExpense = useMemo(
    () => data.reduce((sum, d) => sum + d.expense, 0) / data.length,
    []
  );
  const netFlow = avgIncome - avgExpense;

  let runningTotal = 0;
  const cumulativeData = data.map((d) => {
    runningTotal += d.income - d.expense;
    return { ...d, total: runningTotal };
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-text-main">Financial Overview</h1>
          <p className="text-text-muted mt-2">Welcome back! Here's your financial health report.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Monthly Income"
            value={`$${avgIncome.toFixed(0)}`}
            trend="up"
            trendValue="+12.5%"
            icon={DollarSign}
            colorClass="text-success"
          />
          <StatCard
            title="Total Expenses"
            value={`$${avgExpense.toFixed(0)}`}
            trend="down"
            trendValue="-2.4%"
            icon={Wallet}
            colorClass="text-danger"
          />
          <StatCard
            title="Net Savings"
            value={`$${netFlow.toFixed(0)}`}
            trend="up"
            trendValue="+8.2%"
            icon={TrendingUp}
            colorClass="text-primary"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Income vs Expense Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                    <XAxis dataKey="name" stroke="#94a3b8" axisLine={false} tickLine={false} dy={10} />
                    <YAxis stroke="#94a3b8" axisLine={false} tickLine={false} dx={-10} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                      itemStyle={{ color: '#f8fafc' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: "#1e293b", strokeWidth: 2 }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={3} dot={{ r: 4, fill: "#1e293b", strokeWidth: 2 }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Expense Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} stroke="rgba(0,0,0,0)" />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      itemStyle={{ color: '#f8fafc' }}
                    />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cumulative Wealth Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={cumulativeData}>
                    <defs>
                      <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                    <XAxis dataKey="name" stroke="#94a3b8" axisLine={false} tickLine={false} dy={10} />
                    <YAxis stroke="#94a3b8" axisLine={false} tickLine={false} dx={-10} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      itemStyle={{ color: '#f8fafc' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="total"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorTotal)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Cash Flow Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <Sankey
                    data={sankeyData}
                    nodePadding={50}
                    nodeWidth={20}
                    linkCurvature={0.5}
                    link={{ stroke: '#3b82f6', strokeOpacity: 0.2 }}
                    node={{
                      stroke: 'transparent',
                      fill: '#3b82f6',
                      width: 20,
                    }}
                  >
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      itemStyle={{ color: '#f8fafc' }}
                    />
                  </Sankey>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
