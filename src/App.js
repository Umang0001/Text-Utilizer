import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import Textarea from './components/Textarea';
import Alert from './components/Alert';
// import Mylink from './components/Mylink';




function App() {
  const [mode, setmode] = useState('light');
  const [buttonName, setbuttonName] = useState('Enable DarkMode');
  const [alert, setalert] = useState(null);
  const [redmode, setredmode] = useState(false)

  const showAlert = (type, message) => {
    setalert({
      type: type,
      msg: message
    })

    setTimeout(() => {
      setalert(null)
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === "light") {
      setmode('dark');
      setbuttonName('Enable LightMode');
      document.body.style.backgroundColor = "#474754"
      // console.log(buttonName);
      showAlert('success', 'Dark mode has been enabled')
    }
    else {
      setmode('light')
      setbuttonName('Enable DarkMode')
      document.body.style.backgroundColor = "white"
      // console.log(buttonName);
      showAlert('success', 'Light mode has been enabled')

    }
  }

  const toggleredmode = () => {
    if (redmode === false) {
      document.body.style.backgroundColor = "#9e2e2e"
      setredmode(true)
      showAlert('success', "Red Mode Enabled")
    }
    else {
      document.body.style.backgroundColor = "white"
      setredmode(false)
      showAlert('success', "Red Mode Disabled")
    }
  }




  return (
    <>
      


        <Navbar toggleMode={toggleMode} mode={mode} buttonName={buttonName} toggleredmode={toggleredmode} redmode={redmode} />
        <Alert alert={alert} />
        <Textarea mode={mode} showAlert={showAlert} />
       
          

          


      
    </>
  );
}

export default App;
