import React, { Component} from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDetails';

const url = "http://localhost:7601/placeBooking";

class ViewBooking extends Component {
    constructor(){
        super()

        this.state={
            bookings:''
        }
    }

    render(){
        return(
            <div>
                <BookingDisplay bookdata={this.state.bookings}/>
            </div>
        )
    }

    // api to get booking 
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({bookings:res.data})})
    }
}


export default ViewBooking;