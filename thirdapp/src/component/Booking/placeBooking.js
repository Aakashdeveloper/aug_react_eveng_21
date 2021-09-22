import React, {Component} from 'react';

class PlaceBooking extends Component{
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.hotel_name,
            name:'',
            phone:'',
            email:'',
            cost:sessionStorage.getItem('cost')
        }
    }
    render(){
        return(
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        Place Booking
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Order Id</label>
                            <input className="form-control" readOnly name="id"
                            value={this.state.id}/>
                        </div>
                        <div className="form-group">
                            <label>Hotel Name</label>
                            <input className="form-control" readOnly name="hotel_name"
                            value={this.state.hotel_name}/>
                        </div>
                        <div className="form-group">
                            <label>Cost</label>
                            <input className="form-control" readOnly name="cost"
                            value={this.state.cost}/>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" name="name"
                            value={this.state.name}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" name="email"
                            value={this.state.email}/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input className="form-control" name="phone"
                            value={this.state.phone}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaceBooking;
