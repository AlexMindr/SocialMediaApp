import React from 'react'
import StpryList from '../StoryList'
import StoryForm from '../StoryForm'
import  {Layout} from 'antd'
import Story from '../Story'
import StoryList from '../StoryList'

const {Sider,Content}=Layout


const Home = () => {
  return (
    <Layout>
        <Sider width={400}>
            <StoryForm/>
        </Sider>
        <Content>
            <StoryList/>
        </Content>
    </Layout>
  )
}

export default Home