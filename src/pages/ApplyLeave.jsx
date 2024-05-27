import React, { useState } from 'react';
import styles from './ApplyLeave.module.css';
import Navb from './components/Navbar';
import Header from './components/Header';
import RightColm from './components/RightColm';


const ApplyLeave = () => {
    const [activeBtn, setActiveBtn] = useState('applyLeave');
    const username = 'Ammi Watts';

    const [selectedType, setSelectedType] = useState('');
    const [selectedApprover, setSelectedApprover] = useState('');
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [reason, setReason] = useState('')

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleApproverChange = (event) => {
        setSelectedApprover(event.target.value);
    };

    const handleStartChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };

    return (
        <>
            <div className='row' style={{ height: '100%' }}>
                <div className='col-2' style={{ height: '100%', padding: 0 }}>
                    <Navb activeBtn={activeBtn} />
                </div>
                <div className='col-10' style={{ height: '100%', padding: 0 }}>
                    <div className='row-1' style={{ width: '100%', height: '10%', minHeight:50 }}>
                        <Header username={username} activeBtn={activeBtn} />
                    </div>
                    <div className='row' style={{ width: '100%', height: '90%' }}>
                        <div className={`col-8 ${styles.mainContent}`}>
                            
                            <div className={`row ${styles.leaveForm}`}>

                                <div className='row' style={{ padding: '3%', paddingBottom: '3%' }}>
                                    <div className='col-6'>
                                        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Leave Type:</p>
                                        <input
                                            list="options"
                                            id="option-input"
                                            value={selectedType}
                                            onChange={handleTypeChange}
                                            placeholder="Type to search..."
                                            className={styles.leaveType}
                                        />
                                        <datalist id="options">
                                            <option value="Option 1" />
                                            <option value="Option 2" />
                                            <option value="Option 3" />
                                        </datalist>
                                        {selectedType && <p style={{ fontSize: 10 }}>You selected: {selectedType}</p>}

                                    </div>
                                    <div className='col-6'>
                                        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Approver:</p>
                                        <input
                                            list="options"
                                            id="option-input"
                                            value={selectedApprover}
                                            onChange={handleApproverChange}
                                            placeholder="Type to search..."
                                            className={styles.leaveType}
                                        />
                                        <datalist id="options">
                                            <option value="Option 1" />
                                            <option value="Option 2" />
                                            <option value="Option 3" />
                                        </datalist>
                                        {selectedApprover && <p style={{ fontSize: 10 }}>You selected: {selectedApprover}</p>}

                                    </div>

                                </div>

                                <div className='row' style={{ padding: '3%', paddingTop: 0, paddingBottom: '3%' }}>
                                    <div className='col-6'>
                                        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Start Date:</p>
                                        <input
                                            type='date'
                                            value={startDate}
                                            onChange={handleStartChange}
                                            className={styles.dateCSS}
                                        />

                                        {startDate && <p style={{ fontSize: 10 }}>You selected: {startDate}</p>}

                                    </div>
                                    <div className='col-6'>
                                        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>End Date:</p>
                                        <input
                                            type='date'
                                            value={endDate}
                                            onChange={handleEndChange}
                                            className={styles.dateCSS}
                                        />

                                        {endDate && <p style={{ fontSize: 10 }}>You selected: {endDate}</p>}
                                    </div>
                                </div>

                                <div className='row' style={{ padding: '3%', paddingTop: 0 }}>
                                    <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Reason for Leave:</p>
                                    <center>
                                        <input
                                            type='text'
                                            value={reason}
                                            onChange={handleReasonChange}
                                            className={styles.reasonCSS}
                                        />
                                    </center>
                                    <div style={{width:'100%', paddingLeft: '60%', marginTop:'3%'}}>
                                    <button className={styles.cancelBtn}>Cancel</button>
                                    <button className={styles.applyBtn}>Apply</button>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                        <div className={`col-4 ${styles.rightCol}`}>
                            <RightColm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApplyLeave;