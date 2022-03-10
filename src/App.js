import "./App.css";
import { Home } from "./pages/home/home";
import { Navbar } from "./components/layout/navbar/navbar";
import { Login } from "./components/login/login";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
