
import { useState } from 'react';
import './App.css';
import About from './Componets/About';
import Navbar from './Componets/Navbar';
import TextForm from './Componets/TextForm';
import Alert from './Componets/Alert';
import State from './Componets/State.jsx';
import {
  BrowserRouter, Route, Routes,
  // RouterProvider,
} from "react-router-dom";
import ClassCom from './Componets/ClassCom';

function App() {
  
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar mode={mode} toggleMode={toggleMode}/>}>
            <Route path='/about' element={<About />} />
            <Route path='/textForm' element={<TextForm showAlert={showAlert} />} />
            <Route path='/alert' alert={alert} element={<Alert />} />
            <Route path='/State'  element={<State />} />
            <Route path='/ClassCom' name="rahulvr" element={<ClassCom />} />
            <Route path='*' element={<div>This is a Erro</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
