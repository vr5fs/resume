import React from "react";

const Skills = (props) => {
    return (
        <div >
           <ul>
            <li>{props.skill1}</li>
            <li>{props.skill2}</li>
            <li>{props.skill3}</li>
            <li>{props.skill4}</li>
            <li>{props.skill5}</li>
           </ul>
        </div>
    );
};
export default Skills;