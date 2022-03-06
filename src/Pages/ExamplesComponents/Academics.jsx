
import {Link } from "react-router-dom";
import Card from "./Card"
import style from "./Style.module.css";

export default function Academics(){

    const data = [
        {
            image: "/images/image33.webp",
            alt: "Academics",
            title: "A-Levels Tutoring",
            body: "Why confine learning to in-person classes that require upfront rental costs for classroom space? With online courses, Tailored Tutors helps students ace your A-level exams from anywhere; and you can do the same.",
            profile: "/images/profile1.png",
            author: "Satya Prakash Mall"
        },
        {
            image: "/images/image34.webp",
            alt: "Academics",
            title: "Languages",
            body: "Mark is a high school language teacher turned language podcaster. In his search to provide the best medium for others to learn languages, Mark expanded his podcasts into online courses.",
            profile: "/images/profile2.png",
            author: "Jaswant Chaudhary"
        },
        {
            image: "/images/image35.webp",
            alt: "Academics",
            title: "3D Design",
            body: "Zacharias is a 3D designer who started a freelance career, he shifted his focus into helping others interested in 3D design achieve new levels of learning online.",
            profile: "/images/profile1.png",
            author: "Satya Prakash Mall"
        },
        {
            image: "/images/image36.webp",
            alt: "Academics",
            title: "Self-Published Authors",
            body: "Mark turned his own experience as a successful self-published author into a course for authors on self publishing and advertising.",
            profile: "/images/profile2.png",
            author: "Jaswant Chaudhary"
        },
        {
            image: "/images/image37.webp",
            alt: "Academics",
            title: "E-learning Courses",
            body: "With 3.6M+ subscribers, Henry Reich created an online course that distills how the world works into 60 bite-size lessons.",
            profile: "/images/profile1.png",
            author: "Satya Prakash Mall"
        },
        {
            image: "/images/image38.webp",
            alt: "Academics",
            title: "Music Production",
            body: "Every week, IO Music Academy hosts livestream courses with some of the world's best music producers. Students can interact and ask questions live or watch recordings at their own pace.",
            profile: "/images/profile2.png",
            author: "Jaswant Chaudhary"
        }
    ]

    return (
        <div className={style.box}>
            <div className={style.text}>
            <h1>Academics</h1>
            <p>Turn one-on-one tutoring and coaching into guided online courses students can <br /> take from the comfort of their living rooms.</p>
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