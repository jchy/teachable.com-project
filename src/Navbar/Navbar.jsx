
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import style from "./Navbar.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import Drawer from "./Drawer";

export default function Navbar() {

    const [open,setOpen] = useState(false);

    const handleOpen = ()=>{
        setOpen(!open);
    }

    const [text,setText] = useState("");

    const handleText = (val)=>{
        setText(val)
    }

    return (
        <>
        <div className={style.navbar}>
            <div className={style.logo}>
                <Link to="/">
                    <img src="	https://teachable.com/static/images/common/teachable_wordmark.svg" alt="teach:able" />
                </Link>
            </div>
            <div className={style.navtext}>
                <div>
                    <Link to="/features" className={style.link} onClick={()=>handleText("features")}>
                        Features
                    </Link>
                    <div className={"features"===text? style.border: ""}></div>
                </div>
                <div>
                    <Link to="/pricing" className={style.link} onClick={()=>handleText("pricing")}>
                        Pricing
                    </Link>
                    <div className={"pricing"===text? style.border: ""}></div>
                </div>
                <div>
                    <Link to="/contact" className={style.link} onClick={()=>handleText("contact")}>
                        Contact
                    </Link>
                    <div className={"contact"===text? style.border: ""}></div>
                </div>
                <div>
                    <Link to="/examples" className={style.link} onClick={()=>handleText("examples")}>
                        Examples
                    </Link>
                    <div className={"examples"===text? style.border: ""}></div>
                </div>
                <div>
                    <Link to="/about" className={style.link} onClick={()=>handleText("about")}>
                        About
                    </Link>
                    <div className={"about"===text? style.border: ""}></div>
                </div>
                <div>
                    <Dropdown/>
                </div>
                <div className={style.login}>
                    <Link to="/login" className={style.link} onClick={()=>handleText("login")}>Log in</Link>
                    <div className={"login"===text? style.border: ""}></div>
                </div>
            </div>
            <div className={style.getstarted}>
                <Link to="/sign_up" className={style.link} onClick={()=>handleText("sign_up")}>Get started</Link>
                <div className={"sign_up"===text? style.border: ""}></div>
            </div>
            <div className={style.menuicon} onClick={handleOpen}>
                {open ? <CloseIcon /> : <MenuIcon />}
            </div>
        </div>
        <div>
        {
            open ? <Drawer /> : null
        }
        </div>
    </>
    )
}