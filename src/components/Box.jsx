import { useState } from "react"

export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#222222" : "#50C878"
    }
    return (
        <div onClick={props.handleClick} style={styles} className='box-numbers'></div>
    )
}