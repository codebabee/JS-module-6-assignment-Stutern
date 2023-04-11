import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderElement from './Header.jsx'
import AboutUs from './main2.jsx'

function App() {
  return (
    <div>
      {/* instantiaiting the header and main components in the return statements */}
      <HeaderElement />
      <AboutUs />
    </div>
  )
}

export default App
