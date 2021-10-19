import React, { Component } from "react";
import Input from './Input';
import ListItem from './ListItem';
import ButtonBar from './ButtonBar';

class App extends Component {
    constructor() {
        super()
        this.state = {
            menuAPIData: [{}]
        };
    }

    render() {
        return (
            <>
                <h1 className="text-center">TO-DO LIST</h1>
                <Input />
                {/* map of list items */}
                <ListItem />
                <ButtonBar />
            </>
        );
    }
}

export default App;