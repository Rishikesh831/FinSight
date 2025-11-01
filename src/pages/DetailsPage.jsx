import React, { useState } from "react";

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
    assets: [{ product: "", buyingPrice: "", yearsOld: "" }],
    liabilities: [{ product: "", amount: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  // handle change inside assets/liabilities
  const handleNestedChange = (index, section, field, value) => {
    const updated = [...details[section]];
    updated[index][field] = value;
    setDetails({ ...details, [section]: updated });
  };

  const addField = (section) => {
    const newField =
      section === "assets"
        ? { product: "", buyingPrice: "", yearsOld: "" }
        : { product: "", amount: "" };
    setDetails({ ...details, [section]: [...details[section], newField] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Details:", details);
    alert("Details Submitted Successfully!");
  };

  return (
    <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h1>💼 Your Financial Details</h1>
      <p style={{ color: "#b9bbbe" }}>
        Let’s personalize your profile by breaking down your income, expenses, and holdings.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "800px",
          margin: "2rem auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          textAlign: "left",
        }}
      >
        {/* ===== Income Section ===== */}
        <h2>🏦 Income</h2>
        <label>Primary Income (Salary / Business)</label>
        <input type="number" name="primaryIncome" value={details.primaryIncome} onChange={handleChange} />

        <label>Side Hustles & Projects</label>
        <input type="number" name="secondaryIncome" value={details.secondaryIncome} onChange={handleChange} />

        <label>Investment / Rental Income</label>
        <input type="number" name="investmentIncome" value={details.investmentIncome} onChange={handleChange} />

        <label>Other Income Sources</label>
        <input type="text" name="otherIncomeSources" value={details.otherIncomeSources} onChange={handleChange} />

        {/* ===== Expenses Section ===== */}
        <h2>💸 Expenses</h2>
        <label>Living Expenses</label>
        <input type="number" name="livingExpenses" value={details.livingExpenses} onChange={handleChange} />

        <label>Transport & Commute</label>
        <input type="number" name="transportExpenses" value={details.transportExpenses} onChange={handleChange} />

        <label>Entertainment & Leisure</label>
        <input type="number" name="entertainmentExpenses" value={details.entertainmentExpenses} onChange={handleChange} />

        <label>Education / Training</label>
        <input type="number" name="educationOrTraining" value={details.educationOrTraining} onChange={handleChange} />

        <label>Other Expenses</label>
        <input type="number" name="otherExpenses" value={details.otherExpenses} onChange={handleChange} />

        {/* ===== Assets & Liabilities ===== */}
        <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
          {/* ===== Assets ===== */}
          <div style={{ flex: 1 }}>
            <h2>💰 Assets</h2>
            {details.assets.map((asset, index) => (
              <div key={index} style={{ marginBottom: "1rem" }}>
                <input
                  type="text"
                  placeholder="Product"
                  value={asset.product}
                  onChange={(e) =>
                    handleNestedChange(index, "assets", "product", e.target.value)
                  }
                  style={{ width: "30%", marginRight: "1rem" }}
                />
                <input
                  type="number"
                  placeholder="Buying Price"
                  value={asset.buyingPrice}
                  onChange={(e) =>
                    handleNestedChange(index, "assets", "buyingPrice", e.target.value)
                  }
                  style={{ width: "30%", marginRight: "1rem" }}
                />
                <input
                  type="number"
                  placeholder="Years Old"
                  value={asset.yearsOld}
                  onChange={(e) =>
                    handleNestedChange(index, "assets", "yearsOld", e.target.value)
                  }
                  style={{ width: "30%" }}
                />
              </div>
            ))}
            <button
              type="button"
              className="cta-btn"
              onClick={() => addField("assets")}
            >
              + Add Asset
            </button>
          </div>

          {/* ===== Liabilities ===== */}
          <div style={{ flex: 1 }}>
            <h2>💳 Liabilities</h2>
            {details.liabilities.map((liab, index) => (
              <div key={index} style={{ marginBottom: "1rem" }}>
                <input
                  type="text"
                  placeholder="Liability"
                  value={liab.product}
                  onChange={(e) =>
                    handleNestedChange(index, "liabilities", "product", e.target.value)
                  }
                  style={{ width: "50%", marginRight: "1rem" }}
                />
                <input
                  type="number"
                  placeholder="Amount"
                  value={liab.amount}
                  onChange={(e) =>
                    handleNestedChange(index, "liabilities", "amount", e.target.value)
                  }
                  style={{ width: "40%" }}
                />
              </div>
            ))}
            <button
              type="button"
              className="cta-btn"
              onClick={() => addField("liabilities")}
            >
              + Add Liability
            </button>
          </div>
        </div>

        {/* ===== Submit ===== */}
        <button className="cta-btn" type="submit" style={{ marginTop: "2rem" }}>
          Save Details
        </button>
      </form>
    </section>
  );
}
