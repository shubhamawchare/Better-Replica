export default function Footer() {
  return (
    <footer style={{borderTop:'1px solid var(--border)'}}>
      <div className="container section" style={{display:'grid', gap:12}}>
        <div style={{color:'var(--muted)'}}>
          © {new Date().getFullYear()} Better Replica Website.
        </div>
      </div>
    </footer>
  );
}
