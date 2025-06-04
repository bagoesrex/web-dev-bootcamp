import React from "react";


function Heading() {
    const date = new Date(2019, 2, 2, 20)
    const currentDate = date.getHours()

    let greeting

    const customStyle = {
        color: ""
    }

    if (currentDate < 12) {
        greeting = "Good Morning"
        customStyle.color = "red"
    } else if (currentDate < 18) {
        greeting = "Good Afternoon"
        customStyle.color = "green"
    } else {
        greeting = "Good Night"
        customStyle.color = "blue"
    }

    return <h1 className="heading" style={customStyle}>
        {greeting}
    </h1>
}

export default Heading


