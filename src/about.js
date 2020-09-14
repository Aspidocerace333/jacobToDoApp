import React from 'react';
import NavBar from './nav';
import Footer from './footer';

function About() {
    return (
        <div>
            <NavBar />
            <div className="about-container">
                <div>
                    <h3>
                        To Do App vesion 1.0
                    </h3>
                    <p>
                        C'est une application simple, ajoutant des tâches.
                    </p>
                    <p>
                        Email: <strong>aud.jacobdev@gmail.com</strong>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About