import React from 'react'
import Navbar from './components/navbar'
import Page1 from './components/page1'
import Page2 from './components/page2'
import Page3 from './components/page3'
import Page4 from './components/page4'
import Page5 from './components/page5'
import Page6 from './components/page6'
import Page7 from './components/page7'

import './App.css'

function App() {
  return (
    <div className="">
      <Navbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      {/* Konten lainnya */}
    </div>
  );
}

export default App;