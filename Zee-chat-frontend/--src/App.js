
import "./App.css";
import{BrowserRouter,Routes,Route}from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";

function App() {
  return (
  <div>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Chat" element={<Chat />}/>
    </Routes>
    </BrowserRouter>
    
  </div>
  );
}

export default App;
