import style from './card.module.css'
export  function Card(props){
    return(
        <div className={style.card}>
            <img src={props.img} alt="not exist" />
            <p>{props.title}</p>
            <p>$ {props.price}</p>
            <span>{props.category}</span>
        </div>
    )

}