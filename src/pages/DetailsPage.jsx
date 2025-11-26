import React, { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Input, Label } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Plus, Trash2, Save } from "lucide-react";

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
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-main">Financial Profile</h1>
          <p className="text-text-muted mt-2">Update your personal details, income sources, and assets.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Info */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div>
                <Label>Age</Label>
                <Input
                  type="number"
                  name="age"
                  value={details.age}
                  onChange={handleChange}
                  placeholder="e.g. 28"
                />
              </div>
              <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                <div>
                  <Label>Short Term Goals</Label>
                  <Input
                    name="shortTermGoals"
                    value={details.shortTermGoals}
                    onChange={handleChange}
                    placeholder="e.g. Buy a car"
                  />
                </div>
                <div>
                  <Label>Long Term Goals</Label>
                  <Input
                    name="longTermGoals"
                    value={details.longTermGoals}
                    onChange={handleChange}
                    placeholder="e.g. Retirement"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Income & Expenses Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-success">Income Sources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Primary Income</Label>
                  <Input
                    type="number"
                    name="primaryIncome"
                    value={details.primaryIncome}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Side Hustles</Label>
                  <Input
                    type="number"
                    name="secondaryIncome"
                    value={details.secondaryIncome}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Investments</Label>
                  <Input
                    type="number"
                    name="investmentIncome"
                    value={details.investmentIncome}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-danger">Monthly Expenses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Living (Rent/Food)</Label>
                  <Input
                    type="number"
                    name="livingExpenses"
                    value={details.livingExpenses}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Transport</Label>
                  <Input
                    type="number"
                    name="transportExpenses"
                    value={details.transportExpenses}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Entertainment</Label>
                  <Input
                    type="number"
                    name="entertainmentExpenses"
                    value={details.entertainmentExpenses}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Assets */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Assets & Holdings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6 items-end">
                <div className="flex-1">
                  <Label>Asset Name</Label>
                  <Input
                    value={asset.name}
                    onChange={(e) => setAsset({ ...asset, name: e.target.value })}
                    placeholder="e.g. Stock Portfolio"
                  />
                </div>
                <div className="w-32">
                  <Label>Value</Label>
                  <Input
                    type="number"
                    value={asset.buyingPrice}
                    onChange={(e) => setAsset({ ...asset, buyingPrice: e.target.value })}
                    placeholder="0.00"
                  />
                </div>
                <Button type="button" onClick={handleAddAsset} size="icon">
                  <Plus size={20} />
                </Button>
              </div>

              <div className="space-y-2">
                {assets.map((a, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                    <span className="font-medium">{a.name}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-success font-mono">₹{a.buyingPrice}</span>
                      <button type="button" className="text-text-muted hover:text-danger">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
                {assets.length === 0 && (
                  <p className="text-center text-text-muted py-4">No assets added yet.</p>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end pt-4">
            <Button type="submit" size="lg" className="w-full md:w-auto">
              <Save className="mr-2 h-4 w-4" />
              Save Profile
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
