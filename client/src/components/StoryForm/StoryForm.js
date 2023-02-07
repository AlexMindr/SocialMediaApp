import React from 'react'
import styles from './styles'
import {Card, Form, Input, Typography, Button} from 'antd'
import FileBase64 from 'react-file-base64'
import { useDispatch } from 'react-redux'
import {createStory} from '../../actions/stories'

const {Title} = Typography
const {Item} = Form



const StoryForm = () => {
  
  const [form] = Form.useForm()
  const dispatch= useDispatch()

  const onSubmit = (formValues) => {
    dispatch(createStory(formValues))
  }

  return (
    <Card style={styles.formCard} title={
      <Title level={4} style={styles.formTitle}>

      </Title>
    }>
      <Form 
        form={form} labelCol={{span:6}} wrapperCol={{span:16}} layout='horizontal' size='middle' onFinish={onSubmit}
      >
        <Item name='username' label='Username' rules={[{required:true}]} >
          <Input  allowClear/>
        </Item>
        <Item name='caption' label='Caption' rules={[{required:true}]}>
          <Input.TextArea autoSize={{minRows:2,maxRows:6}} allowClear/>
        </Item>
        <Item name='tags' label='Tags' >
          <Input.TextArea  autoSize={{minRows:2,maxRows:6}} allowClear/>
        </Item>
        <Item name='image' label='Image' rules={[{required:true}]}>
          <FileBase64 
            type='file' multiple={false} onDone={(e)=>{
              form.setFieldsValue({image:e.base64})
            }}
          />
        </Item>
        <Item wrapperCol={{span:16,offset:6}}>
          <Button type='primary' block htmlType='submit'>
            Share
          </Button>
        </Item>
      </Form>
    </Card>
  )
}

export default StoryForm