import React from "react";

const Heading = (props) => {
    return (
        <div className='Header' style={{ backgroundColor: 'lightblue', padding: '0.01px'}}>
            <h3 className="text-primary">
                <span style={{color:'blue'}}>{props.head}</span>
            </h3>
        </div>
    );
};
export default Heading;