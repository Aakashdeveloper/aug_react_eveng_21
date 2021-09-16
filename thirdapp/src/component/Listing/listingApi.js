import React, {Component} from 'react';
import axios from 'axios';

class Listing extends Component {
    constructor(props){
        super(props)

        this.state={
            hotellist:''
        }
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    Filter Here
                </div>
                <div className="col-md-10">
                    Content Here
                </div>
            </div>
        )
    }
}

export default Listing