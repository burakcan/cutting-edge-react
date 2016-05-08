import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, requestReset as reset } from 'actions/counter';
import getCount from 'selectors/count';
import Counter from 'components/Counter';

/* eslint-disable react/prefer-stateless-function */
class CounterContainer extends Component {
  render() {
    return (
      <Counter
        count={ this.props.count }
        increment={ this.props.increment }
        decrement={ this.props.decrement }
        reset={ this.props.reset }
      />
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

function mapStateToProps(state) {
  return {
    count: getCount(state),
  };
}

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
};

CounterContainer.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
