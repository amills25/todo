//where we see how many items are on the list and can navigate within it
import React, { Component } from 'react'

export default class ButtonBar extends Component {
    render() {
        return (
            <div class="container">
                <div class="row align-items-start">
                    <div class="col-2">
                        Counter
                    </div>
                    <div class="col-8 text-center">
                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary">All</button>
                            <button type="button" class="btn btn-outline-primary">Active</button>
                            <button type="button" class="btn btn-outline-primary">Completed</button>
                        </div>

                    </div>
                    <div class="col-2 text-end">
                        Clear All
                    </div>
                </div>
            </div>
        )
    }
}
