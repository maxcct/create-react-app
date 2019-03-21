import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
