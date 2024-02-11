import React from "react";

const Info = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'left' }}>
            <table style={{ borderCollapse: 'collapse', width: '30%', textAlign: 'left', padding:'50px' , left:'50%' }}>
                <tbody>
                    <tr>
                        <td style={{verticalAlign: 'top'}}>Name: </td>
                        <td><b>J Rajeshwar Reddy</b></td>
                    </tr>
                    <tr>
                        <td style={{verticalAlign: 'top' }}>Email ID: </td>
                        <td><b>2211cs010204@mallareddyuniversity.ac.in</b></td>
                    </tr>
                    <tr>
                        <td style={{verticalAlign: 'top' }}>Phone number: </td>
                        <td><b>7826838987</b></td>
                    </tr>
                    <br />
                </tbody>
            </table>
        </div>
    );
};
export default Info;