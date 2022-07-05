import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./container/LandingPage/LandingPage";
import SignIn from "./container/SignIn/SignIn";
import HomePage from "./container/HomePage/HomePage";

function App() {
  const isUserLoggedIn = true;
  return (
    <BrowserRouter>
    <div className="app">
       <Routes>
        <Route path ="/" 
        element= {isUserLoggedIn ? <HomePage/> : <LandingPage/>} />
       </Routes>

       <Routes>
        <Route path ="/sign-in" 
        element= {<SignIn/>} />
       </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
