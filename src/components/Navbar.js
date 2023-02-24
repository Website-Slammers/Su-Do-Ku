import React from 'react'
import { Link } from 'react-router-dom'; //import link from the legend of zelda

const Navbar = ()=>{
    return(
        <div id='nav-return'>
            <nav>
                <Link to="/">Home</Link>
                {/* <Link to="play">Play</Link> */}
            </nav>
        </div>
    )
}

export default Navbar;