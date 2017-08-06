import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRoute } from 'react-router-dom';

import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import Test1 from '../container/test1/Test1';
import Test2 from '../container/test2/Test2';
import HomeAcloud from '../container/home_acloud/HomeAcloud';
import LatestEvents from '../container/latest_events/LatestEvents';
import Solution from '../container/solution/Solution';

import './Root.css';

class Root extends Component {
  // componentDidMount() {
  //   this.container.style.minHeight = document.body.scrollHeight / 10 + 'rem';
  //   document.body.style.fontSize = '1.6rem';
  // }
  render() {
    return (
      <Router>
        <div ref={ref => this.container = ref} className="root-container container max-page-width" id="maxPageWidth">
          <Header />
          <div className="root-content">
            <Route path="/test1" component={Test1} />
            <Route path="/test2" component={Test2} />
            <Route exact path="/" component={HomeAcloud} />
            <Route path="/latest-events" component={LatestEvents} />
            <Route path="/solution" component={Solution} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Root;