import React from 'react';
import {Layout,Image,Typography} from 'antd'
import Logo from './images/Insta.png'
import Home from './components/Home'

const {Title} =Typography
const {Header,Footer} =Layout



function App() {
  return (
    <Layout>
      <Header>
        <Image width='45' preview='false' src={Logo}/>
        &nbsp;
        <Title>Instaverse</Title>
      </Header>
      <Home/>
      <Footer>2023 Instaverse</Footer>
    </Layout>
  );
}

export default App;
