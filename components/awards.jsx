import React from "react";

const Awards = (props) => {
    return (
        <div >
           <ul>
            <li>{props.award1}</li>
            <li>{props.award2}</li>
            <li>{props.award3}</li>
           </ul>
        </div>
    );
};
export default Awards;