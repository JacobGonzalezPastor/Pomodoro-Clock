import '../style/App.css';
import {useState} from 'react'
import ConfigContext from '../components/ConfigContext'
import Timer from '../components/Timer'
function App() {
  const [workMin, setWorkMin] = useState(45);
  const [breakMin, setBreakMin] = useState(15);
  return (
    <div className="App">
      <ConfigContext.Provider value={{
        workMin,
        breakMin,
        setWorkMin,
        setBreakMin,
      }}>
        <Timer/>
      </ConfigContext.Provider>
    </div>
  );
}

export default App;
