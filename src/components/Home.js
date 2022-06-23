import React, { useState } from 'react'
import NavBar from './NavBar'
import './Home.css'

const Home = () => {

    const [navOpen, setNavOpen] = useState(true)
    const handleNav = (navState) => {
        setNavOpen(navState)
    }


    return (
        <section className='home'>
            <NavBar handleNav={handleNav} />
            <div className={` ${navOpen ? '' : 'hide-middle'}`}>
                <div className='middle'>
                    <h1 className='title'>We Value <br />
                        Your Dreams</h1>
                    <p className='comp-mission'>Our core mission is to provide the highest <br />
                        caliber real estate development, management, <br />
                        and investment services.</p>
                </div>
            </div>
        </section>
    )
}

export default Home