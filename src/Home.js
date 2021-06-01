import React from 'react';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <form action="submit">
                <h3>Confess here</h3>
                <input type="text" placeholder="Type your confession message" />
                <button type="submit">Confess</button>
            </form>
        </div>
    )
}

export default Home
