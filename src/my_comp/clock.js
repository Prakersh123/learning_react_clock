import React from "react";

export class Clock extends React.Component
{
    constructor(props){
        super(props)
        this.state ={
            date: new Date()
        }
    }
    componentDidMount()
    {
        this.timerID = setInterval(()=>this.tick_tick(),1000);
    }
    componentWillUnmount()
    {
        clearInterval(this.timerID);
    }
    tick_tick()
    {
        this.setState({
            date: new Date()
        })
    }
    render(){
        const style={
            margin:'1px'
        }
        return (
            <>
                <h1 style={style}> {this.state.date.toLocaleTimeString()}.</h1>
            </>    
        )

    }
}   