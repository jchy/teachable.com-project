
import style from "./Footer.module.css";

export default function SecondFooter(){

    return (
        <div className={style.box4}>
            <h1 className={style.text1}>Share what you know.</h1>
            <h1 className={style.text2}>Sign up free today.</h1>
            <div className={style.button}>
                <a href="https://lms-client-server-app.netlify.app/auth" className={style.link}>Get started</a>
            </div>
        </div>
    )
}