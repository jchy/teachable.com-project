
import style from './Examples.module.css';
import {Link} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import SecondFooterExamples from '../Footer/SecondFooterExamples';
import { useState } from 'react';
import Arts from "./ExamplesComponents/Arts";
import Health from './ExamplesComponents/Health';
import Niche from './ExamplesComponents/Niche';
import Academics from './ExamplesComponents/Academics';
import Membership from './ExamplesComponents/Membership';
import Business from './ExamplesComponents/Business';

export default function Examples(){

    const [text,setText]= useState("arts")

    const handleClick = (val)=>{
        setText(val);
    }
    return (
        <div>
            <Navbar />
            <div className={style.box1}>
                <p>The best online courses live on <span>Teachable</span>. From passion projects to multi-million dollar businesses, entrepreneurs trust us to help build and grow their <span>knowledge businesses.</span> Ready to join?</p>
                <Link to="/sign_up" className={style.link}>Start for free</Link>
            </div>
            <div className={style.box3}>
                <div className={style.linkbox}>
                    <div>
                        <Link className={style.box3link} onClick={()=>handleClick("arts")}>Arts</Link>
                        <div className={"arts"===text? style.border: ""}></div>
                    </div>
                    <div>
                        <Link className={style.box3link} onClick={()=>handleClick("health")}>Health</Link>
                        <div className={"health"===text? style.border: ""}></div>
                    </div>
                    <div>
                        <Link className={style.box3link}  onClick={()=>handleClick("niche")}>Niche</Link>
                        <div className={"niche"===text? style.border: ""}></div>
                    </div>
                    <div>
                        <Link className={style.box3link} onClick={()=>handleClick("academics")}>Academics</Link>
                        <div className={"academics"===text? style.border: ""}></div>
                    </div>
                    <div>
                        <Link className={style.box3link} onClick={()=>handleClick("membership")}>Membership</Link>
                        <div className={"membership"===text? style.border: ""}></div>
                    </div>
                    <div>
                        <Link className={style.box3link} onClick={()=>handleClick("business")}>Business</Link>
                        <div className={"business"===text? style.border: ""}></div>
                    </div>
                </div>
                <div>
                   {
                       text === "health"? <Health/> : text === "niche"? <Niche /> : text === "academics"? <Academics /> : text === "membership"? <Membership />: text==="business"? <Business />:<Arts /> 
                   }
                </div>
            </div>
            <div className={style.box2}>
                <p>Market leaders use Teachable to enrich their brands and businesses.</p>
                <div className={style.box2images}>
                    <img src="/images/new_york_times.webp" alt="The New York Times" width="400px"/>
                    <img src="/images/image11.webp" alt="inTuiT" width="180px"/>
                    <img src="/images/image12.webp" alt="Shopify" width="180px"/>
                    <img src="/images/image13.webp" alt="Pearson" width="180px"/>
                    <img src="/images/image14.webp" alt="Penn Law" width="180px"/>
                </div>
            </div>
            <SecondFooterExamples />
        </div>
    )
}