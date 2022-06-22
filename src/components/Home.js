import React from 'react'
import NavBar from './NavBar'
import styles from './Home.module.css'

const Home = () => {
    return (
        <section className={styles.home}>
            <NavBar />
            <div className={styles.middle}>
                <h1 className={styles.title}>We Value <br />
                    Your Dreams</h1>
                <p className={styles.compMission}>Our core mission is to provide the highest <br />
                 caliber real estate development, management, <br />
                  and investment services.</p>
            </div>
        </section>

    )
}

export default Home