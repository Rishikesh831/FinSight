import { useState, useEffect } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { clsx } from "clsx";

export default function QuadrantPage() {
  const [data, setData] = useState({
    income: 12000,
    expense: 7000,
    assets: 23000.75,
    liabilities: 8000.5,
    net: 0,
    weightedNet: 0,
  });

  useEffect(() => {
    const net = data.income - data.expense;
    setData((prev) => ({ ...prev, net }));
  }, [data.income, data.expense]);

  const handleWeightedNet = () => {
    const weightedNet = data.net + (data.assets - data.liabilities) * 0.1;
    setData((prev) => ({ ...prev, weightedNet }));
  };

  const remark = data.weightedNet > 10000
    ? "Excellent fiscal health 💹"
    : data.weightedNet > 0
      ? "Stable finances 👍"
      : "Be cautious — review expenses ⚠️";

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-text-main">Financial Quadrant</h1>
          <p className="text-text-muted mt-2">A holistic view of your financial standing.</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-12">
          <QuadrantCard
            title="Income"
            value={data.income}
            color="success"
            className="border-t-4 border-t-success"
          />
          <QuadrantCard
            title="Expenses"
            value={data.expense}
            color="danger"
            className="border-t-4 border-t-danger"
          />
          <QuadrantCard
            title="Assets"
            value={data.assets}
            color="primary"
            className="border-t-4 border-t-primary"
          />
          <QuadrantCard
            title="Liabilities"
            value={data.liabilities}
            color="warning"
            className="border-t-4 border-t-warning"
          />
        </div>

        <Card className="max-w-2xl mx-auto text-center bg-surface/30">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-text-main mb-6">Net Worth Analysis</h3>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-text-muted mb-1">Net Flow</p>
                <p className="text-3xl font-bold text-primary">₹{data.net.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-text-muted mb-1">Weighted Net</p>
                <p className="text-3xl font-bold text-accent">₹{data.weightedNet.toLocaleString()}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-6">
              <p className="text-lg font-medium text-text-main">{remark}</p>
            </div>

            <Button onClick={handleWeightedNet} size="lg">
              Recalculate Metrics
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

const QuadrantCard = ({ title, value, color, className }) => (
  <Card className={clsx("hover:-translate-y-1 transition-transform duration-300", className)}>
    <CardContent className="pt-6 text-center">
      <h3 className="text-text-muted uppercase tracking-wider text-sm font-semibold mb-2">{title}</h3>
      <p className={clsx("text-3xl font-bold", {
        "text-success": color === "success",
        "text-danger": color === "danger",
        "text-primary": color === "primary",
        "text-warning": color === "warning",
      })}>
        ₹{value.toLocaleString()}
      </p>
    </CardContent>
  </Card>
);
