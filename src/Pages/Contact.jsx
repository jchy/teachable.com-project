
import style from "./Contact.module.css";

export default function Contact() {

    return (
        <div className={style.contact}>
            <h1>Contact Us from below given Descriptions to any One</h1>
            <div className={style.box}>
                <div className={style.box1}>
                    <img src="/images/profile.png" alt="Satya" />
                </div>
                <div className={style.box2}>
                    <h3>Name: Satya Prakash Mall</h3>
                    <p>Description: Creator of this Website</p>
                    <h3>About: I am a Full Stack Web Developer</h3>
                    <p>Qualification: B.Tech in Computer Science and Engineering</p>
                    <div className={style.btn}>
                       <a href="mailto:thesatyamall123@gmail.com"> Contact us with email </a>
                    </div>
                    <div className={style.btn}>
                       <a href="//api.whatsapp.com/send?phone=918953802687">Contact us on What's Up</a>
                    </div>
                </div>
            </div>
            <div className={style.box}>
                <div className={style.box1}>
                    <img src="/images/profile2.png" alt="Jaswant" />
                </div>
                <div className={style.box2}>
                    <h3>Name: Jaswant Chaudhary</h3>
                    <p>Description: Creator of this Website</p>
                    <h3>About: I am a Full Stack Web Developer</h3>
                    <p>Qualification: B.Tech in Computer Science and Engineering</p>
                    <div className={style.btn}>
                    <a href="mailto:recjaswant@gmail.com"> Contact us with email </a>
                    </div>
                    <div className={style.btn}>
                    <a href="//api.whatsapp.com/send?phone=919648976787">Contact us on What's Up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}