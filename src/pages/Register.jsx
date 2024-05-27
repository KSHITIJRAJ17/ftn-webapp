import React, { useState } from 'react';
import styles from './Registration.module.css';
import frontImg from '../assets/front_img.png';
import flyTheNestLogo from '../assets/fly_the_nest_logo-img.png';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <div className={styles.login}>
      <div className={styles.containerCss}>
        <div className="col-md-6">
          <center>
            <img src={frontImg} className={styles.imgCss} alt="front logo" />
            
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="email"
              className={styles.input}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className={styles.input}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="number"
              className={styles.input}
              placeholder="Your mobile number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <div className={styles.logCss}>
              <button className={styles.button} onClick={() => (window.location.href = '/success')}>Register</button>
            </div>

            <div className={styles.loginT}>
              <h5>Already have an account?</h5>
              <h5 style={{ color: '#6C63FF', cursor:'pointer' }} onClick={() => (window.location.href = '/login')}>&nbsp; Login now</h5>
            </div>
          </center>
        </div>
        <div className={`col-md-6 ${styles.imgSet}`}>
          <img src={flyTheNestLogo} className={styles.imgCss} alt="fly the nest logo" />
        </div>
      </div>
    </div>
  );
}

export default Register;
