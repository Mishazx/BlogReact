import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../Common/Button/Button';

const Header: React.FC = () => {
  const location = useLocation();
  const isPostPage = /^\/post\/\d+$/.test(location.pathname);

  return (
    <div className={styles.header}>
      {isPostPage && <Button to="/posts">← Back to Posts</Button>}
      <div className={styles.logo}>
        <div className={styles.logoText}>Blog Posts</div>
      </div>
      {/* <Button onClick={() => document.documentElement.classList.toggle('light')}>Change Theme</Button> */}
    </div>
  );
};

export default Header;
