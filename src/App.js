import './App.css';
import ParticleBackground from './Components/ParticleBackground';

import { Routes, Route } from "react-router-dom"
import CustomizedTables from './Components/Table_1';
import Home from './Components/Home';
import CustomizedTables2 from './Components/Table_2';
import CustomizedTables3 from './Components/Table_3';
import CustomizedTables4 from './Components/Table_4';
import CustomizedTables5 from './Components/Table_5';

function App() {
  return (
    <div className="App">
      <div className="z-[-1]">
      <ParticleBackground/>
    </div>
    <div>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/table1" element={ <CustomizedTables/> } />
        <Route path="/table2" element={ <CustomizedTables2/> } />
        <Route path="/table3" element={ <CustomizedTables3/> } />
        <Route path="/table4" element={ <CustomizedTables4/> } />
        <Route path="/table5" element={ <CustomizedTables5/> } />
      </Routes>
    </div>
    </div>
  );
}

export default App;
