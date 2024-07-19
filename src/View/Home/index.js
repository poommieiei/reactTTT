import React from "react";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


// function Page() {
//     const [click, setClick] = useState([]);

//     setClick(() => {

//     })
//     return
//     <div>

//     </div>
//         ;
// }

function HomePage() {
    const [click, setClick] = useState([]);

    function clickRed() {
        setClick([...click, { color: 'red' }])
        console.log(click);
    }
    function clickBlue() {
        setClick([...click, { color: 'blue' }])
        console.log(click);
    }
    function clickGreen() {
        setClick([...click, { color: 'green' }])
        console.log(click);
    }

    return (<>
        <div className="row">
            <label id="label">สีทั้งหมด</label>
            <div>
                <button onClick={() => { clickRed() }}>🔴</button>
                <button onClick={() => { clickBlue() }}>🔵</button>
                <button onClick={() => { clickGreen() }}>🟢</button>
            </div>


            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ลำดับ</th>
                        <th scope="col">color</th>
                    </tr>
                </thead>
                <tbody>
                    {click.map((color, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{color.color}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>);
}

export default HomePage;