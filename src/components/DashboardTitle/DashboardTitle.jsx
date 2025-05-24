import React from 'react';
import styles from './DashboardTitle.module.css';
import { FaChevronDown } from 'react-icons/fa'; // Importing down arrow icon

const DashboardTitle = () => {
  return (
    <div className={styles.dashboardtitle}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.subtitle}>
        This Week
        <FaChevronDown className={styles.dropdownArrow} />
      </div>
    </div>
  );
};

export default DashboardTitle;