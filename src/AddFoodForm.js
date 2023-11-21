import { useState } from "react";

import { Divider, Input, Form, Button } from "antd";

function AddFoodForm({ addFood }) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    calories: 1,
    servings: 1,
  });

  function handleInputChange(event) {
    setForm((prevForm) => {
      return {
        ...prevForm,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addFood((prev) => {
      const newFood = {
        name: form.name,
        image: form.image,
        calories: form.calories,
        servings: form.servings,
      };
      return {
        ...prev,
        foods: [newFood, ...prev.foods],
        filteredFoods: [newFood, ...prev.foods],
      };
    });
    setForm({
      name: "",
      image: "",
      calories: 1,
      servings: 1,
    });
  }
  return (
    <Form layout="vertical" autoComplete="off">
      <Form.Item label="Name">
        <Input
          value={form.name}
          onChange={handleInputChange}
          placeholder="Food Name"
          name="name"
        />
      </Form.Item>

      <Form.Item label="Image">
        <Input
          value={form.image}
          onChange={handleInputChange}
          placeholder="Image URL"
          name="image"
        />
      </Form.Item>

      <Form.Item label="Calories">
        <Input
          value={form.calories}
          onChange={handleInputChange}
          type="number"
          name="calories"
        />{" "}
      </Form.Item>

      <Form.Item label="Servings">
        <Input
          value={form.servings}
          onChange={handleInputChange}
          type="number"
          name="servings"
        />
      </Form.Item>
      <Button type="primary" htmlType="submit" onClick={handleSubmit}>
        Create
      </Button>
    </Form>
  );
}

export default AddFoodForm;
