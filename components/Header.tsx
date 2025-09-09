'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{position:'sticky', top:0, zIndex:20, background:'#fff', borderBottom:'1px solid var(--border)'}}>
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', height:64}}>
        <Link href="/" aria-label="Go to home" style={{display:'flex', alignItems:'center', gap:10}}>
          <div style={{width:26, height:26, borderRadius:6, background:'var(--brand)'}}/>
          <strong>Better</strong>
        </Link>
        <nav aria-label="Main">
          <button
            className="btn outline"
            onClick={()=>setOpen(v=>!v)}
            aria-expanded={open}
            aria-haspopup="true"
            style={{display:'inline-flex'}}
          >
            Menu
          </button>
          {open && (
            <div className="card" role="menu" style={{position:'absolute', right:16, top:64, width:260}}>
              <div style={{display:'grid', gap:8}}>
                <Link href="/" onClick={()=>setOpen(false)} role="menuitem">Home</Link>
                <Link href="/about-us" onClick={()=>setOpen(false)} role="menuitem">About us</Link>
                <Link href="/mortgage-calculator" onClick={()=>setOpen(false)} role="menuitem">Mortgage calculator</Link>
                <Link href="/start" onClick={()=>setOpen(false)} role="menuitem">Start</Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
