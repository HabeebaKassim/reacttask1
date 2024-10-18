import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div style={{background:color,height:'100vh'}}>
        <h1 style={{color:'black',fontWeight:'bolder',textAlign:'center',paddingTop:'20px'}}>Background Changing App</h1>
        <div style={{justifyContent:'space-evenly',display:'flex',marginTop:'300px'}}>
        <button onClick={()=>setColor("red")} style={{background:'black',color:'white',borderRadius:'2px',width:'150px', height:'100px'}}>Red</button>
        <button onClick={()=>setColor("yellow")} style={{background:'black',color:'white',borderRadius:'2px',width:'150px',height:'100px'}}>Yellow</button>
        <button onClick={()=>setColor("purple")} style={{background:'black',color:'white',borderRadius:'2px',width:'150px',height:'100px'}}>Purple</button>
        <button onClick={()=>setColor("brown")} style={{background:'black',color:'white',borderRadius:'2px',width:'150px',height:'100px'}}>Brown</button>
        <button onClick={()=>setColor("green")} style={{background:'black',color:'white',borderRadius:'2px',width:'150px',height:'100px'}}>Green</button>
        <button onClick={()=>setColor("grey")} style={{background:'black',color:'white',borderRadius:'2px',width:'150px',height:'100px'}}>Grey</button>
        </div>
      </div>
      
    </>
  )
}



export default App
