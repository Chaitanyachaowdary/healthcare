import React from 'react';
import styles from './Header.module.css';
import { FaBell, FaSearch, FaUserCircle, FaPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.healthText}>Health</span>
        <span className={styles.careText}>care.</span>
      </div>
      
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <FaSearch className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search" 
            className={styles.searchInput}
          />
        </div>
        <FaBell className={styles.bellIcon} size={20} color="blue" />
      </div>
      <div className={styles.profileSection}>
        <FaPlus className={styles.plusIcon} size={25} color="white" />
        <FaUserCircle className={styles.profileIcon} size={30} color="white" />
      </div>
    </div>
  );
};

export default Header;