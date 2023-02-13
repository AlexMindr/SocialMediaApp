import React, { useState } from 'react'
import { Form,Input,Button,Card,Layout,Typography } from 'antd'
import { UserOutlined,LockOutlined,MailOutlined } from '@ant-design/icons'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {login,signup} from '../../actions/auth'
import styles from './styles'

const {Title} = Typography
const {Item} = Form



const AuthForm = () => {
    const [form]=Form.useForm()
    const [isLogin,setIsLogin]= useState(true)
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const onSubmit = (formValues) =>{
        if(isLogin){
            dispatch(login(formValues,navigate))
        }
        else {
            dispatch(signup(formValues,navigate))
        }
    }
    
    const switchMode = () =>{
        setIsLogin(prevState=>!prevState)
    }

  return (
    <Layout style={styles.container}>
        <Card style={styles.card} 
            title={<Title level={4} style={{textAlign:'center'}}>
                {isLogin?"Login to":"Sign up to"} Instaverse
            </Title>}
        >
            <Form name='authform' form={form} size='large' wrapperCol={{span:20,offset:2}} onFinish={onSubmit}>
                {isLogin || (
                <>
                    <Item name='username' rules={[{required:true,message:"Please enter your username"}]}>
                        <Input prefix={<UserOutlined/>} placeholder='username' />
                    </Item>
                </>
                )}
                <Item name='email' rules={[{required:true,message:"Please enter a valid email"}]}>
                    <Input type='email' prefix={<MailOutlined/>} placeholder='email' />
                </Item>
                <Item name='password' rules={[{required:true,message:"Please enter your password"}]}>
                    <Input.Password type='password' prefix={<LockOutlined/>} placeholder='password' />
                </Item>
                {isLogin || (
                <>  
                    <Item name='confirmPassword' rules={[{required:true,message:"Please repeat your password"}]}>
                        <Input.Password type='password' prefix={<LockOutlined/>} placeholder='Confirm Password' />
                    </Item>
                </>
                )}
               <Item >
                    <Button htmlType='submit' typeof='primary'>
                        {isLogin? "Login":"Sign up"}
                    </Button>
                    <span style={{margin:"0 10px 0 20px"}}>or</span>
                    <Button type='link' onClick={switchMode}>
                        {isLogin?"Register now":"login"}
                    </Button>
                </Item>
            </Form>
        </Card>
    </Layout>
  ) 
}

export default AuthForm