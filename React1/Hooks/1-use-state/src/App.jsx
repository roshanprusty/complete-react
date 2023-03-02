import Counter from "./components/Counter";
import './App.css';
import TextFieldString from "./components/TextFieldString";
import CheckBoxBoolean from "./components/CheckBoxBoolean";
import Form from "./components/Form";
import FormObject from "./components/FormObject";
function App(){
  return(<>
  <Counter/> 
  <TextFieldString /> 
  <CheckBoxBoolean />
  <Form />
  <FormObject />
  </>)
}
export default App;