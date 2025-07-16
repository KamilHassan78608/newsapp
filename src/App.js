import React from 'react'

import Navbar from './components/Navbar'
import Category from './components/Category'
import Home from './components/Home'

export default function App() {
  return (
    <div>
      <Navbar />
      <Category />
      <Home Category="sports"/>
    </div>
  )
}
