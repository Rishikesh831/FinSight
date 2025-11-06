import React, { useMemo } from "react";
import "./DashboardPage.css";
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

const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#0088FE"];

// === Enhanced Sankey Data ===
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

  // ✅ Proper cumulative computation
  let runningTotal = 0;
  const cumulativeData = data.map((d) => {
    runningTotal += d.income - d.expense;
    return { ...d, total: runningTotal };
  });

  return (
    <div className="dashboard-container">
      {/* === Summary Cards === */}
      <div className="cards-section">
        <div className="card">
          <h2>Monthly Income</h2>
          <p>${avgIncome.toFixed(0)}</p>
        </div>
        <div className="card">
          <h2>Expenses</h2>
          <p>${avgExpense.toFixed(0)}</p>
        </div>
        <div className="card">
          <h2>Savings</h2>
          <p>${netFlow.toFixed(0)}</p>
        </div>
      </div>

      {/* === Charts Section === */}
      <div className="charts-grid">
        {/* 1️⃣ Income vs Expense */}
        <div className="chart-card">
          <h3>Income vs Expense</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#00C49F" />
              <Line type="monotone" dataKey="expense" stroke="#FF8042" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 2️⃣ Expense Breakdown */}
        <div className="chart-card">
          <h3>Expense Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 3️⃣ Cumulative Cash Flow */}
        <div className="chart-card">
          <h3>Cumulative Cash Flow</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={cumulativeData}>
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00C49F" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#00C49F" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="total"
                stroke="#00C49F"
                fillOpacity={1}
                fill="url(#colorTotal)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 4️⃣ Sankey Flow */}
        <div className="chart-card">
          <h3>Cash Flow Distribution</h3>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
            <p style={{ color: "#888", fontSize: "0.9rem" }}>Income Sources</p>
            <p style={{ color: "#888", fontSize: "0.9rem" }}>Expenses & Savings</p>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <Sankey
              data={sankeyData}
              nodePadding={40}
              nodeWidth={15}
              linkCurvature={0.5}
              link={{ strokeOpacity: 0.3 }}
              node={{
                stroke: "#1e293b",
                fill: "#06b6d4",
                strokeWidth: 1.5,
              }}
            >
              <Tooltip />
            </Sankey>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
