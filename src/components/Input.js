// where user will type in what they want to add to the list
import React, { Component } from 'react';

export default class Input extends Component {
    //Model
    constructor(props) {
        super(props)
        this.state = {
            currentToDo: ""
        };
    }

    //Controller
    componentDidMount() {
        // console.log("Input successfully loaded!");
    }
    createNewToDo() {
        
    }
    updateCurrentToDo() {
        
    }

    //View
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div class="input-group mb-3">
                            <button type="button" class="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </button>
                            <input type="text" class="form-control" placeholder="Enter your to do list item here" aria-label="toDoListItem" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}