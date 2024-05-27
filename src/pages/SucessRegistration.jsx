import React, { useState } from 'react';
import styles from './SucessRegistration.module.css';
import sucessimg from '../assets/sucess_img.png';
import flyTheNestLogo from '../assets/fly_the_nest_logo-img.png';

function SucessRegistration() {

  return (
    <div className={styles.login}>
      <div className={styles.containerCss}>
        <div className="col-md-6">
          <center>
          <img src={sucessimg} className={styles.imgCsss} alt="sucess_img" />
          <div className={styles.logCss}>
            <h2 className={styles.congocss}>Congratulations</h2>
          </div>
          <div className={styles.loginT}>
            <h6 className={styles.accounttxtcss}>Your account has been <br/>successfully registered</h6>
            
          </div>
          <div className={styles.logCss}>
            <button className={styles.button} onClick={() => (window.location.href = '/login')}>Back to Login</button>
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

export default SucessRegistration;

