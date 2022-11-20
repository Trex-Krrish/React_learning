import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light'); //wether the dark mode is enable or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#050121';
      // document.body.style.color='white';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark | Home';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.color='black';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light | Home';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
