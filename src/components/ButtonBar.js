//where we see how many items are on the list and can navigate within it
import React from "react";

export default function ButtonBar(props) {
    //View
    return (
        <div className="container barShift">
            <div className="row">
                <div className="col-2 text-center fw-bold align-self-center">
                    {/* pull the length of the array from the parent */}
                    {props.count} items left
                </div>
                <div className="col-4 text-center">
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic outlined example"
                    >
                        <button
                            type="button"
                            id="all"
                            onClick={props.filtered}
                            className="btn btn-outline-dark fw-bold"
                        >
                            All
                        </button>
                        <button
                            type="button"
                            id="active"
                            onClick={props.filtered}
                            className="btn btn-outline-dark fw-bold"
                        >
                            Active
                        </button>
                        <button
                            type="button"
                            id="completed"
                            onClick={props.filtered}
                            className="btn btn-outline-dark fw-bold"
                        >
                            Completed
                        </button>
                    </div>
                </div>
                <div className="col-2">
                    <button
                        type="button"
                        onClick={props.checked}
                        className="btn btn-outline-dark fw-bold"
                    >
                        Complete All
                    </button>
                </div>
                <div className="col-2 text-end">
                    <button
                        type="button"
                        onClick={props.restored}
                        className="btn btn-outline-dark fw-bold"
                    >
                        Restore Completed
                    </button>
                </div>
                <div className="col-2 text-end">
                    <button
                        type="button"
                        onClick={props.cleared}
                        className="btn btn-outline-dark fw-bold"
                    >
                        Clear All
                    </button>
                </div>
            </div>
        </div>
    );
}
