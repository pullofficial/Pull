"use client";

import { useState } from "react";
export default function ProfilePage(){
 const [name,setName]=useState(""); const [city,setCity]=useState(""); const [country,setCountry]=useState("Nigeria"); const [bio,setBio]=useState(""); const [intent,setIntent]=useState("Casual dating"); const [interests,setInterests]=useState<string[]>([]);
 const choices=["Travel","Music","Food","Fitness","Movies","Art","Reading","Photography","Sports","Nature"];
 return <main className="container" style={{maxWidth:720,padding:"42px 0 70px"}}><a href="/discover">← Back to discovery</a><div className="feature" style={{marginTop:22}}><span className="pill" style={{color:"#a12b53",fontWeight:800}}>PROFILE BUILDER · PREVIEW</span><h1 className="serif" style={{fontSize:44,color:"#641b3b"}}>Create your introduction.</h1><p className="muted">This is a local preview only. Your details are not saved or sent anywhere.</p>
 <div style={{display:"grid",gap:16,marginTop:24}}>
  <label style={{display:"grid",gap:7,fontWeight:700}}>Display name<input className="field" value={name} onChange={e=>setName(e.target.value)} maxLength={40} placeholder="What should people call you?"/></label>
  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}><label style={{display:"grid",gap:7,fontWeight:700}}>City<input className="field" value={city} onChange={e=>setCity(e.target.value)} placeholder="City"/></label><label style={{display:"grid",gap:7,fontWeight:700}}>Country<select className="field" value={country} onChange={e=>setCountry(e.target.value)}>{["Nigeria","United States","United Kingdom","Canada","Germany","France","Portugal","Spain","Netherlands","Australia","South Africa"].map(c=><option key={c}>{c}</option>)}</select></label></div>
  <label style={{display:"grid",gap:7,fontWeight:700}}>A little about you<textarea className="field" rows={4} maxLength={300} value={bio} onChange={e=>setBio(e.target.value)} placeholder="Share a little about your personality and interests."/></label>
  <label style={{display:"grid",gap:7,fontWeight:700}}>Your intention<select className="field" value={intent} onChange={e=>setIntent(e.target.value)}><option>Casual dating</option><option>Meet new people</option><option>Meaningful connection</option></select></label>
  <div><strong>Choose interests</strong><div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:10}}>{choices.map(c=><button key={c} type="button" onClick={()=>setInterests(v=>v.includes(c)?v.filter(x=>x!==c):[...v,c])} className="pill" style={{cursor:"pointer",borderColor:interests.includes(c)?"#f43f70":"#f4c8d5",background:interests.includes(c)?"#ffe6ed":"#fff8fa"}}>{interests.includes(c)?"✓ ":""}{c}</button>)}</div></div>
  <div className="feature" style={{background:"#fff8fa"}}><strong>Preview</strong><h2 className="serif" style={{color:"#641b3b",marginBottom:5}}>{name||"Your name"}{city?", "+city:""}</h2><p className="muted">{country} · {intent}</p><p>{bio||"Your introduction will appear here."}</p><p className="muted" style={{fontSize:13}}>{interests.join(" · ")||"Your interests will appear here."}</p></div>
  <p className="muted" style={{fontSize:12}}>Save is disabled until secure accounts, privacy controls and adult age assurance are implemented.</p>
  <button className="btn btn-primary" disabled style={{opacity:.55}}>Save profile — coming later</button>
 </div></div></main>
}
