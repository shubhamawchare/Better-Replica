"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(5);
  const [termYears, setTermYears] = useState(30);
  const [taxes, setTaxes] = useState(265);
  const [insurance, setInsurance] = useState(100);
  const [monthly, setMonthly] = useState(0);
  const searchParams = useSearchParams();

  // Read URL presets on first render
  useEffect(() => {
    if (!searchParams) return;
    const getNum = (key: string) => {
      const v = searchParams.get(key);
      if (v === null) return undefined;
      const n = Number(v);
      return Number.isFinite(n) ? n : undefined;
    };

    const hp = getNum("homePrice");
    const dp = getNum("downPct");
    const r = getNum("rate");
    const termA = getNum("term");
    const termB = getNum("termYears");
    const tx = getNum("taxes");
    const ins = getNum("insurance");

    if (typeof hp === "number") setHomePrice(hp);
    if (typeof dp === "number") setDownPct(dp);
    if (typeof r === "number") setRate(r);
    if (typeof termA === "number") setTermYears(termA);
    else if (typeof termB === "number") setTermYears(termB);
    if (typeof tx === "number") setTaxes(tx);
    if (typeof ins === "number") setInsurance(ins);
    // zip is accepted but not used in calculation; kept for compatibility
  }, [searchParams]);

  useEffect(() => {
    const loanAmount = homePrice * (1 - downPct / 100);
    const monthlyRate = rate / 100 / 12;
    const n = termYears * 12;

    const payment =
      (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));

    setMonthly(payment + taxes + insurance);
  }, [homePrice, downPct, rate, termYears, taxes, insurance]);

  return (
    <section className="section">
      <div className="container grid grid-2">
        <div className="card" style={{display:'grid', gap:12}}>
          <h1 style={{ marginTop: 0 }}>Mortgage calculator</h1>
          <div>
            <label className="label">Home Price</label>
            <input className="input" type="number" value={homePrice} onChange={(e) => setHomePrice(+e.target.value)} />
          </div>
          <div className="grid grid-2">
            <div>
              <label className="label">Down Payment (%)</label>
              <input className="input" type="number" value={downPct} onChange={(e) => setDownPct(+e.target.value)} />
            </div>
            <div>
              <label className="label">Interest Rate (%)</label>
              <input className="input" type="number" step="0.01" value={rate} onChange={(e) => setRate(+e.target.value)} />
            </div>
          </div>
          <div className="grid grid-2">
            <div>
              <label className="label">Term (years)</label>
              <input className="input" type="number" value={termYears} onChange={(e) => setTermYears(+e.target.value)} />
            </div>
            <div>
              <label className="label">Taxes (monthly)</label>
              <input className="input" type="number" value={taxes} onChange={(e) => setTaxes(+e.target.value)} />
            </div>
          </div>
          <div>
            <label className="label">Insurance (monthly)</label>
            <input className="input" type="number" value={insurance} onChange={(e) => setInsurance(+e.target.value)} />
          </div>
        </div>

        <div className="card accent-border" style={{display:'grid', gap:8, alignContent:'start'}}>
          <div className="label">Estimated monthly payment</div>
          <div className="kpi">${monthly.toFixed(2)}</div>
          <p style={{color:'var(--muted)'}}>Includes principal & interest, plus your taxes and insurance inputs.</p>
        </div>
      </div>
    </section>
  );
}
