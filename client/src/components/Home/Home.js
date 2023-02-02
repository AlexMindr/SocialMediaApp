import React from 'react'
import StoryForm from '../StoryForm'
import StoryList from '../StoryList'
import  {Layout} from 'antd'
import styles from './styles'

const {Sider,Content}=Layout


const Home = () => {
  return (
    <Layout >
        <Sider width={400} style={styles.sider}>
            <StoryForm/>
        </Sider>
        <Content style={styles.content}>
            <StoryList/>
        </Content>
    </Layout>
  )
}

export default Home