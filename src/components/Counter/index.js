import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './style.scss';

export default function Counter({ count, increment, decrement, reset }) {
  const className = cx(styles.Wrapper, {
    belowZero: count < 0,
    aboveZero: count > 0,
    zero: count === 0,
  });

  return (
    <div className={ className }>
      <div className="value">
        { count }
      </div>
      <div className="buttons">
        <button className="increment" onClick={ increment }>+</button>
        <button className="decrement" onClick={ decrement }>-</button>
        <button onClick={ reset } className="reset">Reset</button>
      </div>
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
