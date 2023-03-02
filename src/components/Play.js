import {useState} from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Puzzle from './Puzzle'
import MobileControls from './MobileControls'
import Footer from './Footer'

import Waterfall from './img/waterfall.mp4'

function Play() {
  

  return (

    <div id="play-return">

      <Header />
      

      <div className="video-bg">
          <video className="video-bg__content" src={Waterfall} autoPlay loop muted />
        </div>

      <br /><br />

      <div className="play">

        <div className="flex-box">
          <Puzzle/>
        </div>

        <div className="play__controls">
          <div className="flex-box">
              <MobileControls />
            </div>
            <div className="play__number-box">
              <button className="play__number play__number--1">1</button>
              <button className="play__number play__number--2">2</button>
              <button className="play__number play__number--3">3</button>
              <button className="play__number play__number--4">4</button>
              <button className="play__number play__number--5">5</button>
              <button className="play__number play__number--6">6</button>
              <button className="play__number play__number--7">7</button>
              <button className="play__number play__number--8">8</button>
              <button className="play__number play__number--9">9</button>
              <button className="play__number play__number--X">X</button>
            </div>
        </div> {/* Play Controls END */}

      </div> {/* Play END */}



    </div>
  )
}

export default Play