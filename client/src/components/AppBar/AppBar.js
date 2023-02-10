import React from 'react'
import {Layout,Image,Typography,Button,Avatar} from 'antd'
import Logo from '../../images/Insta.png'
import styles from './styles'
import {Link} from 'react-router-dom'

const {Title} =Typography
const {Header} =Layout


const AppBar = () => {
    const user = null

    return (
    <Header style={styles.header}>
        <Link to='/'>
            <div style={styles.homeLink}>
                <Image style={styles.image} width='45' preview={false} src={Logo}/>
                &nbsp;
                <Title style={styles.title}>Instaverse</Title>
            </div>
        </Link>
        {!user? (
            <Link to='/authform'>
                <Button htmlType='button' style={styles.login}>
                    Login
                </Button>
            </Link>
        ):(
            <div style={styles.userInfo}>
                <Avatar style={styles.avatar} alt='username' size='large'>
                    User
                </Avatar>
                <Title style={styles.title} level={4}>
                    John D
                </Title>
                <Button htmlType='button'>
                    Logout
                </Button>
            </div>
        )}
    </Header>
  )
}

export default AppBar