import { useState } from "react";
import { Input, Button, Form, Card } from "antd";

function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = () => {
    const newFood = {
      name,
      image,
      calories: Number(calories),
      servings: Number(servings),
    };

    onAddFood(newFood);

    // Reset form
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <Card
      title="Add New Food"
      style={{ marginBottom: "20px", maxWidth: 400, margin: "0 auto" }}
    >
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Name" required>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>

        <Form.Item label="Image URL" required>
          <Input value={image} onChange={(e) => setImage(e.target.value)} />
        </Form.Item>

        <Form.Item label="Calories" required>
          <Input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Servings" required>
          <Input
            type="number"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add Food
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default AddFoodForm;
