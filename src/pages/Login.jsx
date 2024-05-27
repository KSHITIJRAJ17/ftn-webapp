import React, { useState } from 'react';
import styles from './Login.module.css';
import frontImg from '../assets/front_img.png';
import flyTheNestLogo from '../assets/fly_the_nest_logo-img.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.login}>
      <div className={styles.containerCss}>
        <div className="col-md-6">
          <center>
          <img src={frontImg} className={styles.imgCss} alt="front logo" />
          <input
            type="email"
            className={styles.input}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            className={styles.input}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className={styles.forgotPasswordContainer}>
            <a href="#" className={styles.forgotPasswordLink}>Forgot Password?</a>
          </div>
          <div className={styles.logCss}>
            <button className={styles.button} onClick={() => (window.location.href = '/home')}>Login</button>
          </div>
          <div className={styles.loginT}>
            <h5>Don't have an account?</h5>
            <h5 style={{color:'#6C63FF', cursor:'pointer' }} onClick={() => (window.location.href = '/registration')}>&nbsp; Register now</h5>
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

export default Login;

