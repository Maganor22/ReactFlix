import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import Navbar from './navbar.js';
import Carousel from './carousel.js';
import './App.css';

let title = document.createElement("h1");
title.innerHTML = "Hello"
title.style.color = "red"
title.style.textAlign = "center"
document.body.appendChild(title)

function App() {
    return (
        <header className="App-header">
            <div className="App">
                <BrowserRouter>
                    <Router>
                        <Navbar />
                        <Carousel />
                    </Router>
                </BrowserRouter>
            </div>
        </header>
    );
}

export default App;
