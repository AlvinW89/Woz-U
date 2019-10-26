import React from 'react';
import { render } from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import Things from './screens/Things';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const App = () =>
(
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/things">Things</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/things" component={Things} />
        </div>
    </Router>
);


render(<App />, document.getElementById('root'));
