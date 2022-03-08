import React from 'react';
import { SigInButton } from '../SigInButton';

import styles from "./style.module.scss";

export const Header: React.FC = () => {
  return (
      <header className={styles.headerContainer}>
          <div className={styles.headerContent}>
              <img src="/images/logo.svg" alt="ig.news"/>
              <nav>
                  <a className={styles.active}>Home</a>
                  <a>Posts</a>
              </nav>
              <SigInButton/>
          </div>
      </header>
  );
}