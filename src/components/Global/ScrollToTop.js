import React from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidMount() {
    this.unlisten = this.props.history.listen(() => window.scrollTo(0, 0));
  }
  componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  }
  render() { return null; }
}

export default withRouter(ScrollToTop);
