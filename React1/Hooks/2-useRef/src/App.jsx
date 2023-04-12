import CompA from "./Components/CompA";
import CompB from "./Components/CompB";
 function App(){
  return(<>
  {/* <CompA />  */}
  {/* --> Mutating a value does not cause re-render
  --> we can easily see that when we are changing the value of state and ref.current , but only state value is updating on every click, it because useRef does not re-render the page when the value is mutated.
  --> This simply proves that useRef is not use in such condition . At such place , useState in preferred. */}

  <CompB />

  </>)
 }
 export default App;
