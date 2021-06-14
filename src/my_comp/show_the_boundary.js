import React from 'react';

import {Clock}  from  '../my_comp/clock';


export function Show_bound(props){
    const style ={
        border: '2px solid black',
        width: '200px',
        height:'50px',
        marginLeft: '25%'
    }
    return(
        <div style={style} > {<Clock />}   </div>
    );
}
