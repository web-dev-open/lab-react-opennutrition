import { Divider, Input } from 'antd';

// Iteration 4

// {
//   "name": "Yogurt",
//   "calories": 125,
//   "image": "https://i.imgur.com/URhdrAm.png",
//   "servings": 1
// }
function AddFoodForm(onsubmit,onchange) {


  

  return (
    <form >
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={onchange} />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input value={undefined} type="text" onChange={onchange} />

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={undefined} type="number" onChange={onchange} />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={undefined} type="number" onChange={onchange}/>

      <button onSubmit={onsubmit} type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;