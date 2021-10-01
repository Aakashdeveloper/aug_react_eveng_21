import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo"
class Header extends Component {

    constructor(props){
        super(props)

        this.state={
            userdata:''
        }
    }

    handleLogout = () => {
        this.setState({userdata:''})
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userdata')
        this.props.history.push('/')
    }
    conditionalHeader = () => {
        if(this.state.userdata.name){
            let data = this.state.userdata;
            let outputarry = [data.name,data.email,data.phone,data.role]
            sessionStorage.setItem('userData',outputarry)
            return(
                <>
                    <li><Link>{this.state.userdata.name}</Link></li>
                    <li><button onClick={this.handleLogout}>LogOut</button></li>
                </>
            )
        }
        return(
            <>
                <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </>          
        )
    }
    render(){
        return (
            <div>
            <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Developer Hotels</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                {this.conditionalHeader()}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }


    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userdata:data
            })
        })
    }
}

export default withRouter(Header);