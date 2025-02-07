import {
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import React from "react";

function Contact() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        textAlign: "start",
      }}
    >
      <div>
        <div style={{ display: "flex" }}>
          <PhoneOutlined style={{ fontSize: "50px", fill: "green" ,marginRight:"20px"}} />
          <p>
            Phone : <span>93455 38396</span>
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <MailOutlined fill="green" style={{ fontSize: "50px",marginRight:"20px" }} />
          <p>
            E mail : <span>arigaran1504@gmail.com</span>
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <LinkedinOutlined style={{ fontSize: "50px", fill: "green",marginRight:"20px" }} />
          <p>https://www.linkedin.com/in/arigaran-s-781370219/</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
