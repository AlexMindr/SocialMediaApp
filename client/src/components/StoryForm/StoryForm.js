import React ,{useEffect} from 'react'
import styles from './styles'
import {Card, Form, Input, Typography, Button} from 'antd'
import FileBase64 from 'react-file-base64'
import { useDispatch,useSelector } from 'react-redux'
import {createStory,updateStory} from '../../actions/stories'

const {Title} = Typography
const {Item} = Form


const StoryForm = ({selectedId,setSelectedId}) => {

  const story= useSelector((state)=>selectedId ? state.stories.find((story)=>story._id===selectedId):null)  
  const [form] = Form.useForm()
  const dispatch= useDispatch()

  const onSubmit = (formValues) => {
    selectedId? dispatch(updateStory(selectedId,formValues)) :
    dispatch(createStory(formValues))
    reset()
  }

  useEffect(()=>{
    if(story){
      form.setFieldValue(story)
    }
  },[story,form])

  const reset = () => {
    form.resetFields()
    setSelectedId(null)
  }

  return (
    <Card style={styles.formCard} title={
      <Title level={4} style={styles.formTitle}>
        {selectedId?"Editing":"Share"} a story
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
        {!selectedId?null:
          <Item wrapperCol={{span:16,offset:6}}>
          <Button type='primary' block htmlType='button' danger onClick={reset}>
            Discard
          </Button>
          </Item>
        }
      </Form>
    </Card>
  )
}

export default StoryForm