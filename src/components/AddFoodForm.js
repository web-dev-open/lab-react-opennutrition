import { Input, Button } from 'antd';
import React, { useState } from 'react';

import './AddFoodForm.css';

export default function AddFoodForm({ addFood }) {

    const [form, setForm] = useState({
        name: '',
        image: '',
        calories: 0,
        servings: 0
    })

    function handleChange(event) {
        const {id, value} = event.target;
        console.log(id, value);
        setForm({
            ...form,
            [id]: value
        });
        console.log(form);
    }

    function handleClick() {
        addFood(form);
    }

    return (
        <div className='foodForm'>
            <label htmlFor='name'>Name</label>
            <Input className='input' id="name" type="text" value={form.name} onChange={handleChange}/>

            <label htmlFor='image'>Image</label>
            <Input className='input' id="image" type="text" value={form.image} onChange={handleChange}/>

            <label htmlFor='calories'>Calories</label>
            <Input className='input' id="calories" type="text" value={form.calories} onChange={handleChange}/>

            <label htmlFor='servings'>Servings</label>
            <Input className='input' id="servings" type="number" value={form.servings} onChange={handleChange}/>

            <Button className='createButton' type="default" size="large"  block="true" shape='round' onClick={handleClick}>Create</Button>
        </div>
    )
}
