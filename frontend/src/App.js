import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryInfo from './components/CountryInfo';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/country/:code/:name" element={<CountryInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
