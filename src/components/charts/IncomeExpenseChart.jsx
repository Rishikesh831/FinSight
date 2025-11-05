import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", income: 12000, expense: 8000 },
  { month: "Feb", income: 13500, expense: 9000 },
  { month: "Mar", income: 14200, expense: 9500 },
];

export default function IncomeExpenseChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid stroke="#222" />
        <XAxis dataKey="month" stroke="#aaa" />
        <YAxis stroke="#aaa" />
        <Tooltip />
        <Line type="monotone" dataKey="income" stroke="#00b4ff" strokeWidth={2} />
        <Line type="monotone" dataKey="expense" stroke="#ff5252" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
