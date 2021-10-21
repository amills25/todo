//where we see how many items are on the list and can navigate within it
import React from "react";

export default function ButtonBar(props) {
    //Model

    //Controller

    //View
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-2">
                    {/* pull the length of the array from the parent */}
                    {props.count} items left
                </div>
                <div className="col-2"></div>
                <div className="col-4 text-center">
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic outlined example"
                    >
                        <button
                            type="button"
                            onClick={props.filterArray}
                            className="btn btn-outline-dark"
                        >
                            All
                        </button>
                        <button
                            type="button"
                            onClick={props.filterArray}
                            className="btn btn-outline-dark"
                        >
                            Active
                        </button>
                        <button
                            type="button"
                            onClick={props.filterArray}
                            className="btn btn-outline-dark"
                        >
                            Completed
                        </button>
                    </div>
                </div>
                <div className="col-2 text-end">
                    <button
                        type="button"
                        onClick={props.checked}
                        className="btn"
                    >
                        Complete All
                    </button>
                </div>
                <div className="col-2 text-end">
                    <button
                        type="button"
                        onClick={props.cleared}
                        className="btn"
                    >
                        Clear All
                    </button>
                </div>
            </div>
        </div>
    );
}
