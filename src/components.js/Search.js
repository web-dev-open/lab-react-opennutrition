
import { Divider, Input } from 'antd';


function Search(props) {
  return (
    <>
      <Divider>Search</Divider>
      <Input label="Image" className="smaller"  value={props.value} type="text" onChange = {props.handleSubmit} />
    </>
  );
}

export default Search;
