import React from "react";
import logo from "../../../images/image.jpg";

function Home() {
  return (
    <div
      style={{ display: "flex", alignItems: "center", height: "85vh" }}
      id="home"
    >
      <div style={{ width: "50%", textAlign: "start" }}>
        <div style={{ fontSize: "35px", fontWeight: "bold" }}>
          Hey I'm <span style={{ color: "var(--green-color)" }}>Arigaran</span>
        </div>
        <div style={{ fontSize: "40px", fontWeight: "bold" }}>
          a passionate &nbsp;
          <span style={{ color: "var(--green-color)" }}>
            Frontend Developer
          </span>
        </div>
        <p style={{ fontSize: "20px" }}>
          dedicated to crafting engaging, user-friendly web experiences. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React, I specialize in building responsive, high-performance applications.
        </p>
      </div>
      <div style={{ width: "50%" }}>
        <img
          src={logo}
          alt="image"
          height={"500"}
          style={{ border: "2px solid black", borderRadius: "50%" }}
        />
      </div>
    </div>
  );
}

export default Home;
