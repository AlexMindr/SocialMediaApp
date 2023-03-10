import React from 'react';
import {Layout} from 'antd'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import styles from './styles'

import Home from './components/Home'
import AppBar from './components/AppBar'
import AuthForm from './components/AuthForm'


const {Footer} =Layout



function App() {
  return (
    <BrowserRouter>
      <Layout style={styles.layout}>
        <AppBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/authform' element={<AuthForm/>}/>
        </Routes>
        <Footer style={styles.footer}>2023 Instaverse</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
