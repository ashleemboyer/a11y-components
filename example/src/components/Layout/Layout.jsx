import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <nav>
      <Link to='/'>Home</Link>
    </nav>
    <main>{children}</main>
  </div>
);

export default Layout;
