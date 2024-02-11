import React from "react";

const Activity = (props) => {
    return (
        <div >
           <ul>
            <li>{props.activity1}</li>
            <li>{props.activity2}</li>
            <li>{props.activity3}</li>
           </ul>
        </div>
    );
};
export default Activity