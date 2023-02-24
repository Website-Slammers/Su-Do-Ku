import React from 'react'

import Header from './Header'
import Navbar from './Navbar'
import Puzzle from './Puzzle'

function Play() {
  return (

    <div id="play-return">

      <Header />
      <Navbar />

      <h2 className="heading-secondary">Play Sudoku Now</h2>

      <div className="flex-box">
        <Puzzle />
      </div>
    </div>
  )
}

export default Play