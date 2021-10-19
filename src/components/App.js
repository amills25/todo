import React, { Component } from "react";
import Input from './Input';
import ListItem from './ListItem';
import ButtonBar from './ButtonBar';

class App extends Component {
    //Model
    constructor() {
        super()
        this.state = {
            filterBy: -1,
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
                <img src="./img/AMBlackXLTrans.jpg" className="mx-auto d-block" alt="Andrew Mills Logo" width="200" height="200"/>
                <h1 className="text-center">TO-DO LIST</h1>
                <Input />                
                <ListItem /> {/* map through array to create list of ListItems */}
                <ButtonBar /> {/* ButtonBar will only display if there are list items present */}
                <div className="row-1 fixed-bottom">
                    <div className="col text-center">
                        <img src="./img/AMBlackXLTrans.jpg" alt="Andrew Mills Logo" width="30" height="24" />
                                Developed by Andrew Mills, 2021.
                    </div>
                </div>
            </>
        );
    }
}

export default App;