import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const Test = () => (
    <div>Test</div>
);

const Test2 = () => (
    <div>Test2</div>
);

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <Link to="/test2">Test2</Link>

                <Route exact path="/" component={Test} />
                <Route path="/test2" component={Test2} />
            </div>
        );
    }
}

export default Home;