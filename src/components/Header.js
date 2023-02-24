import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <div className="header__textbox">
        <h1 className="heading-primary">
          <span className="heading-primary--main"><Link to="/">Sudoku</Link></span>
        </h1>
      </div>
    </div>
  )
}

export default Header