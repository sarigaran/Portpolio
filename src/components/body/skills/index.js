import React from 'react'

function Skills() {
  return (
    <div style={{  display: "flex", alignItems: "center", justifyContent:"center", height: "70vh",textAlign:"start" }}>
        <div>
       <h1 style={{color:"var(--green-color)"}}>Skills
            </h1>
       <p> <span style={{color:"var(--green-color)",fontSize:"20px",fontWeight:"bold"}}>Languages: </span>JavaScript (ES6+)
        </p> 
        <p><span style={{color:"var(--green-color)",fontSize:"20px",fontWeight:"bold"}}>Frameworks/Libraries:</span> React, Redux
        </p>
        <p><spspan style={{color:"var(--green-color)",fontSize:"20px",fontWeight:"bold"}}an>Tools:</spspan> Git, GitHub, Visual Studio Code, Figma, Vite, Jira
        </p>
        <p><span style={{color:"var(--green-color)",fontSize:"20px",fontWeight:"bold"}}>Other Skills:</span> API Integration, Performance Optimization, UI/UX Best Practices
        </p>
      </div>
    </div>
  )
}

export default Skills
