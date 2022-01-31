import Header from "./Screens/Header";
import Body from "./Screens/Body";
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App" style={{ height: '100%', width:'100%'}}>
      <div style={{ height: '10%', width: '100%',position:'fixed',top:'0px' }}>
        <Header />
      </div>
      <div style={{ height: '90%', width: '100%' ,position:'fixed',top:'11%'}}>
        <Body />
      </div>
    </div>
    </Router>
  );
}

export default App;
