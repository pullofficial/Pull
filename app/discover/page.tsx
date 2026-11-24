"use client";

import { useMemo, useState } from "react";

type Profile = { id:number; name:string; age:number; city:string; country:string; intent:string; interests:string[]; color:string; bio:string };
const demoProfiles: Profile[] = [
  {id:1,name:"Amara",age:27,city:"London",country:"United Kingdom",intent:"Casual dating",interests:["Travel","Live music","Food"],color:"linear-gradient(145deg,#f6a8bd,#8b365e)",bio:"Here for good energy, honest conversations and spontaneous plans."},
  {id:2,name:"Daniel",age:30,city:"Toronto",country:"Canada",intent:"Meet new people",interests:["Fitness","Movies","Coffee"],color:"linear-gradient(145deg,#f2c3a6,#9b536b)",bio:"Easygoing, curious and always looking for a new place to explore."},
  {id:3,name:"Zara",age:25,city:"Lagos",country:"Nigeria",intent:"Casual dating",interests:["Art","Afrobeats","Brunch"],color:"linear-gradient(145deg,#f4b4c5,#70334f)",bio:"Big on laughter, music and people who say what they mean."},
  {id:4,name:"Alex",age:29,city:"New York",country:"United States",intent:"Meaningful connection",interests:["Books","Cooking","Hiking"],color:"linear-gradient(145deg,#e9b7c7,#60304a)",bio:"Looking to meet someone kind, thoughtful and adventurous."},
  {id:5,name:"Sofia",age:28,city:"Lisbon",country:"Portugal",intent:"Meet new people",interests:["Beach days","Photography","Dancing"],color:"linear-gradient(145deg,#f4c1a5,#994b66)",bio:"Collecting passport stamps, playlists and lovely memories."},
  {id:6,name:"Noah",age:31,city:"Berlin",country:"Germany",intent:"Casual dating",interests:["Design","Cycling","Coffee"],color:"linear-gradient(145deg,#e7a9bd,#62324d)",bio:"Creative, active and happiest discovering a new city."}
];

export default function DiscoverPage(){
 const [country,setCountry]=useState("All countries");
 const [intent,setIntent]=useState("Any intention");
 const [liked,setLiked]=useState<number[]>([]);
 const profiles=useMemo(()=>demoProfiles.filter(p=>(country==="All countries"||p.country===country)&&(intent==="Any intention"||p.intent===intent)),[country,intent]);
 return <main className="container" style={{padding:"36px 0 70px"}}>
  <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:16,flexWrap:"wrap",marginBottom:34}}>
   <a href="/" style={{fontSize:27,fontWeight:900,color:"#641b3b"}}>pull<span style={{color:"#f43f70"}}>👙</span></a>
   <nav style={{display:"flex",gap:18,fontWeight:700,fontSize:14}}><a href="/profile">My profile</a><a href="/safety">Safety</a><a href="/login">Log in</a></nav>
  </header>
  <div style={{marginBottom:25}}><span className="pill" style={{color:"#a12b53",fontWeight:800}}>DISCOVER · DEMO PREVIEW</span><h1 className="serif" style={{fontSize:48,color:"#4a1830",margin:"18px 0 8px"}}>Find your kind of connection.</h1><p className="muted">Explore fictional sample profiles from around the world. Real member discovery is not active yet.</p></div>
  <section className="feature" style={{display:"flex",gap:14,flexWrap:"wrap",alignItems:"end",marginBottom:25}}>
   <label style={{display:"grid",gap:7,fontWeight:700,fontSize:13}}>Country<select className="field" value={country} onChange={e=>setCountry(e.target.value)}><option>All countries</option>{Array.from(new Set(demoProfiles.map(p=>p.country))).sort().map(c=><option key={c}>{c}</option>)}</select></label>
   <label style={{display:"grid",gap:7,fontWeight:700,fontSize:13}}>Looking for<select className="field" value={intent} onChange={e=>setIntent(e.target.value)}><option>Any intention</option><option>Casual dating</option><option>Meet new people</option><option>Meaningful connection</option></select></label>
   <span className="muted" style={{fontSize:13,marginLeft:"auto"}}>{profiles.length} demo profiles</span>
  </section>
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:18}}>
   {profiles.map(p=><article key={p.id} className="feature" style={{padding:14}}>
    <div style={{height:190,borderRadius:18,background:p.color,display:"flex",alignItems:"end",padding:18,color:"white"}}><div><div style={{fontSize:12,fontWeight:800,letterSpacing:1}}>FICTIONAL DEMO PROFILE</div><h2 className="serif" style={{fontSize:32,margin:"5px 0"}}>{p.name}, {p.age}</h2><div>{p.city}, {p.country}</div></div></div>
    <div style={{padding:"14px 4px 3px"}}><span className="pill" style={{fontSize:12}}>{p.intent}</span><p style={{lineHeight:1.6,color:"#68525d",fontSize:14}}>{p.bio}</p><div style={{display:"flex",gap:7,flexWrap:"wrap"}}>{p.interests.map(i=><span key={i} className="pill" style={{fontSize:11,padding:"6px 9px"}}>{i}</span>)}</div>
    <button className="btn btn-primary" onClick={()=>setLiked(v=>v.includes(p.id)?v.filter(x=>x!==p.id):[...v,p.id])} style={{width:"100%",marginTop:16}}>{liked.includes(p.id)?"♥ Liked (demo)":"♡ Like (demo)"}</button></div>
   </article>)}
  </div>
  <p className="muted" style={{fontSize:12,marginTop:26}}>Likes are stored only in this page's temporary browser state. No messages, matches, accounts or real people are connected.</p>
 </main>
}
