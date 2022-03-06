
import {Link } from "react-router-dom";
import Card from "./Card"
import style from "./Style.module.css";

export default function Niche(){

    const data = [
        {
            image: "/images/image27.webp",
            alt: "Niche",
            title: "Alec Steele Blacksmith",
            body: "Alec teaches everything you need to know about blacksmithing, from setting up your first forge to making your own tools.",
            profile: "/images/profile1.png",
            author: "Satya Prakash Mall"
        },
        {
            image: "/images/image28.webp",
            alt: "Niche",
            title: "Home Cooking",
            body: "From the popular Pro Home Cooks YouTube channel, Mike has expanded into a series of online courses on how to make sourdough and brew kombucha from your own home.",
            profile: "/images/profile2.png",
            author: "Jaswant Chaudhary"
        },
        {
            image: "/images/image29.webp",
            alt: "Niche",
            title: "UAV Coach",
            body: "With a community of 20,000+ drone pilots, UAV Coach offers online training in drone flight, cinematography, and more.",
            profile: "/images/profile1.png",
            author: "Satya Prakash Mall"
        },
        {
            image: "/images/image30.webp",
            alt: "Niche",
            title: "Houseplant Care",
            body: "After getting the same questions on her social media, Summer validated her idea via a Kickstarter and decided to build her course",
            profile: "/images/profile2.png",
            author: "Jaswant Chaudhary"
        },
        {
            image: "/images/image31.webp",
            alt: "Niche",
            title: "Minute Physics",
            body: "With 3.6M+ subscribers, Henry Reich created an online course that distills how the world works into 60 bite-size lessons.",
            profile: "/images/profile1.png",
            author: "Satya Prakash Mall"
        },
        {
            image: "/images/image32.webp",
            alt: "Niche",
            title: "Shoemaking",
            body: "Based in London, Amanda wanted to create a safe place for people to learn the craft of shoemaking from the comfort of their homes. 10 years on, she has thousands of students all over the world.",
            profile: "/images/profile2.png",
            author: "Jaswant Chaudhary"
        }
    ]

    return (
        <div className={style.box}>
            <div className={style.text}>
            <h1>Niche</h1>
            <p>Ever feel like your ideal course topic is too specific? There are hundreds of creators <br /> making money with niche topics on Teachable. Showcase and monetize your unique <br /> expertise in any field with online courses.</p>
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