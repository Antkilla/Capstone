import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import DealershipDetailPage from './routes/DealershipDetailPage';

const App = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={Home}/>
                <Route path="/dealership/:id/update" element={UpdatePage}/>
                <Route path="/dealership/:id" element={DealershipDetailPage}/>
            </Routes>
        </Router>
    </div>
  );
};

export default App;