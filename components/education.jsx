import React from "react";

const Education = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'left' }}>
            <table style={{ borderCollapse: 'collapse', width: '25%', textAlign: 'left', padding:'30px' , left:'50%' }}>
                <tbody>
                    <tr>
                        <td style={{verticalAlign: 'top'}}>2024 - present</td>
                        <td><b>B.Tech</b> <br />MallaReddy University <br />CGPA - 9.2</td>
                    </tr>
                    <tr>
                        <td style={{verticalAlign: 'top' }}>2022</td>
                        <td><b>Intermediate</b> <br />Narayana Jr College <br />Percentage - 89.9</td>
                    </tr>
                    <tr>
                        <td style={{verticalAlign: 'top' }}>2020</td>
                        <td><b>Secondary School</b> <br />Narayana high school <br />Percentage - 92</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default Education;