import React from 'react';
import Image from "next/image";
import Icon from '../Images/favicon-4.png';
import styles from './Nav.module.css';

const Nav = ({ onSectionChange }: { onSectionChange: (section: 'Users' | 'Posts' | 'Albums') => void }) => {
  return (
    <nav className={styles.nav}>
      <Image className={styles.icon} src={Icon} width="45" height="45" alt="" />
      <h1 className={styles.pageTitle}>Next Data Fetching UI</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => onSectionChange('Users')}>Users</button>
        <button className={styles.button} onClick={() => onSectionChange('Posts')}>Posts</button>
        <button className={styles.button} onClick={() => onSectionChange('Albums')}>Albums</button>
      </div>
      
      
    </nav>
  );
}

export default Nav;

