import React from 'react';
import './style.css';

const DemoCard = () => {
    return (
        <div className="container">
            <br />
            <div className="row justify-content-between">
                <div className="col-5 leftDiv">
                    <h1>Demo Name 1</h1>
                    <div className="row padThis">
                        <span className="col-10 trackedThing">Thing to track</span>
                        <button className="col-2 trackedThing" href="#">delete?</button>
                    </div>
                    <div className="row padThis">
                        <span className="col-10 trackedThing">Thing to track</span>
                        <button className="col-2 trackedThing" href="#">delete?</button>
                    </div>
                    <div className="row padThis">
                        <span className="col-10 trackedThing">Thing to track</span>
                        <button className="col-2 trackedThing" href="#">delete?</button>
                    </div>
                    <div className="row padThis">
                        <span className="col-10 trackedThing">Thing to track</span>
                        <button className="col-2 trackedThing" href="#">delete?</button>
                    </div>
                </div>

                <div className="col-5 rightDiv">
                    <h1>Demo Name 2</h1>
                    <div className="row">
                        <div className="col-9"></div>
                        <div className="col-3">
                            <button className="addBtn">Add thing</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9"></div>
                        <div className="col-3">
                            <div class="dropdown">
                                <button class="dropbtn">Team</button>
                                <div class="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoCard;