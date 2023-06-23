import React from 'react';
import StickyFooterToolbar from './components/StickyFooterToolbar/StickyFooterToolbar';
import Routing from './Routing';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routing />
        <StickyFooterToolbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
