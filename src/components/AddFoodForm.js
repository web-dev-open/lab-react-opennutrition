import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';

function AddFoodForm(props) {

    

        const [showForm, setShowForm] = useState(false)
        const {handleAddForm} = props;
      
        const onFinish = (values) => {
          console.log('Success:', values);
          handleAddForm(values)
          setShowForm(false)
        };
      
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };
      
        function showFormClick(){
          setShowForm(true)
        }



  return (


    <div>
   {
      !showForm && (
        <Button type="primary" onClick={showFormClick}>Show Form</Button>
      )
    }
    {
      showForm && (
        <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Food name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please enter a food to add',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Image url"
          name="image"
          rules={[
            {
              required: true,
              message: 'please enter image url',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Calories"
          name="calories"
          rules={[
            {
              required: true,
              message: 'Please enter calories',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Servings"
          name="servings"
          rules={[
            {
              required: true,
              message: 'Please enter servings',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
      
  
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Create food entry
          </Button>
        </Form.Item>
      </Form>
      )
    }


    </div>
  )
}

export default AddFoodForm