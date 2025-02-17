import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Header from '/src/Components/Header/Header';
import Home from '/src/Pages/HomeProject/Home';

function App() {

  return (

    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
