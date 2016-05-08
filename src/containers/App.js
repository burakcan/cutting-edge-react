import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppLayout from 'components/AppLayout';

/* eslint-disable react/prefer-stateless-function */
class AppContainer extends Component {
  render() {
    return (
      <AppLayout>
        { this.props.children }
      </AppLayout>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

function mapStateToProps() {
  return {};
}

AppContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default connect(mapStateToProps)(AppContainer);
