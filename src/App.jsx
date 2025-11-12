import Home from "./components/home.jsx";
import Me from "./components/div2.jsx";
import Tools from "./components/div3.jsx";
import Lib from "./components/div4.jsx";
import Contact from "./components/div5.jsx";
function App() {
  return (
    <div  className="scroll-smooth">
    <Home />   
    <Me />
    <Tools />
    <Lib />
    <Contact/>
    </div>
  );
}

export default App;