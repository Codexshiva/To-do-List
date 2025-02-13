import { Link } from "react-router-dom";
import Registeration from "../pages/registeration-page/Registeration";
import Login from "../pages/login-page/Login";
import { children } from "react";
import './layout.css'

const Layout=({children}) =>{
    return (

        <>
        

        <div className="navbar">
            <h1 id="head">To-Do List!</h1>
            <div className="btns">
            <Link id="link-btn" to="/login"><p id="btn-inside">Login</p></Link>
            <Link id="link-btn" to="/"><p id="btn-inside">Register!</p></Link>
            </div>
        </div>
        <main>
            {children}
        </main>
        
        </>
    )

}

export default Layout;

