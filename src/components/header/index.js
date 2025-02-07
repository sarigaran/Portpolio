import React from "react";
import { ButtonWrap, StyleButton } from "./style";

function AppHeader() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        height: "65px",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          width: "40%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "white", fontSize: "25px", fontWeight: "bold" }}>
          𝓐𝓻𝓲
        </p>
        <p style={{ color: "#40eb07", fontSize: "25px", fontWeight: "bold" }}>
          𝓰𝓪𝓻𝓪𝓷
        </p>
      </div>
      <ButtonWrap>
        <StyleButton>Home</StyleButton>
        <StyleButton>About</StyleButton>
        <StyleButton>Service</StyleButton>
      </ButtonWrap>
    </div>
  );
}

export default AppHeader;
