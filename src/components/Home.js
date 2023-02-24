import React from 'react'
import { Link } from 'react-router-dom'

import Puzzle from './Puzzle'

const Home = () =>{
    return(

        <div className="home">
            
        <div className="home__textbox">
            <h1 className="heading-primary heading-primary--home">
                <span className="heading-primary--main">Sudoku</span>
                {/* <span className="heading-primary--sub">Plight of the Sunseekers</span> */}
            </h1>
            <br />
            <br />
            <Link to="/play" className="btn btn--home">
                Play<span></span></Link>
            
            {/* <a href="#" className="btn">
                Sign-In</a> */}
        </div>


            
        </div>
    )
}

export default Home;