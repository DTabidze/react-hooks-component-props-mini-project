import React from "react";

function Article (props) {
    let emoji = ''
    let amount = Math.floor((props.minutes - 1) / 5) + 1
    if (props.minutes < 30) {
        emoji = ' • '+'☕️'.repeat(amount) + props.minutes + ' min read'
    } else {
        amount = Math.floor((props.minutes - 1) / 10) + 1
        emoji = ' • '+'🍱'.repeat(amount) + props.minutes + ' min read'
    }

    return (
        <>
            <article>
                <h3>{props.title}</h3>
                {props.date ? <small>{props.date}{emoji}</small> : <small>January 1, 1970{emoji}</small>}
                <p>{props.preview}</p>
            </article>
        </>
    )
}

export default Article