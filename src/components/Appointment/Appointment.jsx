import React from 'react';
import styles from './Appointment.module.css';

const Appointment = () => {
  return (
    <div className={styles.appointment}>
      <h1 className={styles.mainTitle}>The Upcoming Schedule</h1>
      
      <div className={styles.scheduleSection}>
        <h2 className={styles.dayTitle}>On Thursday</h2>
        <div className={styles.appointmentContainer}>
          <div className={styles.appointmentBox}>
            <div className={styles.appointmentHeader}>
              <span className={styles.appointmentName}>Health checkup complete</span>
            </div>
            <div className={styles.appointmentTime}>11:00 AM</div>
          </div>
          
          <div className={styles.appointmentBox}>
            <div className={styles.appointmentHeader}>
              <span className={styles.appointmentName}>Ophthalmologist</span>
            </div>
            <div className={styles.appointmentTime}>14:00 PM</div>
          </div>
        </div>
      </div>

      <div className={styles.scheduleSection}>
        <h2 className={styles.dayTitle}>On Saturday</h2>
        <div className={styles.appointmentContainer}>
          <div className={styles.appointmentBox}>
            <div className={styles.appointmentHeader}>
              <strong className={styles.doctorName}>Cardiologist</strong>
            </div>
            <div className={styles.appointmentTime}>12:00 AM</div>
          </div>
          
          <div className={styles.appointmentBox}>
            <div className={styles.appointmentHeader}>
              <strong className={styles.doctorName}>Neurologist</strong>
            </div>
            <div className={styles.appointmentTime}>16:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;