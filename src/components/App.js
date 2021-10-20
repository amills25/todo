import React, { Component } from "react";
import Input from "./Input";
import ListItem from "./ListItem";
import ButtonBar from "./ButtonBar";

class App extends Component {
    //Model
    constructor() {
        super();
        this.state = {
            filterValue: "active",
            toDoArray: [],
        };
    }

    //Controller
    componentDidMount() {
        // stringify and parse id from local storage and plug into id
    }
    componentDidUpdate() {
        // when state updates, store changes in localStorage
    }
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
            toDoArray: [newToDo, ...this.state.toDoArray],
        });
    };
    toDoListMap = () =>
        this.state.toDoArray.map((todo) => (
            <ListItem
                todo={todo}
                key={todo.id}
                handleItemComplete={this.handleItemComplete}
                handleItemX={this.handleItemX}
            />
        ));
    handleItemComplete = (id) => {
        // if check is clicked, change isChecked to true
        // check for an id
        // feed the to do item
        console.log(id);
        this.setState({
            toDoArray: this.state.toDoArray.map((todo) => {
                if (todo.id === id) {
                    todo.isChecked = !todo.isChecked;
                }
                return todo;
            }),
        });
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
    };
    filterArray() {
        // switch case inside of filter method to show the filterBy ("active", "completed", or "all")
        this.state.toDoArray.filter((status) => {
            switch (status) {
                case "active":
                    //only show to dos that are "active"
                    this.setState({
                        filterValue: "active",
                    });
                    break;
                case "completed":
                    //only show to dos that are "completed"
                    this.setState({
                        filterValue: "completed",
                    });
                    break;
                default:
                    //show to dos that are "actve" and "completed"
                    this.setState({
                        filterValue: "all",
                    });
                    break;
            }
        });
    }
    handleListClear() {
        // onClick method
    }
    viewCount() {
        // just returns the filtered length of the array
    }

    //View
    render() {
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

                {this.toDoListMap()}

                {/* ButtonBar will only display if there are list items present */}
                {this.state.toDoArray.length > 0 ? (
                    <ButtonBar toDoArray={this.state.toDoArray} />
                ) : null}

                <div className="row-1 fixed-bottom">
                    <div className="col text-center">
                        <img
                            src="./img/AMBlackXLTrans.jpg"
                            alt="Andrew Mills Logo"
                            width="30"
                            height="24"
                        />
                        Developed by Andrew Mills, 2021.
                    </div>
                </div>
            </>
        );
    }
}

export default App;
