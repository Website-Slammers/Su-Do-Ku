import React from 'react'

function Footer() {
  return (
    <div className="footer">

      <div className="footer__logo-box">
        <span className="footer__logo-box--ian">Engineered by Ian</span>
        <span>Developed by </span>
        <span className="footer__logo-box--drew">Drewford</span>
      </div>

      <div className="flex-box">

        <div className="footer__copyright">
           <p>&copy;2023 by webslam. React and JavaScript by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="footer__link" target="_blank">Ian Sorensen</a>. React and SCSS developed by <a href="https://developedbydrewford.netlify.app" className="footer__link" target="_blank">Andrew Cook</a>  This website is intended to be recreational and a portfolio project.  <a href="https://en.wikipedia.org/wiki/Sudoku" className="footer__link" target="_blank">Sudoku</a> is a logic-based, combinatorial number-placement puzzle. </p>
        </div>

      </div> {/* Flexbox END */}

    </div>
  )
}

export default Footer