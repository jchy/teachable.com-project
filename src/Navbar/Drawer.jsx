import { Link } from "react-router-dom";
import style from './Navbar.module.css';
import Dropdown from "./Dropdown";

export default function Drawer() {

    return (
        <div className={style.drawer}>
            <div className={style.drawercontent}>
                <div>
                    <Link to="/features" className={style.drawerlink}>
                        Features
                    </Link>
                </div>
                <div>
                    <Link to="/pricing" className={style.drawerlink}>
                        Pricing
                    </Link>
                </div>
                <div>
                    <Link to="/blog" className={style.drawerlink}>
                        Blog
                    </Link>
                </div>
                <div>
                    <Link to="/examples" className={style.drawerlink}>
                        Examples
                    </Link>
                </div>
                <div>
                    <Link to="/about" className={style.drawerlink}>
                        About
                    </Link>
                </div>
                <div>
                    <Dropdown />
                </div>
            </div>
            <div className={style.drawerbottom}>
                <div className={style.drawerlogin}>
                    <Link to="/login" className={style.drawerlink}>Log in</Link>
                </div>
                <div className={style.drawergetstarted}>
                    <Link to="/get-started" className={style.drawerlink}>Get started</Link>
                </div>
            </div>
        </div>
    )

}