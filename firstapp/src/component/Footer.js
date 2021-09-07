import React from 'react';

const Footer = (props) => {
    return(
        <React.Fragment>
            <hr/>
            <center>
                <h3>&copy; Developer Funnel {props.month} {props.year} </h3>
            </center> 
        </React.Fragment>
    )
}

export default Footer;