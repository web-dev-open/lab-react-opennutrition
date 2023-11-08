import React from 'react';
import { Input, Form, Button } from 'antd';

const AddFoodForm = ({handleSubmit}) => {


  

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item label="Name" name="name">
        <Input placeholder="Food name" />
      </Form.Item>
      <Form.Item label="Image" name="image">
        <Input placeholder="Image URL" />
      </Form.Item>
      <Form.Item label="Calories" name="calories">
        <Input placeholder="Calories" />
      </Form.Item>
      <Form.Item label="Servings" type="number" name="servings">
        <Input placeholder="Servings" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Food
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddFoodForm;
