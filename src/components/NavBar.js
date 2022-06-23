import React, { useState, useEffect } from 'react'
import { HiMenu } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import logo from '../images/logo.png'
import './NavBar.css'

const NavBar = (props) => {

    const [show, setShow] = useState(true)
    const [isNavOpen, setIsNavOpen] = useState(false)
    const navLinks = ['HOME', 'ABOUT', 'PROJECTS', 'EVENTS', 'CAREERS', 'BLOGS']
    const controlNavBar = () => {
        if (window.scrollY > 0) {
            setShow(false)
        }
        else {
            setShow(true)
        }
    }

    const handleMenu = () => {
        setIsNavOpen(!isNavOpen)
        props.handleNav(isNavOpen)
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavBar)

        return () => {
            window.removeEventListener('scroll', controlNavBar)
        }
    }, [])


    return (
        <>
            <header>
                <nav className={` ${isNavOpen ? 'nav-menu' : 'navbar'}`}>
                    <div role="banner" className={`d-flex ${isNavOpen ? 'b-flex' : ''}`} >
                        <a href="#"><img src={logo} alt="baksh_logo" className='logo' /></a>
                        <span className={` ${isNavOpen ? 'hide-mob hide-dev' : 'comp-address'}`}>UAN (051)-111 789 111</span>
                        <CgClose className={`hide-dev ${isNavOpen ? 'close' : 'hide-mob'}`} onClick={handleMenu} />
                    </div>
                    <div className='d-flex'>
                        <div className={`${isNavOpen ? '' : 'hide-mob'}`}>
                            <ul className={`d-flex nav-flex  ${show ? '' : 'nav-links'}`}>
                                {
                                    navLinks.map((navLink, index) => (
                                        <li key={index}><a href="#" className='nav-link'>{navLink}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <HiMenu className={` ${isNavOpen ? 'hide-mob hide-dev' : 'hamburger'}`} onClick={handleMenu} />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar