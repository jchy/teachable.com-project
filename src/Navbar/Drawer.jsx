import { Link } from "react-router-dom";
import style from './Navbar.module.css';
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function Drawer() {

    const [text,setText] = useState("");

    const handleText = (val)=>{
        setText(val)
    }

    return (
        <div className={style.drawer}>
            <div className={style.drawercontent}>
                <div>
                    <Link to="/features" className={style.drawerlink} onClick={()=>handleText("features")}>
                        Features
                    </Link>
                    <div className={"features"===text? style.border: ""}></div>
                </div>
                <div>
                    <Link to="/pricing" className={style.drawerlink} onClick={()=>handleText("pricing")}>
                        Pricing
                    </Link>
                    <div className={"pricing"===text? style.border: ""}></div>
                </div>
                <div>
                    <Link to="/contact" className={style.drawerlink} onClick={()=>handleText("contact")}>
                        Contact
                    </Link>
                    <div className={"contact"===text? style.border: ""}></div>
                </div>
                <div>
                    <Link to="/examples" className={style.drawerlink} onClick={()=>handleText("examples")}>
                        Examples
                    </Link>
                    <div className={"examples"===text? style.border: ""}></div>
                </div>
                <div>
                    <Link to="/about" className={style.drawerlink} onClick={()=>handleText("about")}>
                        About
                    </Link>
                    <div className={"about"===text? style.border: ""}></div>
                </div>
                <div>
                    <Dropdown />
                </div>
            </div>
            <div className={style.drawerbottom}>
                <div className={style.drawerlogin}>
                    <a href="https://lms-client-server-app.netlify.app/auth" className={style.drawerlink} onClick={()=>handleText("login")}>Log in</a>
                    <div className={"login"===text? style.border: ""}></div>
                </div>
                <div className={style.drawergetstarted}>
                    <a href="https://lms-client-server-app.netlify.app/auth" className={style.drawerlink} onClick={()=>handleText("sign_up")}>Get started</a>
                    <div className={"sign_up"===text? style.border: ""}></div>
                </div>
            </div>
        </div>
    )

}