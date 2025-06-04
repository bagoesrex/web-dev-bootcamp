// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import animals from "./data";
import cars from "./practice";

const [cat, dog] = animals
console.log(cat)
console.log(dog)

// const { name: catName, sound: catSound } = cat
// console.log(catSound)

// const { name = "Fluffy", sound = "Purr" } = cat

// const { name, sound, feedingRequirements: { food, water } } = cat
// console.log(water)



const [honda, tesla] = cars

const { coloursByPopularity: [hondaTopColour], speedStats: { topSpeed: hondaTopSpeed } } = honda
const { coloursByPopularity: [teslaTopColour], speedStats: { topSpeed: teslaTopSpeed } } = tesla


ReactDOM.render(
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
    </table>,
    document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
