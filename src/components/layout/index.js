import React from 'react';
import { Layout,  theme } from 'antd';
import AppHeader from '../header';
import Dasboard from '../body';
const {  Content, Footer,  } = Layout;

const Applayout = () => {
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();
  return (
  
      <Layout>
        <AppHeader/>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <Dasboard/>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
  );
};
export default Applayout;