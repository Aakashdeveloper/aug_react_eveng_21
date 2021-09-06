import React from 'react';

const Footer = (props) => {
    return(
        <div>
            <hr/>
            <center>
                <h3>&copy; Developer Funnel {props.month} {props.year} </h3>
            </center> 
        </div>
    )
}

export default Footer;