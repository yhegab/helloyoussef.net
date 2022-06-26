/**
 * From ReactGA Community Wiki Page https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
 */

import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default function withTracker(WrappedComponent, options = {}) {
  const trackPage = (page) => {
    ReactGA.set({
      page,
      ...options,
    });
    ReactGA.pageview(page);
  };

  class HOC extends Component {
    componentDidMount() {
      const { location } = this.props;
      const page = location.pathname;
      trackPage(page);
    }

    UNSAFE_componentWillReceiveProps(nextProps) { // eslint-disable-line camelcase
      const { location } = this.props;
      const currentPage = location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return HOC;
}
