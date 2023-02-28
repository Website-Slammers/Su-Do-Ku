import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <div className="header__textbox">
        <Link to="/">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Sudoku</span>
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default Header