import React from "react";

const Projects = (props) => {
    return (
        <div >
           <ul>
            <li>{props.project1}</li>
            <li>{props.project2}</li>
            <li>{props.project3}</li>
           </ul>
        </div>
    );
};
export default Projects;