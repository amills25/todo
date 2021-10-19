//where the user input displays in list form
import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        return (
            <div class="container">
                {/* map through array of to do items to make these rows */}
                <div class="row align-items-start">
                    <div class="col-2">
                        Checkbox
                    </div>
                    <div class="col-10">
                        <ul class="list-group">
                            <li class="list-group-item">A to do list item</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
