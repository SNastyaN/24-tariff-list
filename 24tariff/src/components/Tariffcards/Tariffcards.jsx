import st from './style.module.scss'
import Item from '../Item/Item';
function Tariffcard(props){
    console.log(props);
    return (
        <div className={st.card}>
            {
                props.arr.map((item, index)=>(
                <Item item={item} key={index}/>))
            }

        </div>
    )
}
 export default Tariffcard;