import SideNav from "./components/SideNav/SideNav";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <SideNav />
        <Home />
      </Router>
    </div>
  );
}

export default App;
