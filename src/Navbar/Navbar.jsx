
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
                    <Link to="/features" className={style.link}>
                        Features
                    </Link>
                </div>
                <div>
                    <Link to="/pricing" className={style.link}>
                        Pricing
                    </Link>
                </div>
                <div>
                    <Link to="/blog" className={style.link}>
                        Blog
                    </Link>
                </div>
                <div>
                    <Link to="/examples" className={style.link}>
                        Examples
                    </Link>
                </div>
                <div>
                    <Link to="/about" className={style.link}>
                        About
                    </Link>
                </div>
                <div>
                    <Dropdown/>
                </div>
                <div className={style.login}>
                    <Link to="/login" className={style.link}>Log in</Link>
                </div>
            </div>
            <div className={style.getstarted}>
                <Link to="/get-started" className={style.link}>Get started</Link>
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