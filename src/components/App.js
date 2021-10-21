import React, { Component } from "react";
import Input from "./Input";
import ListItem from "./ListItem";
import ButtonBar from "./ButtonBar";

class App extends Component {
    //Model
    constructor() {
        super();
        this.state = {
            filterValue: "all",
            toDoArray: JSON.parse(localStorage.getItem("todos")) || [],
        };
        console.log(localStorage);
        // localStorage.
    }

    //Controller
    createNewToDo = (textValue) => {
        //when the user types in the form, it will create a value
        //every time a new to do, we're creating a new toDoArray that is the exact same as it was, but with the newToDo added to it
        const newToDo = {
            id: Date.now(),
            isChecked: false,
            wasDeleted: false,
            textValue: textValue,
        };
        this.setState({
            ...this.state,
            filterValue: "all",
            toDoArray: [newToDo, ...this.state.toDoArray],
        });
        localStorage.setItem(
            "todos",
            JSON.stringify([newToDo, ...this.state.toDoArray])
        );
    };
    toDoListMap = () => {
        let tempList = [];
        tempList = this.state.toDoArray.filter((todo) => {
            if (!todo.wasDeleted) {
                if (this.state.filterValue === "active") {
                    //show to dos that are "actve" and "completed"
                    if (!todo.isChecked) {
                        return todo;
                    }
                } else if (this.state.filterValue === "completed") {
                    //only show to dos that are "completed"
                    if (todo.isChecked && !todo.wasDeleted) {
                        return todo;
                    }
                } else {
                    return todo;
                }
            }
        });
        return tempList;
    };
    handleItemComplete = (id) => {
        // if check is clicked, change isChecked to true
        // check for an id
        // feed the to do item
        this.setState({
            toDoArray: this.state.toDoArray.map((todo) => {
                if (todo.id === id) {
                    todo.isChecked = !todo.isChecked;
                }
                return todo;
            }),
        });
        localStorage.setItem(
            "todos",
            JSON.stringify([...this.state.toDoArray])
        );
    };
    handleItemX = (id) => {
        // if x is clicked, will change wasDeleted to true
        this.setState({
            toDoArray: this.state.toDoArray.map((todo) => {
                if (todo.id === id) {
                    todo.wasDeleted = !todo.wasDeleted;
                }
                return todo;
            }),
        });
        localStorage.setItem(
            "todos",
            JSON.stringify([...this.state.toDoArray])
        );
    };
    handleClearAll = () => {
        // onClick method
        // emtpy the list
        // have the button text change to "restore" for a toggle
        let clonedArray = this.state.toDoArray.map((a) => {
            return { ...a, wasDeleted: true };
        });
        this.setState({
            toDoArray: clonedArray,
        });
        localStorage.setItem("todos", JSON.stringify([...clonedArray]));
    };
    handleCompleteAll = () => {
        //onclick method
        //makes every item that hasn't been checked set to checked
        let clonedArray = this.state.toDoArray.map((a) => {
            return { ...a, isChecked: true };
        });
        this.setState({
            toDoArray: clonedArray,
        });
        localStorage.setItem("todos", JSON.stringify([...clonedArray]));
    };
    handleRestoreAll = () => {
        //onclick method
        //turns everything that has been "completed" back to "active"
        let clonedArray = this.state.toDoArray.map((a) => {
            return { ...a, isChecked: false };
        });
        this.setState({
            toDoArray: clonedArray,
        });
        localStorage.setItem("todos", JSON.stringify([...clonedArray]));
    };
    filterArray = (e) => {
        // filter through the array
        // switch case inside of filter method to show the filterBy ("active", "completed", or "all")
        this.setState({ filterValue: e.target.id });
    };

    //View
    render() {
        let listUsed = this.toDoListMap();
        let checked = this.handleCompleteAll;
        let cleared = this.handleClearAll;
        let restored = this.handleRestoreAll;
        let filtered = this.filterArray;
        return (
            <>
                <img
                    src="./img/AMBlackXLTrans.jpg"
                    className="mx-auto d-block"
                    alt="Andrew Mills Logo"
                    width="200"
                    height="200"
                />
                <h1 className="text-center">TO-DO LIST</h1>

                <Input createNewToDo={this.createNewToDo} />

                {listUsed.map((todo) => (
                    <ListItem
                        todo={todo}
                        key={todo.id}
                        handleItemComplete={this.handleItemComplete}
                        handleItemX={this.handleItemX}
                    />
                ))}

                {/* ButtonBar will only display if there are list items present */}
                {this.state.toDoArray.length > 0 ? (
                    <ButtonBar
                        toDoArray={this.state.toDoArray}
                        count={listUsed.length}
                        checked={checked}
                        cleared={cleared}
                        restored={restored}
                        filtered={filtered}
                    />
                ) : null}

                <br></br>
                <br></br>
            </>
        );
    }
}

export default App;
