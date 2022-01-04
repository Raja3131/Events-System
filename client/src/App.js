import Header from "./Screens/Header";
import Body from "./Screens/Body";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App" style={{ height: '100%', width:'100%'}}>
      <div style={{ height: '10%', width: '100%' }}>
        <Header />
      </div>
      <div style={{ height: '90%', width: '100%' }}>
        <Body />
      </div>
    </div>
    </Router>
  );
}

export default App;
