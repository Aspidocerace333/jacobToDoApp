import React from 'react';
import './bootstrap/css/bootstrap.css'
import './bootstrap/css/bootstrap.min.css'

function NavBar() {

    return (
        <div>
            <nav>
                <div className="logo">
                    <div className="logo2"><h3>TodoApp</h3></div>
                </div>

                <ul>
                    <li><a href="/AddTask">Home</a></li>
                    <li><a href="/About">About</a></li>
                </ul>

            </nav>
        </div>
    )
}

export default NavBar;