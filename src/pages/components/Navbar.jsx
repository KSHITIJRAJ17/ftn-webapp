import React from 'react';
import styles from './Navbar.module.css';
import flyTheNestLogo from '../../assets/fly_the_nest_logo-img.png';

function Navbar({ activeBtn }) { // Destructure activeBtn from props
    return (
        <>
            <div style={{ width: '100%', height: '100%', alignItems: 'center',  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
                <center>
                    <img src={flyTheNestLogo} className={styles.ftnLogo} alt="fly the nest logo" />
                    <div className={styles.buttonGrp}>
                        <button className={`${styles.navBtn} ${activeBtn === 'home' ? styles.active : ''}`} onClick={() => (window.location.href = '/home')}>
                            <span className="material-symbols-outlined">
                                home
                            </span>
                            <p>&nbsp; Home</p>
                        </button>
                        <button className={`${styles.navBtn} ${activeBtn === 'mentors' ? styles.active : ''}`} >
                            <span className="material-symbols-outlined">
                                supervisor_account
                            </span>
                            <p>&nbsp; Mentors</p>
                        </button>
                        <button className={`${styles.navBtn} ${activeBtn === 'applyLeave' ? styles.active : ''}`} onClick={() => (window.location.href = '/applyleave')}>
                            <span className="material-symbols-outlined">
                                free_cancellation
                            </span>
                            <p>&nbsp; Apply Leave</p>
                        </button>
                        <button className={`${styles.navBtn} ${activeBtn === 'feedback' ? styles.active : ''}`} onClick={() => (window.location.href = '/feedback')}>
                            <span className="material-symbols-outlined">
                                feedback
                            </span>
                            <p>&nbsp; Feedback</p>
                        </button>
                    </div>
                </center>
            </div>
        </>
    );
};

export default Navbar;
