import Link from "next/link";

export const metadata = { title: "Better – Home", description: "Mortgages made simple. Get pre-approved, compare rates, and estimate your monthly payment." };

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container section" style={{display:'grid', gap:24}}>
          <div style={{display:'grid', gap:16, maxWidth:820}}>
            <h1>Mortgages made simple.</h1>
            <p>Get pre-approved in minutes, compare options without hard credit checks, and move fast when you find the home you love.</p>
            <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
              <Link href="/start" className="btn gradient">Get started</Link>
              <Link href="/mortgage-calculator" className="btn ghost">Calculate payment</Link>
            </div>
          </div>
          <img
            className="media"
            alt="Happy couple reviewing mortgage documents on a tablet"
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop"
            style={{maxHeight:420}}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <div className="card">
              <div className="label">Pre-approval</div>
              <div className="kpi">In minutes</div>
              <p style={{color:'var(--muted)'}}>Check your buying power online without affecting your credit score.</p>
            </div>
            <div className="card">
              <div className="label">Support</div>
              <div className="kpi">7 days</div>
              <p style={{color:'var(--muted)'}}>Real humans and modern tech to guide you at every step.</p>
            </div>
            <div className="card">
              <div className="label">Rates</div>
              <div className="kpi">Transparent</div>
              <p style={{color:'var(--muted)'}}>Shop personalized rates and terms with zero pressure.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--bg-alt)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)'}}>
        <div className="container grid grid-2">
          <div className="card">
            <h3 style={{marginTop:0}}>First-time buyer?</h3>
            <p style={{color:'var(--muted)'}}>Answer a few questions and we’ll tailor your experience with tips and next steps.</p>
            <Link href="/start" className="btn">Start now</Link>
          </div>
          <div className="card">
            <h3 style={{marginTop:0}}>Just exploring?</h3>
            <p style={{color:'var(--muted)'}}>Use our calculator to estimate payments with taxes and insurance included.</p>
            <Link href="/mortgage-calculator?taxes=265&rate=5&term=30&homePrice=300000&downPct=20" className="btn outline">Try calculator</Link>
          </div>
        </div>
      </section>
    </>
  );
}
