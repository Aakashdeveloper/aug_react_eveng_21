import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/Listing/listingApi';
import Details from './component/details/detail';
import PlaceBooking from './component/Booking/placeBooking';
import BookingApi from './component/Booking/bookingApi';
import LoginComponent from './component/login/login';
import RegisterComponent from './component/login/Register';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/list/:id" component={Listing}/>
            <Route path="/details/:id" component={Details}/>
            <Route path="/booking/:hotel_name" component={PlaceBooking}/>
            <Route path="/viewBooking" component={BookingApi}/>
            <Route path="/login" component={LoginComponent}/>
            <Route path="/signup" component={RegisterComponent}/>
            <Footer/>
        </BrowserRouter>
    )
    
}

export default Routing