import "./Header.css";
import React from 'react';
import logo from "./img/logo-white.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const expandHam = () => {
    var options = document.getElementsByClassName("header__right__option");
    options[0].classList.add("header__right__hidden");
    options[1].classList.add("header__right__hidden");
    options[2].classList.add("header__right__hidden");
    options[3].classList.add("header__right__hidden");
    options[4].classList.add("header__right__hidden");
    var temp = document.getElementsByClassName("menuIcon");
    temp[0].classList.add("hide");
    var temp1 = document.getElementsByClassName("closeIcon");
    temp1[0].classList.remove("hide");
}
const compressHam = () => {
    var options = document.getElementsByClassName("header__right__option");
    options[0].classList.remove("header__right__hidden");
    options[1].classList.remove("header__right__hidden");
    options[2].classList.remove("header__right__hidden");
    options[3].classList.remove("header__right__hidden");
    options[4].classList.remove("header__right__hidden");
    var temp2 = document.getElementsByClassName("menuIcon");
    temp2[0].classList.remove("hide");
    var temp3 = document.getElementsByClassName("closeIcon");
    temp3[0].classList.add("hide");
}

function Header() {

    return (
        <div className="header">
            <hr />
            <div className="header__container">
                <div className="header__logo">
                    <img src={logo} alt="Divulge Logo Here" />
                    <h1 className="title">DIVULGE</h1>
                </div>
                <Router>
                    <div className="header__right">
                        <Link to="/home"><div className="header__right__option">Home</div></Link>
                        <Link to="/about"><div className="header__right__option">About</div></Link>
                        <Link to="/helpline"><div className="header__right__option">HelpLine</div></Link>
                        <Link to="/termsandcondition"><div className="header__right__option">Terms and Condition</div></Link>
                        <Link to="/contact"><div className="header__right__option">Contact</div></Link>
                    </div>
                    <div className="header__right__ham">
                        <button className="menuIcon" onClick={expandHam}><MenuIcon /></button>
                        <button className="closeIcon hide" onClick={compressHam}><CloseIcon /></button>
                    </div>
                </Router>
            </div>
        </div>
    )
}

export default Header
