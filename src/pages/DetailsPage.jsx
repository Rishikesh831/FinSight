import React, { useState } from "react";
import "./DetailsPage.css";

export default function DetailsPage() {
  const [details, setDetails] = useState({
    primaryIncome: "",
    secondaryIncome: "",
    investmentIncome: "",
    otherIncomeSources: "",
    livingExpenses: "",
    transportExpenses: "",
    entertainmentExpenses: "",
    educationOrTraining: "",
    otherExpenses: "",
    age: "",
    shortTermGoals: "",
    longTermGoals: "",
  });

  const [assets, setAssets] = useState([]);
  const [liabilities, setLiabilities] = useState([]);
  const [asset, setAsset] = useState({ name: "", buyingPrice: "", yearsOld: "" });
  const [liability, setLiability] = useState({ name: "", amount: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAsset = () => {
    if (asset.name && asset.buyingPrice) {
      setAssets([...assets, asset]);
      setAsset({ name: "", buyingPrice: "", yearsOld: "" });
    }
  };

  const handleAddLiability = () => {
    if (liability.name && liability.amount) {
      setLiabilities([...liabilities, liability]);
      setLiability({ name: "", amount: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Details", { ...details, assets, liabilities });
    alert("Details Saved Successfully!");
  };

  return (
    <section className="details-section">
      <h1>💼 Your Financial Details</h1>
      <p>Let’s personalize your profile with your income, expenses, and holdings.</p>

      <form onSubmit={handleSubmit} className="details-form">
        {/* ====== Age & Goals ====== */}
        <div className="section-card">
          <h2>🧍 Personal Info</h2>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={details.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />

          <label>Short Term Goals</label>
          <input
            type="text"
            name="shortTermGoals"
            value={details.shortTermGoals}
            onChange={handleChange}
            placeholder="e.g. Buy a car, travel fund"
          />

          <label>Long Term Goals</label>
          <input
            type="text"
            name="longTermGoals"
            value={details.longTermGoals}
            onChange={handleChange}
            placeholder="e.g. Retirement, house purchase"
          />
        </div>

        {/* ====== Income Section ====== */}
        <div className="section-card">
          <h2>🏦 Income</h2>
          <label>Primary Income (Salary / Business)</label>
          <input
            type="number"
            name="primaryIncome"
            value={details.primaryIncome}
            onChange={handleChange}
          />

          <label>Side Hustles & Projects</label>
          <input
            type="number"
            name="secondaryIncome"
            value={details.secondaryIncome}
            onChange={handleChange}
          />

          <label>Investment / Rental Income</label>
          <input
            type="number"
            name="investmentIncome"
            value={details.investmentIncome}
            onChange={handleChange}
          />

          <label>Other Income Sources (Describe)</label>
          <input
            type="text"
            name="otherIncomeSources"
            value={details.otherIncomeSources}
            onChange={handleChange}
          />
        </div>

        {/* ====== Expense Section ====== */}
        <div className="section-card">
          <h2>💸 Expenses</h2>
          <label>Living Expenses (Rent, Food, etc.)</label>
          <input
            type="number"
            name="livingExpenses"
            value={details.livingExpenses}
            onChange={handleChange}
          />

          <label>Transport & Commute</label>
          <input
            type="number"
            name="transportExpenses"
            value={details.transportExpenses}
            onChange={handleChange}
          />

          <label>Entertainment & Leisure</label>
          <input
            type="number"
            name="entertainmentExpenses"
            value={details.entertainmentExpenses}
            onChange={handleChange}
          />

          <label>Education / Training</label>
          <input
            type="number"
            name="educationOrTraining"
            value={details.educationOrTraining}
            onChange={handleChange}
          />

          <label>Other Expenses</label>
          <input
            type="number"
            name="otherExpenses"
            value={details.otherExpenses}
            onChange={handleChange}
          />
        </div>

        {/* ====== Assets ====== */}
        <div className="section-card">
          <h2>💰 Assets</h2>
          <div className="dual-form">
            <input
              type="text"
              placeholder="Asset Name"
              value={asset.name}
              onChange={(e) => setAsset({ ...asset, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Buying Price"
              value={asset.buyingPrice}
              onChange={(e) => setAsset({ ...asset, buyingPrice: e.target.value })}
            />
            <input
              type="number"
              placeholder="Years Old"
              value={asset.yearsOld}
              onChange={(e) => setAsset({ ...asset, yearsOld: e.target.value })}
            />
            <button type="button" onClick={handleAddAsset}>
              Add
            </button>
          </div>

          <ul>
            {assets.map((a, i) => (
              <li key={i}>
                {a.name} — ₹{a.buyingPrice} ({a.yearsOld} yrs)
              </li>
            ))}
          </ul>
        </div>

        {/* ====== Liabilities ====== */}
        <div className="section-card">
          <h2>💳 Liabilities</h2>
          <div className="dual-form">
            <input
              type="text"
              placeholder="Liability Name"
              value={liability.name}
              onChange={(e) => setLiability({ ...liability, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Amount"
              value={liability.amount}
              onChange={(e) => setLiability({ ...liability, amount: e.target.value })}
            />
            <button type="button" onClick={handleAddLiability}>
              Add
            </button>
          </div>

          <ul>
            {liabilities.map((l, i) => (
              <li key={i}>
                {l.name} — ₹{l.amount}
              </li>
            ))}
          </ul>
        </div>

        {/* ====== Submit ====== */}
        <button type="submit" className="cta-btn">
          Save Details
        </button>
      </form>
    </section>
  );
}
