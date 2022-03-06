
import style from "./Style.module.css";

export default function Card({image,alt,title,body,profile,author}){

    return (
        <div className={style.card}>
            <img src={image} alt={alt} />
            <div className={style.cardtext}>
            <h3>{title}</h3>
            <p>{body}</p>
            </div>
            <div className={style.author}>
                <img src={profile} alt="" />
                <p>{author}</p>
            </div>
        </div>
    )
}