import React, { useState } from 'react';
import styles from './FeedBack.module.css';
import Navb from './components/Navbar';
import Header from './components/Header';
import RightColm from './components/RightColm';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
 
 
const Home = () => {
    const [activeBtn, setActiveBtn] = useState('feedback');
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
                        <div className={styles.midcard}>
                        <div>
                            <h6 className={styles.questioncss}>How was the Lecture?</h6>
                            <label className={styles.labelcss}>
                                <select name="select" className={styles['dropdown-css']}>
                                    <option value="select">Select</option>
                                    <option value="select1">select 1</option>
                                    <option value="select2">select 2</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <h6 className={styles.questioncss}>Does your all doubts solved?</h6>
                            <label className={styles.labelcss}>
                                <select name="selectedFruit" className={styles['dropdown-css']}>
                                    <option value="select">Select</option>
                                    <option value="select1">select 1</option>
                                    <option value="select2">select 2</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <h6 className={styles.questioncss}>Was your all doubts solved?</h6>
                            <label className={styles.labelcss}>
                                <select name="selectedFruit" className={styles['dropdown-css']}>
                                    <option value="select">Select</option>
                                    <option value="select1">select 1</option>
                                    <option value="select2">select 2</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <h6 className={styles.questioncss}>Was mentor attentive to class?</h6>
                            <label className={styles.labelcss}>
                                <select name="selectedFruit" className={styles['dropdown-css']}>
                                    <option value="select">Select</option>
                                    <option value="select1">select 1</option>
                                    <option value="select2">select 2</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <h6 className={styles.questioncss}>Other Queries</h6>
                            <label className={styles.labelcss}>
                                <input id="queryInput" name="query" type="text" className={styles.queryinput} />
                            </label>
                        </div>
                        <div className={styles.Buttoncss}>
                            <button className={styles.cancelcss}>
                                Cancel
                            </button>
                            <button className={styles.submitcss}>
                                Submit
                            </button>
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