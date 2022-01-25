import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Screen/Home.js'

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>
    </div>
  );
}

export default App;
