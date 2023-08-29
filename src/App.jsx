import reactLogo from "./assets/react.svg";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
          <img id="logo" src={logo} />
         <p style={{fontSize:'20px', lineHeight:'2'}}>HeroMD is an innovative research project exploring the needs of physicians currently in or interested in private practice. HeroMD is a product of <a href="https://healthworx.studio">Healthworx Studio</a>, all rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
