import React from 'react';
import styles from './Calender.module.css';

const Calendar = () => {
  return (
    <div className={styles.calendar}>
      <h2 className={styles.monthTitle}>October 2021</h2>
      
      <table className={styles.calendarTable}>
        <thead>
          <tr className={styles.weekDays}>
            <th>Mon</th>
            <th>Tues</th>
            <th>Wed</th>
            <th>Thurs</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.dayNumbers}>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
          </tr>
          <tr className={styles.timeSlot}>
            <td>10:00</td>
            <td>08:00</td>
            <td>12:00</td>
            <td>10:00</td>
            <td>—</td>
            <td>12:00</td>
            <td>09:00</td>
          </tr>
          <tr className={styles.timeSlot}>
            <td>11:00</td>
            <td>09:00</td>
            <td>—</td>
            <td>11:00</td>
            <td>14:00</td>
            <td>14:00</td>
            <td>10:00</td>
          </tr>
          <tr className={styles.timeSlot}>
            <td>12:00</td>
            <td>10:00</td>
            <td>13:00</td>
            <td>—</td>
            <td>16:00</td>
            <td>15:00</td>
            <td>11:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;