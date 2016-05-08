import React, { PropTypes } from 'react';
import styles from './style.scss';

export default function AppLayout(props) {
  return (
    <div className={ styles.Wrapper }>
      { props.children }
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
