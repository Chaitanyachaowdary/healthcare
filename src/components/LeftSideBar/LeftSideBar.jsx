import React from 'react';
import styles from './LeftSideBar.module.css';

const LeftSideBar = () => {
  return (
    <div className={styles.leftsidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.sidebarHeader}>General</div>
        <ul className={styles.sidebarMenu}>
          <li className={styles.menuItem}>
            <span className={styles.menuIcon}>📊</span>
            <span className={styles.menuText}>Dashboard</span>
          </li>
          <li className={styles.menuItem}>
            <span className={styles.menuIcon}>📜</span>
            <span className={styles.menuText}>History</span>
          </li>
          <li className={styles.menuItem}>
            <span className={styles.menuIcon}>📅</span>
            <span className={styles.menuText}>Calendar</span>
          </li>
          <li className={styles.menuItem}>
            <span className={styles.menuIcon}>⏰</span>
            <span className={styles.menuText}>Appointments</span>
          </li>
          <li className={styles.menuItem}>
            <span className={styles.menuIcon}>📈</span>
            <span className={styles.menuText}>Statistics</span>
          </li>
        </ul>
        
        <div className={styles.sidebarHeader}>Tools</div>
        <ul className={styles.sidebarMenu}>
          <li className={styles.menuItem}>
            <span className={styles.menuIcon}>💬</span>
            <span className={styles.menuText}>Chat</span>
          </li>
          <li className={styles.menuItem}>
            <span className={styles.menuIcon}>🛟</span>
            <span className={styles.menuText}>Support</span>
          </li>
        </ul>
        
        <ul className={styles.sidebarMenu}>
          <li className={styles.menuItem}>
            <span className={styles.menuIcon}>⚙️</span>
            <span className={styles.menuText}>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;