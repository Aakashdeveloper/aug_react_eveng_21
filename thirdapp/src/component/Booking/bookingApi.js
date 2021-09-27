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
        if(this.props.location){
            var qparams = this.props.location.search;
            if(qparams){
                var data = {
                    "status":qparams.split('&')[0].split('=')[1],
                    "date":qparams.split('&')[2].split('=')[1],
                    "bank":qparams.split('&')[3].split('=')[1]
                }
                fetch(`${url}/${qparams.split('&')[1].split('=')[1].split('_')[1]}`,
                {
                    method:'PATCH',
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(data)
                })
            }
        }
        axios.get(url).then((res) => {this.setState({bookings:res.data})})
    }
}


export default ViewBooking;