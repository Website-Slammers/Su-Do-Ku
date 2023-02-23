import React from "react"
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom'

import './css/style.css'

const App = () =>{
    return(
        <div>
            <Navbar />
            <Outlet />
            
        </div>
    )
}
export default App;