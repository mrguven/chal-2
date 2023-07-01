import { BrowserRouter,Route,Router,Routes } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Search from "./pages/Search";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
      <Routes>

<Route  path="/" index  element={<Home />} />
<Route path="/searchUser" element={<Search />} />


      </Routes>
      
      
      
      </BrowserRouter>


    </div>
  );
}

export default App;
