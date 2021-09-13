import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Posts from './Posts';
import Profile from './Profile';
import Footer from './Footer';
import PostDetails from './PostDetails';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/post" component={Posts}/>
                <Route path="/post/:topic" component={PostDetails}/>
                <Route path="/profile" component={Profile}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;
