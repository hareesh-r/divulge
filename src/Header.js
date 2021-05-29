import "./Header.css";
import React from 'react';
import "./img/logo.png";
import {BrowserRouter as Router ,Route, Link, Switch} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';

const expandHam = () => {
    var options = document.getElementsByClassName("header__right__option");
    options[0].classList.add("header__right__hidden");
    options[1].classList.add("header__right__hidden");
    options[2].classList.add("header__right__hidden");
    options[3].classList.add("header__right__hidden");
    options[4].classList.add("header__right__hidden");

}

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src="https://firebasestorage.googleapis.com/v0/b/divulge-1e35f.appspot.com/o/logo.png?alt=media&token=b95419af-80bc-46df-b631-3e9a6f312300" alt="" />
                </div>
                <Router>
                <div className="header__right__ham">
                        <button onClick={expandHam}><MenuIcon /></button>
                </div>
                <div className="header__right">
                    <Link to="/home"><div className="header__right__option">Home</div></Link>
                    <Link to="/about"><div className="header__right__option">About</div></Link>
                    <Link to="/helpline"><div className="header__right__option">HelpLine</div></Link>
                    <Link to="/termsandcondition"><div className="header__right__option">Terms and Condition</div></Link>
                    <Link to="/contact"><div className="header__right__option">Contact</div></Link>
                </div>
                </Router>
            </div>
        </div>
    )
}

export default Header
