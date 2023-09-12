import React, {useState} from 'react'
import st from './style.module.scss'
function Item(props) {
    const [pressed,setPressed]=useState(false);
    const handleChange = () => {
        setPressed(!pressed);
    }
    return (
        <div  className={st[props.item.color]} onClick={handleChange}>
            {pressed?"Выбран этот тариф":"тариф"}
            <h1>{props.item.name}</h1>
            <p>{props.item.tarif}</p>
            <p>{props.item.speed}</p>
            <p>{props.item.footer}</p>
        
        </div>)
}

export default Item
