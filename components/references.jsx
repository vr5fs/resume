import React from "react";

const References = (props) => {
    return (
        <div >
           <ul>
            <li><a href={props.reference1}>Programming Fundamentals Certificate</a></li>
            <li><a href={props.reference2}>Python Data Representations Certificate</a></li>
            <li><a href={props.reference3}>My Project GitHub link</a></li>
            <li><a href={props.reference4}>My Linkedin Profile</a></li>
           </ul>
        </div>
    );
};
export default References;