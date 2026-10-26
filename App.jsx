
import { useState, useEffect } from 'react'
export default function App(){
 const [days,setDays]=useState(0)
 useEffect(()=>{const target=new Date('2027-05-31'); setDays(Math.max(0,Math.ceil((target-new Date())/86400000)));},[])
 return (<div style={{fontFamily:'Arial,sans-serif'}}>
 <div style={{background:'#6b7280',color:'white',padding:'80px 20px',textAlign:'center'}}>
 <h1>2027 Moroni Utah Stake Trek</h1>
 <h2>Rejoice in Christ</h2>
 <p>Philippians 4:4</p>
 </div>
 <div style={{padding:'20px',textAlign:'center'}}><h2>Countdown</h2><p>{days} days until Trek</p></div>
 <div style={{padding:'20px'}}><h2>Documents</h2><p>Add PDFs to the public folder.</p></div>
 <div style={{padding:'20px'}}><h2>FAQ</h2><p>More Trek information coming soon.</p></div>
 <div style={{padding:'20px'}}><h2>Gallery</h2><p>Photos coming soon.</p></div>
 </div>)
}
