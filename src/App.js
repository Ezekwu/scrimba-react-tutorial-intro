import Main from './components/Main';
import Navbar from './components/Navbar';
import { useState } from 'react';





function App() {
  const [light, setLight] = useState(false);

  const toggleLight = () => {
    setLight(prevState => !prevState)
    
  }
  

  return (
    <div className="container">
      <Navbar light={light} toggleLight={toggleLight}/>
      <Main light={light} toggleLight={toggleLight}/>
    </div>
  );
}

export default App;
