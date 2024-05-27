import React, { useState } from 'react';
import styles from './RightColm.module.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function RightColm() {
    const [date, setDate] = useState(new Date());

    const handleChange = (date) => {
        setDate(date);
    };

    // Define the dates you want to highlight with their corresponding colors
    const highlightedDates = {
        '2024-05-25': 'red', // Example date 1 with color red
        '2024-05-28': 'green', // Example date 2 with color green
        '2024-05-31': 'blue', // Example date 3 with color blue
    };

    const getTileClassName = ({ date, view }) => {
        if (view === 'month') {
            const dateString = date.toISOString().split('T')[0];
            if (highlightedDates[dateString]) {
                return styles[highlightedDates[dateString]];
            }
        }
        return null;
    };

    return (
        <>

            <div className={styles.callender}>
                <Calendar
                    onChange={handleChange}
                    value={date}
                    tileClassName={getTileClassName}
                />
            </div>
            <br />
            <div className={styles.card_css}>
                <p className={styles.fees}>Fees Due</p>
                <div className={styles.cardd_css}>
                    <h6 className={styles.uptxt}>Up-Next</h6>
                    <div className={styles.card_pay}>
                        <div className={styles.set}>
                            <div className={styles.logocard}>

                            </div>
                            <div className={styles.textcss}>
                                <p className={styles.setdate}>28/07/2024</p>
                                <h6 className={styles.paycss}>Pay fees latest by 20/07/2024</h6>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.down_css}>
                    <div>
                        <h6 className={styles.txtupcoming}>Upcoming classes</h6>
                    </div>
                    <div>
                        <h6 className={styles.viewtxt}>view all</h6>
                    </div>
                </div>
                <div className={styles.box_card}>
                    <div className={styles.set}>
                        <div className={styles.logocard1}>

                        </div>
                        <div className={styles.textcss}>
                            <div className={styles.td_css}>
                                <div>
                                    <p className={styles.setdate}>14/06/2024</p>
                                </div>
                                <div>
                                    <p className={styles.setdate}>10:00 - 11:30</p>
                                </div>
                            </div>

                            <h6 className={styles.meditate}>Discrete math for absolute beginners</h6>
                        </div>
                    </div>
                </div>
                <div className={styles.box_card}>
                    <div className={styles.set}>
                        <div className={styles.logocard2}>

                        </div>
                        <div className={styles.textcss}>
                            <div className={styles.td_css}>
                                <div>
                                    <p className={styles.setdate}>15/06/2024</p>
                                </div>
                                <div>
                                    <p className={styles.setdate}>11:40 - 01:00</p>
                                </div>
                            </div>

                            <h6 className={styles.meditate}>The Meditations of Marcus Aurelius</h6>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default RightColm;