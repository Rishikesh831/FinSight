import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./DashboardPage.css";

export default function DashboardPage() {
  const data = [
    { month: "Jan", income: 12000, expense: 8000 },
    { month: "Feb", income: 15000, expense: 9000 },
    { month: "Mar", income: 13000, expense: 8500 },
    { month: "Apr", income: 16000, expense: 9500 },
  ];

  const netIncome = data[data.length - 1].income - data[data.length - 1].expense;
  const savingsRate = ((netIncome / data[data.length - 1].income) * 100).toFixed(1);

  return (
    <div className="dashboard-container">
      <h2>📊 Financial Dashboard</h2>

      <div className="stats-grid">
        <div className="card">
          <h3>Current Income</h3>
          <p>₹{data[data.length - 1].income.toLocaleString()}</p>
        </div>
        <div className="card">
          <h3>Current Expense</h3>
          <p>₹{data[data.length - 1].expense.toLocaleString()}</p>
        </div>
        <div className="card">
          <h3>Net Income</h3>
          <p>₹{netIncome.toLocaleString()}</p>
        </div>
        <div className="card">
          <h3>Savings Rate</h3>
          <p>{savingsRate}%</p>
        </div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="month" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip
              contentStyle={{ backgroundColor: "#161b22", border: "none", color: "#fff" }}
            />
            <Line type="monotone" dataKey="income" stroke="#00b4ff" strokeWidth={3} />
            <Line type="monotone" dataKey="expense" stroke="#ff4d4d" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
