import React from "react";
import "./style.css"

const TeamCard = () => {
    return (
        <div class="teamCard" id="teamCard" style="width: 18rem;">
            <div class="card-header">
                Create Teams
            </div>
            <ul class="list-group list-group-flush" id="teamGroup">
                <li class="list-group-item" id="team">Team One Name</li>

                <input class="rounderCorners padding-x-20" list="input-drop" type="text" id="input-search"
                    name="fname" placeholder="Team Name">

                </input>

                <li class="list-group-item" id="team">Team Two Name</li>

                <input class="rounderCorners padding-x-20" list="input-drop" type="text" id="input-search"
                    name="fname" placeholder="Team Name">

                </input>
                <li class="list-group-item" id="team">Team Three Name</li>

                <input class="rounderCorners padding-x-20" list="input-drop" type="text" id="input-search"
                    name="fname" placeholder="Team Name">

                </input>

                <li class="list-group-item" id="team">Team Four Name</li>

                <input class="rounderCorners padding-x-20" list="input-drop" type="text" id="input-search"
                    name="fname" placeholder="Team Name">

                </input>

                <li class="list-group-item" id="team">Team Five Name</li>

                <input class="rounderCorners padding-x-20" list="input-drop" type="text" id="input-search"
                    name="fname" placeholder="Team Name">

                </input>

                <li class="list-group-item" id="team">Team Six Name</li>

                <input class="rounderCorners padding-x-20" list="input-drop" type="text" id="input-search"
                    name="fname" placeholder="Team Name">

                </input>

            </ul>

            <button class="button submit" type="submit" value="Search">Search</button>

        </div>
    )
};

export default TeamCard;