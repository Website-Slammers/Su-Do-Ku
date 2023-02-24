import React from 'react'

import Header from './Header'
import Navbar from './Navbar'
import Puzzle from './Puzzle'
import MobileControls from './MobileControls'

import Video from './img/zen.mp4'

function Play() {
  return (

    <div id="play-return">

      <Header />
      <Navbar />

      <h2 className="heading-secondary">Play Sudoku Now</h2>

      <div className="flex-box flex-box--play">

        <div className="flex-box">
          <Puzzle />
        </div>

        <div className="flex-box">
          <MobileControls />
        </div>

      </div>


    </div>
  )
}

export default Play