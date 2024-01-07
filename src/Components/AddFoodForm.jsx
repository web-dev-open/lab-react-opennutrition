import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const AddFoodForm = ({ foods, addNewFood }) => {
  const [showBtn, setShowBtn] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (newFood) => {
    // Handle form submission logic here

    addNewFood([newFood, ...foods]);
    form.resetFields();
  };

  return (
    <div style={{ margin: "10px" }}>
      {showBtn ? (
        <>
          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter the name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Image"
              name="image"
              rules={[
                { required: true, message: "Please enter the image URL!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Calories"
              name="calories"
              rules={[
                { required: true, message: "Please enter the calories!" },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="Servings"
              name="servings"
              rules={[
                { required: true, message: "Please enter the servings!" },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
          <Button type="primary" ghost onClick={() => setShowBtn(false)}>
            Hide Form
          </Button>
        </>
      ) : (
        <Button type="primary" ghost onClick={() => setShowBtn(true)}>
          Add New Food
        </Button>
      )}
    </div>
  );
};

export default AddFoodForm;
