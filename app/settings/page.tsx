"use client";
import { useState } from "react";

export default function SettingsPage(){
 const [visibility,setVisibility]=useState("hidden");
 const [distance,setDistance]=useState("city");
 const [notifications,setNotifications]=useState(true);
 const [showOnline,setShowOnline]=useState(false);
 return <main className="container" style={{maxWidth:760,padding:"40px 0 72px"}}>
 <a href="/dashboard">← Member space</a>
 <section className="feature" style={{marginTop:22}}>
  <span className="pill" style={{color:"#a12b53",fontWeight:800}}>PRIVACY SETTINGS · PREVIEW</span>
  <h1 className="serif" style={{fontSize:44,color:"#641b3b",marginBottom:8}}>Your privacy, your choice.</h1>
  <p className="muted" style={{lineHeight:1.7}}>Explore the controls planned for pull. These selections are temporary and are not saved to an account.</p>
  <div style={{display:"grid",gap:22,marginTop:28}}>
   <div><h2 style={{fontSize:18,color:"#641b3b"}}>Profile visibility</h2><p className="muted" style={{fontSize:14}}>Choose whether your profile can appear in discovery.</p><div style={{display:"flex",gap:10,flexWrap:"wrap"}}><button className="btn" onClick={()=>setVisibility("hidden")} style={{background:visibility==="hidden"?"#641b3b":"#fff0f4",color:visibility==="hidden"?"white":"#641b3b"}}>Hidden</button><button className="btn" onClick={()=>setVisibility("discoverable")} style={{background:visibility==="discoverable"?"#641b3b":"#fff0f4",color:visibility==="discoverable"?"white":"#641b3b"}}>Discoverable</button></div><p className="muted" style={{fontSize:12}}>Current preview: {visibility==="hidden"?"Only you can see your profile.":"Your profile would be eligible for discovery after age verification."}</p></div>
   <div><h2 style={{fontSize:18,color:"#641b3b"}}>Location detail</h2><p className="muted" style={{fontSize:14}}>The product should use broad location only, never publish live GPS coordinates.</p><select className="field" value={distance} onChange={e=>setDistance(e.target.value)}><option value="country">Country only</option><option value="city">City and country</option><option value="none">Do not show location</option></select></div>
   <div style={{display:"flex",justifyContent:"space-between",gap:18,alignItems:"center"}}><div><strong>Product updates</strong><p className="muted" style={{fontSize:13,margin:"5px 0"}}>Optional feature and account notices.</p></div><input type="checkbox" checked={notifications} onChange={e=>setNotifications(e.target.checked)} aria-label="Product updates"/></div>
   <div style={{display:"flex",justifyContent:"space-between",gap:18,alignItems:"center"}}><div><strong>Show online status</strong><p className="muted" style={{fontSize:13,margin:"5px 0"}}>Keep your activity status private by default.</p></div><input type="checkbox" checked={showOnline} onChange={e=>setShowOnline(e.target.checked)} aria-label="Show online status"/></div>
   <div className="hero-bg" style={{padding:18,borderRadius:18}}><strong style={{color:"#641b3b"}}>Your preview settings</strong><p style={{fontSize:13,color:"#68525d",lineHeight:1.7,marginBottom:0}}>Visibility: {visibility} · Location: {distance==="none"?"hidden":distance} · Updates: {notifications?"on":"off"} · Online status: {showOnline?"visible":"hidden"}</p></div>
   <p className="muted" style={{fontSize:12}}>No preference is stored or transmitted. Account deletion, data export and consent management must be implemented before launch.</p>
  </div>
 </section></main>
}
