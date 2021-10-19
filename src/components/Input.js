// where user will type in what they want to add to the list
import React, { Component } from 'react';

class Input extends Component {
    //Model
    constructor(props) {
        super(props)
        this.state = {
            
        };
    }

    //Controller
    componentDidMount() {
        // console.log("Input successfully loaded!");
    }

    //View
    render() {
        return (
            <p>Input Bar Goes Here</p>
        );
    }
}

export default Input;