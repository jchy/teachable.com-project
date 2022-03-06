
import {Link } from "react-router-dom";
import Card from "./Card"
import style from "./Style.module.css";

export default function Business(){

    const data = [
        {
            image: "/images/image45.webp",
            alt: "Business",
            title: "StackSkills",
            body: "Backed by 500Startups and Tim Draper, StackSkills distributes over 475 courses to over 100,000 students.",
            profile: "/images/profile1.png",
            author: "Satya Prakash Mall"
        },
        {
            image: "/images/image46.webp",
            alt: "Business",
            title: "The New York Times",
            body: "The New York Times offers courses to both pre-college and professional audiences to teach them what the Times knows best: telling brand stories through video.",
            profile: "/images/profile2.png",
            author: "Jaswant Chaudhary"
        },
        {
            image: "/images/image47.webp",
            alt: "Business",
            title: "GSN3 Academy",
            body: "Software for networking professionals with 2M+ downloads. By creating online courses, GSN3 expanded its revenue streams.",
            profile: "/images/profile1.png",
            author: "Satya Prakash Mall"
        },
        {
            image: "/images/image48.webp",
            alt: "Business",
            title: "GetResponse",
            body: "Email marketing company GetResponse use Teachable to power their branded certification program worldwide.",
            profile: "/images/profile2.png",
            author: "Jaswant Chaudhary"
        },
        {
            image: "/images/image49.webp",
            alt: "Business",
            title: "Product Marketing Alliance",
            body: "To elevate the role of product marketing, PMA was created to offer people in the industry a community and educate others on how to transition in.",
            profile: "/images/profile1.png",
            author: "Satya Prakash Mall"
        },
        {
            image: "/images/image50.webp",
            alt: "Business",
            title: "Cover Insurance",
            body: "Cover insurance company offers a free defensive driving course to educate users and to offer discount incentives for their product.",
            profile: "/images/profile2.png",
            author: "Jaswant Chaudhary"
        }
    ]

    return (
        <div className={style.box}>
            <div className={style.text}>
            <h1>Teachable for business</h1>
            <p>Use Teachable within your organization to provide value to your customers, train <br /> employees, or sell courses to the general public.</p>
            </div>
            <div className={style.cardbox}>
                {
                data.map((item)=> {
                return <Link className={style.link}>
                         <Card 
                            image={item.image}
                            alt={item.alt}
                            title={item.title}
                            body = {item.body}
                            profile={item.profile}
                            author={item.author}
                        />
                </Link>
            })}
            </div>
        </div>
    )
}