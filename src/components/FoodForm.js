import { Button, Input } from "antd";

function FoodForm(props)
{
    return <div>
        <h3>Add new food</h3>
        <label>Name</label>
        <Input type='text' onChange={props.foodName} />
        <label>Image Url</label>
        <Input type='text' onChange={props.foodUrl} />
        <label>Calories</label>
        <Input type="number" onChange={props.calo} />
        <label>Servings</label>
        <Input type='number' onChange={props.serves} />
        <Button onClick={props.create}>Create</Button>
    </div>
}

export default FoodForm