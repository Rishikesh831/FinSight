import { useState, useEffect } from "react";
import "./QuadrantPage.css";

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

  // Simple remark logic
  const remark =
    data.weightedNet > 10000
      ? "Excellent fiscal health 💹"
      : data.weightedNet > 0
      ? "Stable finances 👍"
      : "Be cautious — review expenses ⚠️";

  return (
    <div className="quadrant-container">
      <h2 className="title">Financial Quadrant Overview</h2>

      <div className="quadrant-grid">
        <div className="quadrant income">
          <h3>Income</h3>
          <p>₹{data.income}</p>
        </div>

        <div className="quadrant expense">
          <h3>Expenses</h3>
          <p>₹{data.expense}</p>
        </div>

        <div className="quadrant assets">
          <h3>Assets</h3>
          <p>₹{data.assets}</p>
        </div>

        <div className="quadrant liabilities">
          <h3>Liabilities</h3>
          <p>₹{data.liabilities}</p>
        </div>
      </div>

      <div className="summary-card">
        <h3>Summary</h3>
        <p><strong>Net:</strong> ₹{data.net}</p>
        <p><strong>Weighted Net:</strong> ₹{data.weightedNet}</p>
        <button onClick={handleWeightedNet}>Calculate Weighted Net</button>
        <p className="remark">{remark}</p>
      </div>
    </div>
  );
}
