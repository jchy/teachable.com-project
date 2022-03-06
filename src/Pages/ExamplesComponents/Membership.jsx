
import {Link } from "react-router-dom";
import Card from "./Card"
import style from "./Style.module.css";

export default function Membership(){

    const data = [
        {
            image: "/images/image39.webp",
            alt: "Membership",
            title: "Harmonica School",
            body: "Tomlin ran an in-person and online harmonica school. When he found himself strapped for time, he decided to focus on his reaching more students with online memberships",
            profile: "/images/profile1.png",
            author: "Satya Prakash Mall"
        },
        {
            image: "/images/image40.webp",
            alt: "Membership",
            title: "Trading Skills",
            body: "Sean Jantz created a stock market education community and subscription course to help those interested in learning about trading.",
            profile: "/images/profile2.png",
            author: "Jaswant Chaudhary"
        },
        {
            image: "/images/image41.webp",
            alt: "Membership",
            title: "Jewelry",
            body: "Jessica started the London Jewellery School over 10 years ago, and has brought her knowledge online with Jewellers Academy.",
            profile: "/images/profile1.png",
            author: "Satya Prakash Mall"
        },
        {
            image: "/images/image42.webp",
            alt: "Membership",
            title: "Coding Classes",
            body: "Learning to master the JavaScript ecosystem won’t happen overnight. Subscribe to Tyler’s membership for as long as you’re learning.",
            profile: "/images/profile2.png",
            author: "Jaswant Chaudhary"
        },
        {
            image: "/images/image43.webp",
            alt: "Membership",
            title: "Photoshop Training",
            body: "Dave has been teaching Photoshop and related programs for more than 25 years. He has created hundreds of courses which you can subscribe to.",
            profile: "/images/profile1.png",
            author: "Satya Prakash Mall"
        },
        {
            image: "/images/image44.webp",
            alt: "Membership",
            title: "Marketing",
            body: "Learn proven sales and marketing strategies at your own pace with mentorship by coach Edward Zia.",
            profile: "/images/profile2.png",
            author: "Jaswant Chaudhary"
        }
    ]

    return (
        <div className={style.box}>
            <div className={style.text}>
            <h1>Memberships</h1>
            <p>Create your own membership course on Teachable. Whether it’s a hobby or a <br /> professional training, some topics are better suited as a subscription-based <br /> membership.</p>
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