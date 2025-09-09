'use client';

import { useState } from "react";
import Link from "next/link";

export default function StartPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("buy");

  return (
    <section className="section">
      <div className="container grid grid-2">
        <div className="card">
          <h1 style={{marginTop:0}}>Let’s get you started</h1>
          <p style={{color:"var(--muted)"}}>Answer a few questions so we can tailor your experience.</p>

          <div className="grid">
            <div>
              <label className="label">What’s your goal?</label>
              <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
                <button className={"btn " + (goal==='buy'?'':'outline')} onClick={()=>setGoal('buy')}>Buy a home</button>
                <button className={"btn " + (goal==='refi'?'':'outline')} onClick={()=>setGoal('refi')}>Refinance</button>
              </div>
            </div>

            <div>
              <label className="label">Email</label>
              <input className="input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/>
            </div>
            <div>
              <label className="label">Phone (optional)</label>
              <input className="input" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+44 ..."/>
            </div>
            <Link href="/mortgage-calculator" className="btn">Continue</Link>
          </div>
        </div>

        <div className="card">
          <img
            className="media"
            alt="Cozy living room with plants and natural light"
            src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop"
          />
          <div style={{height:12}}/>
          <h3 style={{marginTop:0}}>Why start online?</h3>
          <ul>
            <li>See what you can afford in minutes</li>
            <li>No hard credit check to view options</li>
            <li>Move faster when you find a place you love</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
