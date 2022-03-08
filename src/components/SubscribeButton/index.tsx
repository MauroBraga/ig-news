import React from 'react';
import styles from './styles.module.scss';

export const SubscribeButton: React.FC = () => {
  return (
      <button 
        className={styles.subscribeButton}
        type='button'>
            Subscribe Now
      </button>
  );
}