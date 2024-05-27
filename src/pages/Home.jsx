import React, { useState } from 'react';
import styles from './Home.module.css';
import Navb from './components/Navbar';
import Header from './components/Header';
import RightColm from './components/RightColm';
import JoinNowImg from './../assets/joinNowLogo.png';
import Continue1Img from './../assets/ContinueWatching1.png';
import Continue2Img from './../assets/ContinueWatching2.png';



const Home = () => {
    const [activeBtn, setActiveBtn] = useState('home');
    const [liveClass, setLiveClass] = useState('Java - Object Oriented Programming');
    const [continueWatching1, setContinueWatching1] = useState('Lecture 1');
    const [continueWatching2, setContinueWatching2] = useState('Lecture 2');


    const username = 'Ammi Watts';
    return (
        <>
            <div className='row' style={{ height: '100%' }}>
                <div className='col-md-2' style={{ height: '100%', padding: 0 }}>
                    <Navb activeBtn={activeBtn} />
                </div>
                <div className='col-md-10' style={{ height: '100%', padding: 0 }}>
                    <div className='row-1' style={{ width: '100%', height: '10%', minHeight: 50 }}>
                        <Header username={username} activeBtn={activeBtn} />
                    </div>
                    <div className='row' style={{ width: '100%', height: '90%' }}>
                        <div className={`col-md-8 ${styles.mainContent}`}>
                            <div className='card' style={{ width: '100%', height: '17%' }}>
                                <div className='row' style={{ height: '100%', width: '100%', margin: 0 }}>
                                    <div className='col-md-3' style={{ height: '100%', backgroundColor: '#8338EC', backgroundImage:`url(${JoinNowImg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                                        
                                    </div>
                                    <div className='col-md-6' style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <p>{liveClass}</p>
                                    </div>
                                    <div className='col-md-3' style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <button className={styles.joinNow}> Join Now</button>
                                    </div>

                                </div>
                            </div>
                            <div className='card' style={{ width: '100%', height: '7%', marginTop: '5%', marginBottom: '2%', borderWidth: 0 }}>
                                <div className='row' style={{ height: '100%' }}>
                                    <div className='col-md-9' style={{ height: '100%' }}>
                                        <h4 style={{ color: '#8338EC' }}>Recorded Classes</h4>
                                    </div>
                                    <div className='col-md-3' style={{ height: '100%', paddingLeft: '11%' }}>
                                        <h5 style={{ color: '#8338EC', cursor: 'pointer' }}>View All</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='card' style={{ width: '100%', height: '17%' }}>
                                <div className='row' style={{ height: '100%', width: '100%', margin: 0 }}>
                                    <div className='col-md-3' style={{ height: '100%', backgroundColor: '#FFC136', backgroundImage:`url(${Continue1Img})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

                                    </div>
                                    <div className='col-md-6' style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <p>{continueWatching1}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card' style={{ width: '100%', height: '17%', marginTop: '3%' }}>
                                <div className='row' style={{ height: '100%', width: '100%', margin: 0 }}>
                                    <div className='col-md-3' style={{ height: '100%', backgroundColor: '#F68C1E', backgroundImage:`url(${Continue2Img})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

                                    </div>
                                    <div className='col-md-6' style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <p>{continueWatching2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-4 ${styles.rightCol}`}>
                            <RightColm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;