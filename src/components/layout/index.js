import React, { useRef } from "react";
import { Layout } from "antd";
import AppHeader from "../header";
import Home from "../body/home";
import Skills from "../body/skills";
import Contact from "../body/contact";
const { Content, Footer } = Layout;

const Applayout = () => {
  const sectionsRef = useRef({
    home: null,
    skills: null,
    contact: null,
  });

  const scrollToSection = (sectionName) => {
    sectionsRef.current[sectionName].scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Layout
      style={{
        backgroundColor: "inherit",
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AppHeader scrollToSection={scrollToSection} />
      <Content
        style={{
          margin: "24px 16px 0",
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <div ref={(el) => (sectionsRef.current.home = el)}>
            <Home />
          </div>
          <div ref={(el) => (sectionsRef.current.skills = el)}>
        <Skills />
      </div>
      
      <div ref={(el) => (sectionsRef.current.contact = el)}>
        <Contact />
      </div>
        </div>
      </Content>
      {/* <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer> */}
    </Layout>
  );
};
export default Applayout;
