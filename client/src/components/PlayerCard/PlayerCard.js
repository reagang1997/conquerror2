import React from "react";
import "./style.css"

const PlayerCard = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        {/* This next bit will be appended in a list on the working version. This is mockup */}
                        <div className="inputGroup">
                            <input id="option1" name="option1" type="checkbox" />
                            <label for="option1">Option One</label>
                        </div>
                    </div>
                    <div className="col">

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Player's name" aria-label="Player's name" aria-describedby="button-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PlayerCard;