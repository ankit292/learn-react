
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  const [modeText, setModeText] = useState('Light Mode Enable');

  const showAlert = (massage,type)=>{
    setAlert({
      msg: massage,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const modeChange = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#fff";
      showAlert('Light mode is enabled','success');
      setModeText('Light Mode Enable');
      document.title = 'Light Mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor = "#212529";
      showAlert('Dark mode is enabled','success');
      setModeText('Dark Mode Enable');
      document.title = 'Dark Mode';
    }
  }
  return (
   <>
    
    
    
    <div className='container py-4'>
    <Router>
    <Navbar tittle='TextUtils' aboutText='About Us' mode={mode} modeChange={modeChange} modeText={modeText}/>
   <Alert alert={alert}/>
      <Routes>
        <Route exact path='/About' element={<About />}></Route>
        <Route exact path="/" element={<TextForm heading='Enter the text to analize below' mode={mode} showAlert={showAlert}/>}></Route>
        <Route exact path='/TextForm' element={<TextForm heading='Enter the text to analize below' mode={mode} showAlert={showAlert}/>}></Route>
      </Routes>
    </Router>
    </div>
   </>
  );
}

export default App;
