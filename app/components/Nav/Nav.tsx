import React from 'react';
import Image from "next/image";
import Icon from '../Images/favicon-4.png';
import styles from './Nav.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faImage, faComments } from "@fortawesome/free-solid-svg-icons";


const Nav = ({ onSectionChange }: { onSectionChange: (section: 'Users' | 'Posts' | 'Albums') => void }) => {
  return (
    <nav className={styles.nav}>
      <Image className={styles.icon} src={Icon} width="45" height="45" alt="" />
      <h1 className={styles.pageTitle}>Next Data Fetching UI</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => onSectionChange('Users')}> <FontAwesomeIcon style={{color: "black" }} icon={faUsers} /> Users</button>
        <button className={styles.button} onClick={() => onSectionChange('Posts')}> <FontAwesomeIcon style={{color: "black" }} icon={faComments} /> Posts</button>
        <button className={styles.button} onClick={() => onSectionChange('Albums')}> <FontAwesomeIcon style={{color: "black" }} icon={faImage} /> Albums</button>
      </div>

    </nav>
  );
}

export default Nav;

