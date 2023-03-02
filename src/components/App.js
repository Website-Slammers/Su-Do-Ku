import React from "react"
import { Outlet } from 'react-router-dom'

import Navbar from "./Navbar";
import Footer from './Footer'

import './css/style.css'

const App = () =>{
    return(
        <div>

            <Outlet />

            <Footer />
            
        </div>
    )
}
export default App;