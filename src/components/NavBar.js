import React from 'react'
import {HiMenu} from  'react-icons/hi'
import logo from '../images/logo.png'
import styles from './NavBar.module.css'

const NavBar = () => {


const navLinks=['HOME','ABOUT','PROJECTS','EVENTS','CAREERS','BLOGS']

    return (
        <section className={styles.navbar}>
            <header role="banner" className={styles.cFlex} >
                <a href="#"><img src={logo} alt="baksh_logo" /></a>
                <span className={styles.compAddress}>UAN (051)-111 789 111</span>
            </header>
            <nav role="navigation" className={styles.cFlex}>
                <ul className={styles.cFlex}>
                    {
                        navLinks.map((navLink,index)=>(
                            <li key={index}><a href="#" className={styles.navLink}>{navLink}</a></li>
                        ))
                    }
                </ul>
                <HiMenu className={styles.hamburger}/>
            </nav>
        </section>
    )
}

export default NavBar