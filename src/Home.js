import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }

  render() {
    return (
      <div>
        <Link to="/about">About -></Link>
      </div>
    );
  }
}
