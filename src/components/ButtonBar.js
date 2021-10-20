//where we see how many items are on the list and can navigate within it
import React from "react";

export default function ButtonBar(props) {
    //Model

    //Controller

    //View
    return (
        <div class="container">
            <div class="row align-items-start">
                <div class="col-2">
                    {/* pull the length of the array from the parent */}
                    {props.toDoArray.length} items left
                </div>
                <div class="col-8 text-center">
                    <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic outlined example"
                    >
                        <button
                            type="button"
                            onClick={props.filterArray}
                            class="btn btn-outline-dark"
                        >
                            Active
                        </button>
                        <button
                            type="button"
                            onClick={props.filterArray}
                            class="btn btn-outline-dark"
                        >
                            Completed
                        </button>
                        <button
                            type="button"
                            onClick={props.filterArray}
                            class="btn btn-outline-dark"
                        >
                            All
                        </button>
                    </div>
                </div>
                <div class="col-2 text-end">
                    <button type="button" class="btn">
                        Clear All
                    </button>
                </div>
            </div>
        </div>
    );
}
