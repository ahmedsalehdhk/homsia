import { Link } from "react-router-dom";
import "../App.css"

import logo from "../assets/logo/Homsia.png"

const Navbar = () => {

    //chaning nav,text and hamburger color with scroll
    const changingNav = () => {
        const nav = document.getElementById('nav')
        const line1 = document.getElementById('line1')
        const line2 = document.getElementById('line2')
        if(window.scrollY >= 60){
            nav.classList.add("nav-active")
            line1.classList.add('hamburger-dark')
            line2.classList.add('hamburger-dark')
        }else {
            nav.classList.remove("nav-active")
            line1.classList.remove('hamburger-dark')
            line2.classList.remove('hamburger-dark')
        }
    }
    window.addEventListener('scroll', changingNav)



    //view mobile menu
    let isNavOpen = false
    const handleHamburgerClick = () => {
        const mobileNav = document.getElementById('mobile-nav')
        const line1 = document.getElementById('line1')
        const line2 = document.getElementById('line2')
        isNavOpen = !isNavOpen
        if(isNavOpen){
            mobileNav.classList.add('mobile-nav-open')
            line1.classList.add('hamburger-dark')
            line2.classList.add('hamburger-dark')
        }else {
            mobileNav.classList.remove('mobile-nav-open')
            line1.classList.remove('hamburger-dark')
            line2.classList.remove('hamburger-dark')
        }
        
    }
    
    return (
        <nav className="bg-transparent text-white flex justify-between items-center px-6 md:px-10 py-6 fixed w-screen duration-700 z-[100]" id="nav">
            <Link to="/"><img className="logo h-10 w-24 min-w-[96px]" src={logo} alt="homesia"/></Link>
            <ul className="nav-links gap-5 hidden md:flex">
                <li className="capitalize font-medium" id="header"><a href="#home">home</a></li>
                <li className="capitalize font-medium" id="header"><a href="#featured">featured</a></li>
                <li className="capitalize font-medium" id="header"><a href="#services">services</a></li>
                <li className="capitalize font-medium" id="header"><a href="#contact">contact</a></li>
            </ul>
            <div className="hamburger cursor-pointer md:hidden z-50" onClick={handleHamburgerClick}>
                <div className="line bg-white h-0.5 w-7 mb-1 duration-500" id="line1"></div>
                <div className="line bg-white h-0.5 w-7 mb-1 duration-500" id="line2"></div>
            </div>
            <div className="mobile-nav px-10 flex justify-end items-center md:hidden absolute top-0 bg-white text-black text-xl h-screen w-4/5 duration-500 shadow-xl" id="mobile-nav">
                <ul className="nav-links gap-10 flex flex-col md:hidden text-right" id="header">
                    <li className="capitalize font-medium"><a onClick={handleHamburgerClick} href="#home">home</a></li>
                    <li className="capitalize font-medium"><a onClick={handleHamburgerClick} href="#featured">featured</a></li>
                    <li className="capitalize font-medium"><a onClick={handleHamburgerClick} href="#services">services</a></li>
                    <li className="capitalize font-medium"><a onClick={handleHamburgerClick} href="#contact">contact</a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;