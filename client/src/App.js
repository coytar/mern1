import './App.css';
import Employees from './Employees';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewEmployee from './ViewEmployee';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Employees />} />
        <Route path='/:id' element={<ViewEmployee />} />
        {/* <Route path='/add' element={<AddEmployee />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
