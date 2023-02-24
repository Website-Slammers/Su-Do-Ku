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

      {/* <div className="bg-video">
          <video className="bg-video__content" autoplay muted loop>
              <source src={Video} type="video/mp4"/>
              Your browser is not supported!
          </video>
      </div> */}

      <h2 className="heading-secondary">Play Sudoku Now</h2>

      <div className="flex-box">
        <Puzzle />
      </div>

      <br />

      <div className="flex-box">
        <MobileControls />
      </div>
      

    </div>
  )
}

export default Play