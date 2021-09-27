import React, {Component} from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotellist";

class CostFilter extends Component {
    costRoom = (event) => {
        let cost = (event.target.value).split('-');
        let tripId = sessionStorage.getItem('tripid');
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl;
        if(event.target.value == ""){
            costUrl = `${url}/${tripId}`;
        }else{
            costUrl = `${url}/${tripId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
            .then((response) => {this.props.costPerType(response.data)})
    }
    render(){
        return(
            <>
                <center>Cost Filter</center>
                <div onChange={this.costRoom}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/> All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1000-3000" name="room"/> 1000-3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3001-6000" name="room"/> 3001-6000
                    </label>
                    <label className="radio">
                        <input type="radio" value="6001-9000" name="room"/> 6001-9000
                    </label>
                    <label className="radio">
                        <input type="radio" value="9001-12000" name="room"/> 9001-12000
                    </label>
                </div>
            </>
        )
    }
}

export default CostFilter;