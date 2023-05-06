import './App.css';
import Navbar from './components/Navbar'
import Details from './pages/Details';
import Form from './pages/Form';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
        <Routes>
            <Route exact path ='/' element = {<Homepage/>}/>
            <Route exact path ='details' element = {<Details/>}/>
            <Route exact path ='form' element = {<Form/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
