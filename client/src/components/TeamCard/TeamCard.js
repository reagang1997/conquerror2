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

                <input type="text" id="input-team"
                    name="fname" placeholder="Team Name">
                </input>

                <li class="list-group-item" id="team">Team Two Name</li>

                <input  type="text" id="input-team"
                    name="fname" placeholder="Team Name">
                </input>
                
                <li class="list-group-item" id="team">Team Three Name</li>

                <input  type="text" id="input-team"
                    name="fname" placeholder="Team Name">
                </input>
                

                <li class="list-group-item" id="team">Team Four Name</li>

                <input  type="text" id="input-team"
                    name="fname" placeholder="Team Name">
                </input>
               

                <li class="list-group-item" id="team">Team Five Name</li>

                <input  type="text" id="input-team"
                    name="fname" placeholder="Team Name">
                </input>
              

                <li class="list-group-item" id="team">Team Six Name</li>

                <input type="text" id="input-team"
                    name="fname" placeholder="Team Name">
                </input>
                

            </ul>

            <button class="button add" type="add" value="Add">Add Another Team</button>

            <button class="button submit" type="submit" value="Search">Search</button>

        </div>
    )
};

export default TeamCard;