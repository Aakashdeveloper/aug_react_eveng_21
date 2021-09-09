import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Posts from './component/Posts';
import Profile from './component/Profile';
import Footer from './component/Footer';

ReactDOM.render(
    <BrowserRouter>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/post">Posts</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/post" component={Posts}/>
        <Route path="/profile" component={Profile}/>
        <Footer/>
    </BrowserRouter>, document.getElementById('root')
)