// Header.jsx
import React, { useState } from 'react';
import styles from './Header.module.css';
import profilePic from './../../assets/profilePic.png';

function Header({ username, activeBtn }) {
    const [currentActiveBtn, setCurrentActiveBtn] = useState(activeBtn);
    const [showNotification, setShowNotification] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const toggleNotification = () => {
        setShowProfileMenu(false)
        setShowNotification(prevState => !prevState);
    };
    const toggleProfileMenu = () => {
        setShowNotification(false)
        setShowProfileMenu(prevState => !prevState);
    };

    return (
        <div className="row" style={{ width: '100%', height: '100%', margin: 0, borderBottom: '0.25px solid #AFB8CF' }}>
            <div className="col-8" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {currentActiveBtn === 'home' && <h2>Home</h2>}
                {currentActiveBtn === 'applyLeave' && <h2>Apply Leave</h2>}
                {currentActiveBtn === 'feedback' && <h2>Feedback</h2>}
            </div>
            <div className="col-1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor:'pointer' }}>
                <span className="material-symbols-outlined" onClick={toggleNotification}>
                    notifications
                </span>
                {showNotification && (
                <div className={styles.dropdownContent} id="notification-dropdown">
                  <a>Notififation 1</a>
                  <a>Notififation 2</a>
                  <a>Notififation 3</a>
                </div>
            )}
            </div>
            <div className="col-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <p>{username} &nbsp; </p>
                <img src={profilePic} className={styles.pic} alt="Profile" onClick={toggleProfileMenu} />
                {showProfileMenu && (
                <div className={styles.profileMenu} id="notification-dropdown">
                  <a onClick={() => (window.location.href = '/ftn-webapp/login')}>Logout</a>
                  <a>Profile</a>
                  
                </div>
                )}
            </div>
        </div>
    );
}

export default Header;
