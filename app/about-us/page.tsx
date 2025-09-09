export const metadata = {
  title: "About Us – Better Replica",
  description: "Learn about the mission and values of this Better.com-inspired project.",
};

export default function AboutUs() {
  return (
    <section className="section">
      <div className="container grid grid-2">
        <div>
          <h1>About Better</h1>
          <p style={{color:"var(--muted)"}}>
            We’re on a mission to make homeownership simpler, faster, and more accessible for everyone.
            We combine modern technology with real human help to deliver a mortgage experience that feels—well—better.
          </p>
          <div className="grid grid-3" style={{marginTop:24}}>
            <div className="card"><div className="label">Founded</div><div className="kpi">2016</div></div>
            <div className="card"><div className="label">Customers served</div><div className="kpi">+750k</div></div>
            <div className="card"><div className="label">Team</div><div className="kpi">Remote-first</div></div>
          </div>
        </div>
        <div className="card">
          <img
            className="media"
            alt="Modern office lounge with warm lighting"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
          />
          <div style={{height:12}}/>
          <h3 style={{marginTop:0}}>What we value</h3>
          <ul>
            <li>Transparency over jargon</li>
            <li>Speed without the pressure</li>
            <li>Technology that empowers</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
