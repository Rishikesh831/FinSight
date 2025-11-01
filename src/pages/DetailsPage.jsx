import React, { useState } from "react";

export default function DetailsPage() {
  const [details, setDetails] = useState({
    age: "",
    primaryIncome: "",
    secondaryIncome: "",
    investmentIncome: "",
    otherIncomeSources: "",
    livingExpenses: "",
    transportExpenses: "",
    entertainmentExpenses: "",
    educationOrTraining: "",
    otherExpenses: "",
    assets: "",
    liabilities: "",
    shortTermGoal: "",
    longTermGoal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Details", details);
    alert("Details Submitted Successfully!");
  };

  return (
    <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h1>💼 Your Financial Details</h1>
      <p style={{ color: "#b9bbbe" }}>
        Let’s personalize your profile by breaking down your income, expenses, and goals.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "2rem auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          textAlign: "left",
        }}
      >
        {/* ===== Personal Info ===== */}
        <h2>👤 Personal Info</h2>
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={details.age}
          onChange={handleChange}
        />

        {/* ===== Income Section ===== */}
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

        <label>Other Income Sources</label>
        <input
          type="text"
          name="otherIncomeSources"
          value={details.otherIncomeSources}
          onChange={handleChange}
        />

        {/* ===== Expenses Section ===== */}
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

        {/* ===== Assets & Liabilities ===== */}
        <h2>💰 Assets</h2>
        <input
          type="text"
          name="assets"
          placeholder="List assets (e.g. Car, Stocks...)"
          value={details.assets}
          onChange={handleChange}
        />

        <h2>💳 Liabilities</h2>
        <input
          type="text"
          name="liabilities"
          placeholder="List liabilities (e.g. Loans, Credit Card...)"
          value={details.liabilities}
          onChange={handleChange}
        />

        {/* ===== Goals ===== */}
        <h2>🎯 Goals</h2>
        <label>Short Term Goal</label>
        <input
          type="text"
          name="shortTermGoal"
          value={details.shortTermGoal}
          onChange={handleChange}
        />

        <label>Long Term Goal</label>
        <input
          type="text"
          name="longTermGoal"
          value={details.longTermGoal}
          onChange={handleChange}
        />

        <button className="cta-btn" type="submit" style={{ marginTop: "1rem" }}>
          Save Details
        </button>
      </form>
    </section>
  );
}
