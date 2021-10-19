// where user will type in what they want to add to the list
import React, { Component } from 'react';

export default class Input extends Component {
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
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        Add Button
                    </div>
                    <div className="col-10">
                        <input type="text" className="form-control" placeholder="Type your to do list item here" aria-label="toDoListItem" />
                    </div>
                </div>
            </div>
        )
    }
}