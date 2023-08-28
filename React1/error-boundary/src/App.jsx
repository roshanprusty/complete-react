import Hero from "./Components/Hero";
import './App.css';
import ErrorBoundaries from "./Components/ErrorBoundaries";

function App(){
  return(<>
  <ErrorBoundaries>
  <Hero name={"Captain America"}></Hero>
  </ErrorBoundaries>
  <ErrorBoundaries>
  <Hero name={"Spiderman"}></Hero>
  </ErrorBoundaries>
  <ErrorBoundaries>
  <Hero name={"joker"}></Hero>
  </ErrorBoundaries>
  </>)
}
export default App;