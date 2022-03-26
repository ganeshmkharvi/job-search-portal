import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        //you can log errors here using your error service
        console.log({ error, errorInfo });
    }
    render() {
        if (this.state.hasError) {
            return <h1>We are in maintenance mode now. Please try after sometime.</h1>;
        }
        return this.props.children;
    }  
}

ErrorBoundary.propTypes = {
    children:PropTypes.any
  };

export default ErrorBoundary;
