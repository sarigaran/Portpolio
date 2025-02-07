import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Layout, Menu, Card, Avatar, Button } from "antd";
import { UserOutlined, CodeOutlined, MailOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    color: #0f0;
    font-family: Arial, sans-serif;
  }
`;

const StyledHeader = styled(Header)`
  background: #000;
  .ant-menu-item {
    color: #0f0;
  }
`;

const ProfileCard = styled(Card)`
  background: #111 !important;
  color: #0f0 !important;
  text-align: center;
  border: 1px solid #0f0;
  .ant-card-meta-title,
  .ant-card-meta-description {
    color: #0f0 !important;
  }
`;

const StyledButton = styled(Button)`
  background: #0f0;
  color: #000;
  border: none;
  &:hover {
    background: #0a0;
  }
`;

const Portfolio = () => {
  return (
    <Layout>
      <GlobalStyle />
      <StyledHeader>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>About</Menu.Item>
          <Menu.Item key="2" icon={<CodeOutlined />}>Projects</Menu.Item>
          <Menu.Item key="3" icon={<MailOutlined />}>Contact</Menu.Item>
        </Menu>
      </StyledHeader>
      <Content style={{ padding: "50px", display: "flex", justifyContent: "center" }}>
        <ProfileCard>
          <Avatar size={100} icon={<UserOutlined />} />
          <Card.Meta title="Web Developer" description="Creating modern web experiences" />
          <StyledButton style={{ marginTop: "20px" }}>Contact Me</StyledButton>
        </ProfileCard>
      </Content>
      <Footer style={{ textAlign: "center", background: "#000", color: "#0f0" }}>
        © 2025 Web Developer Portfolio
      </Footer>
    </Layout>
  );
};

export default Portfolio;
