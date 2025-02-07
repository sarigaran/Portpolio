import React from 'react'
import logo from "../../images/image.jpg"

function Dasboard() {
  return (
    <div style={{display:"flex" ,alignItems:"center"}}>
        <div style={{width:"50%"}}><img src={logo} alt='image' style={{border:"2px solid black",backgroundColor:"black",borderRadius:"50%"}}/></div>
        <div style={{width:"50%",fontSize:"20px",fontWeight:"bold"}}>Software Developer with 2 years of experience, dedicated and hardworking in both project execution and task
management. Skilled at motivating team members and fostering collaboration. An enthusiastic and keen learner
of new technologies, seeking a project to further enhance skills and knowledge</div>
     
    </div>
  )
}

export default Dasboard
