

import {Link} from "react-router-dom";
import style from "./Footer.module.css";

export default function SecondFooterExamples(){

    return (
        <div className={style.box5}>
            <h1 className={style.text3}><span>Start now</span> and turn your <span>knowledge</span> into a <span>profitable</span> online course</h1>
            <div className={style.button}>
                <Link to="/sign_up" className={style.link}>Get started</Link>
            </div>
        </div>
    )
}