import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo"
class Header extends Component {

    constructor(props){
        super(props)

        this.state={
            userdata:'',
            username:'',
            imgurl:''
        }
    }

    handleLogout = () => {
        this.setState({userdata:''})
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userData')
        this.props.history.push('/')
    }
    conditionalHeader = () => {
        if(this.state.userdata.name || sessionStorage.getItem('username') !== null){
            if(this.props.location.search){
                const code = (this.props.location.search).split('=')[1];
                if(code){
                    return(
                       <>
                            <li>
                                <a>
                                    <img src={this.state.imgurl} style={{height:50,width:50}}/>
                                    Hi {sessionStorage.getItem('username')}
                                </a>
                            </li>
                       </>
                    )
                }
            }else{
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
            
        }
        return(
            <>
                <li>
                    <a href="https://github.com/login/oauth/authorize?client_id=930f92e500db2f4d357c">
                        Login With Github
                    </a>
                </li>
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
        if(this.props.location.search){
            const code = (this.props.location.search).split('=')[1];
            if(code){
                let requestedData = {
                    code:code
                }
                fetch('http://localhost:9900/oauth',{
                    method: 'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(requestedData)
                })
                .then((res) =>  res.json())
                .then((data) => {
                    console.log(data)
                    var user = data.name;
                    var img = data.avatar_url
                    sessionStorage.setItem('username',user);
                    this.setState({username:user, imgurl:img})
                })
            }
            

        }else{
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
}

export default withRouter(Header);