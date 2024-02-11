import React from "react";

const Certificates = (props) => {
    return (
        <div >
           <ul>
            <li>{props.certificate1}</li>
            <li>{props.certificate2}</li>
            <li>{props.certificate3}</li>
            <li>{props.certificate4}</li>
           </ul>
        </div>
    );
};
export default Certificates;