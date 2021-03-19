import React from "react";
import "./style.css"

const StatCard = () => {
    return (
        <div class="card" id="statCard" style="width: 18rem;">
            <div class="card-header">
                Current Tracking Stat
            </div>
            <ul class="list-group list-group-flush" id="statGroup">
                <li class="list-group-item" id="primStat">Primary Stat</li>
                <li class="list-group-item" id="secStat">Secondary Stat</li>
                <li class="list-group-item" id="thirStat">Tertiary Stat</li>
            </ul>
        </div>
    )
};

export default StatCard;