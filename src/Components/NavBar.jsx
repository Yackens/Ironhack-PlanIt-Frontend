import React from "react";
import HomePage from "../pages/Home";
import Categories from "../pages/Categories"
import Tasks from "../pages/Tasks"
import { Link } from "react-router-dom";



function Navbar() {
    return (
        <>
            <nav>
               
                <ul>
                    <li>
                    
                    <Link to='/categories'>
                       <p>Categories</p>
                        </Link>
                        <Link to='/tasks'>
                       <p>Tasks</p>
                        </Link>
                        <Link to='/'>
                        <p>LogOut</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;