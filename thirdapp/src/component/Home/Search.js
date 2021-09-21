import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const LocationUrl = "https://developerfunnel.herokuapp.com/location";
const HotelUrl = "https://developerfunnel.herokuapp.com/hotels?city=";

class Search extends Component {
    constructor(){
        super()
        console.log(">>>>>>inside constructor")
        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id} key={item._id}>{item.city_name}</option>
                )
            })
        }
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id} key={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }

    handleCity = (event) => {
        console.log(">>>>",event.target.value);
        const cityId = event.target.value;
        fetch(`${HotelUrl}${cityId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotels:data})
        })
    }

    handleHotel = (event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }

    render(){
        console.log(">>>>>>inside render")
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Your Trip With Us.
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>------Select Your City-------</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="hotelDropDown" onChange={this.handleHotel}>
                        <option>------Select Your Hotel-------</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    // on page load we have to call api 
    componentDidMount(){
        console.log(">>>>>>inside componentDidMount")
        ///  we get the data and update the state
        fetch(LocationUrl, {method: 'GET'})
        // return the promise
        .then((res) => res.json())
        // return the data
        .then((data) => {
            this.setState({location:data})
        })
        .catch((err)=>{
            throw err;
        })
    }
}


export default withRouter(Search);