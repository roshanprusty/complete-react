import './App.css';
import Temp from './components/Temp';
import Counter from "./components/Counter";
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
  {/* <Temp /> */}
  </>)
}
export default App;