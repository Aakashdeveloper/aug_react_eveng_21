import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
// var React = require('react')

const App = () => {
    return(
        <div>
            <Header/>
            <h1>Hiiii From React </h1>
            <h1>Hiiii From React2 </h1>
        </div>
    ) 
}

ReactDOM.render(<App/>, document.getElementById('root'));

/*
function App(){
    return(
        <h1>Hiiii From React </h1>
       
    )      
}*/