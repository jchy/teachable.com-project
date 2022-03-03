
import {Link} from "react-router-dom";
import style from "./Footer.module.css";

export default function SecondFooter(){

    return (
        <div className={style.box4}>
            <h1 className={style.text1}>Share what you know.</h1>
            <h1 className={style.text2}>Sign up free today.</h1>
            <div className={style.button}>
                <Link to="/get-started" className={style.link}>Get started</Link>
            </div>
        </div>
    )
}