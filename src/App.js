
import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/home/HomePage';
import SignInPage from './pages/sign-in/SignInPage';



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<SignInPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
    </Routes>
     
    
    {/* <SignInPage/> */}
    {/* <HomePage/> */}
    </div>
  );
}

export default App;
