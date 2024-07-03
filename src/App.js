
import React from 'react';
import Navbar from './components/Navbar';
import "./i18n"
import { useTranslation } from 'react-i18next'

function App() {
  const {t}=useTranslation();
  return (

    <Navbar />
    
  

  );
}

export default App;
