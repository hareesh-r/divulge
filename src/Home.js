import React from 'react';
import hero from "./img/hero.jpg"
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home__hero">
                <img src={hero} alt="" />
                <div class="hero__title">DIVULGE</div>
            </div>
            <form action="submit">
                <h3>Confess here</h3>
                <input type="text" placeholder="Type your confession message" />
                <button type="submit">Confess</button>
            </form>
        </div>
    )
}

export default Home
