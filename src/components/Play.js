import React from 'react'

import Puzzle from './Puzzle'

function Play() {
  return (
    <div>

      <h2 className="heading-secondary">Play Sudoku Now</h2>

      <div className="flex-box">
        <Puzzle />
      </div>
    </div>
  )
}

export default Play