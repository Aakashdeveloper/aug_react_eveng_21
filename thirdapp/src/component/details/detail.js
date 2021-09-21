import React, {Component} from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Link} from 'react-router-dom';
const url = "https://developerfunnel.herokuapp.com/hotelsdetails"

class Details extends Component {
    constructor(props) {
        super(props)

        this.state={
            details:'',
            rooms:[{},{},{}]
        }
    }
    render(){
        // let details = this.state.details
        let {details} = this.state
        let {rooms} = this.state
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{this.state.details.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={details.thumb} style={{height:400, width:1100}}/>
                            </div>
                            <div className="col-md-6">
                                <h3>
                                    <span className="label label-danger">
                                        {details.locality}
                                    </span>
                                </h3>
                                <h3>
                                    <span className="label label-warning">
                                        {details.address}
                                    </span>
                                </h3>
                                <h3>
                                    <span className="label label-info">
                                        Rs. {details.cost}
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <hr/>
                        <Tabs>
                            <TabList>
                                <Tab>Details</Tab>
                                <Tab>Contact</Tab>
                                <Tab>Rooms</Tab>
                            </TabList>

                            <TabPanel>
                                <h2>{details.name}</h2>
                                <p>{details.name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with</p>
                            </TabPanel>
                            <TabPanel>
                                <h2>{details.address}</h2>
                                <h2>78675656675</h2>
                            </TabPanel>
                            <TabPanel>
                                <h4>
                                    <span className="label label-info">
                                        {rooms[0].name}
                                    </span> &nbsp;
                                    <span className="label label-success">
                                        {rooms[1].name}
                                    </span> &nbsp;
                                    <span className="label label-primary">
                                        {rooms[2].name}
                                    </span>
                                </h4>
                            </TabPanel>
                        </Tabs>
                        <Link to={`/list/1`} className="btn btn-danger">Back</Link> &nbsp;
                        <Link to="/" className="btn btn-success">Proceed</Link>
                    </div>
                </div>
            </div>
        )
    }

    // api with async await 
    async componentDidMount(){
        let hotelid = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelid}`)
        this.setState({details: response.data[0],rooms:response.data[0].type})
    }
}

export default Details;