import React from 'react'
import st from './style.module.scss'
function Item(props) {
    return (
        <div className={st[props.color]}>
            <h1>{props.name}</h1>
            <p>{props.tarif}</p>
            <p>{props.speed}</p>
            <p>{props.footer}</p>
        </div>)
}

export default Item
