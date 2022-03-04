
import { Link } from "react-router-dom";
import style from './Footer.module.css';

export default function Footer() {

    return (
        <div className={style.footer}>
            <div className={style.footertext}>
                <div className={style.box1}>
                    <h1 className={style.h1}>teach:able</h1>
                    <p className={style.p}>Join the more than 100,000 creators who use Teachable to share their knowledge. Easily create an online course or coaching business with our powerful yet simple all-in-one platform.</p>
                </div>
                <div className={style.box2}>
                    <div className={style.linktext}>
                        <h5>Explore</h5>
                        <div>
                            <Link to="/features" className={style.link}>Features</Link>
                        </div>
                        <div>
                            <Link to="/pricing" className={style.link}>Pricing</Link>
                        </div>
                        <div>
                            <Link to="/examples" className={style.link}>Examples</Link>
                        </div>
                        <div>
                            <Link to="/newsletter" className={style.link}>Newsletter</Link>
                        </div>
                        <div>
                            <Link to="/community" className={style.link}>Community</Link>
                        </div>
                        <div>
                            <Link to="/podcast" className={style.link}>Podcast</Link>
                        </div>
                    </div>
                    <div className={style.linktext}>
                        <h5>Company</h5>
                        <div>
                            <Link to="/about" className={style.link}>About</Link>
                        </div>
                        <div>
                            <Link to="/careers" className={style.link}>Careers</Link>
                        </div>
                        <div>
                            <Link to="/blog" className={style.link}>Blog</Link>
                        </div>
                        <div>
                            <Link to="/press" className={style.link}>Press</Link>
                        </div>
                        <div>
                            <Link to="/partners" className={style.link}>Partners</Link>
                        </div>
                        <div>
                            <Link to="/discover" className={style.link}>Discover</Link>
                        </div>
                    </div>
                    <div className={style.linktext}>
                        <h5>Support</h5>
                        <div>
                            <Link to="/knowledge" className={style.link}>Knowledge Base</Link>
                        </div>
                        <div>
                            <Link to="/contact-support" className={style.link}>Contact Support</Link>
                        </div>
                        <div>
                            <Link to="/contact-sales" className={style.link}>Contact Sales</Link>
                        </div>
                        <div>
                            <Link to="/privacy-policy" className={style.link}>Privacy Policy</Link>
                        </div>
                        <div>
                            <Link to="/terms" className={style.link}>Terms of Use</Link>
                        </div>
                        <div>
                            <Link to="/house" className={style.link}>House Rules</Link>
                        </div>
                        <div>
                            <Link to="/cookies-policy" className={style.link}>Cookies Policy</Link>
                        </div>
                        <div>
                            <Link to="/ethics-line" className={style.link}>Ethics Line</Link>
                        </div>
                        <div>
                            <Link to="/accessibility" className={style.link}>Accessibility</Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className={style.box3}>
                <div>
                    <p>Copyright © 2022 Teachable, Inc. All rights reserved.</p>
                </div>
                <div className={style.imagebox}>
                    <a href="https://www.google.com/">
                        <img src="/images/google.png" alt="Google" width="40px" />
                    </a>
                    <a href="https://www.youtube.com/">
                        <img src="/images/youtube.jpg" alt="YouTube" width="40px" />
                    </a>
                    <a href="https://www.facebook.com/">
                        <img src="/images/facebook.jpg" alt="Facebook" width="40px" />
                    </a>
                    <a href="https://www.instagram.com/?hl=en">
                        <img src="/images/instagram.jpg" alt="Instagram" width="40px" />
                    </a>
                    <a href="https://twitter.com/">
                        <img src="/images/twitter.png" alt="Twitter" width="40px" />
                    </a>
                    <a href="https://www.linkedin.com/">
                        <img src="/images/linkedin.png" alt="LinkedIn" width="40px" />
                    </a>
                </div>
            </div>
        </div>
    )
}