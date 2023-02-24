import React from "react"
import { Outlet } from 'react-router-dom'

import Navbar from "./Navbar";

import './css/style.css'

const App = () =>{
    return(
        <div>

            <Outlet />
            
        </div>
    )
}
export default App;