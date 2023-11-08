
import { Divider, Input } from 'antd';


function Search(props) {
  return (
    <>
      <Divider>Search</Divider>
      <Input  value={props.value} type="text" onChange = {props.handleSubmit} />
    </>
  );
}

export default Search;
