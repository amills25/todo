import React, { Component } from "react";
import Input from './Input';
import ListItem from './ListItem';
import ButtonBar from './ButtonBar';

class App extends Component {
    //Model
    constructor() {
        super()
        this.filterBy = -1;
        this.state = {
            toDoArray: [{  id: Date(), isChecked: false, wasDeleted: false, textValue: "" }]
        };
    }

    //Controller
    componentDidMount() {
        // stringify and parse id from local storage and plug into id

    }
    toDoListMap() {
        // toDoArray.map((todo, index) => {
        //     return (
        //         todo
        //         key = {index or todo.id}
        //         data = {todo}
        //     )
        // })
    }
    filterArray() {
        // switch case inside of filter method to show the filterValue ("all", "completed", or "active")

    }
    handleClear() {
        // onclick method

    }
    viewCount() {
        // just returns the filtered length of the array

    }

    //View
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