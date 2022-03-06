
import { Link } from "react-router-dom";
import Card from "./Card"
import style from "./Style.module.css";

export default function Arts() {

  const data = [
    {
      image: "/images/image15.webp",
      alt: "Arts",
      title: "Watercolor Painting",
      body: "Jump into the vibrant world of watercolor! After getting her start on youTube, Angela has infused her love of watercolor into an online course membership program.",
      profile: "/images/profile1.png",
      author: "Satya Prakash Mall"
    },
    {
      image: "/images/image16.webp",
      alt: "Arts",
      title: "Hand Lettering",
      body: "What started out as a hobby grew into a freelance career in illustration and lettering. Today, Lauren not only works with big clients, she also teaches her skills online",
      profile: "/images/profile2.png",
      author: "Jaswant Chaudhary"
    },
    {
      image: "/images/image17.webp",
      alt: "Arts",
      title: "Acrylic Pouring",
      body: "Deby’s love for acrylic pouring has inspired her to not only create as an artist, but also to share it with others via her blog, community groups, books and an online course.",
      profile: "/images/profile1.png",
      author: "Satya Prakash Mall"
    },
    {
      image: "/images/image18.webp",
      alt: "Arts",
      title: "Sketch Master",
      body: "Peter realized the need for professional training on the design tool he uses everyday. So, he created an online training course himself.",
      profile: "/images/profile2.png",
      author: "Jaswant Chaudhary"
    },
    {
      image: "/images/image19.webp",
      alt: "Arts",
      title: "Make Fabulous Cakes",
      body: "Darlene’s cake decorating adventure started when she first became a mom. Now, she's a pastry chef, blogger, and online course creator.",
      profile: "/images/profile1.png",
      author: "Satya Prakash Mall"
    },
    {
      image: "/images/image20.webp",
      alt: "Arts",
      title: "Paper flower",
      body: "With a passion to spread the love and joy of paper flowers, Catherine launched her online school Studio BOUQ to offer courses in creating realistic flowers.",
      profile: "/images/profile2.png",
      author: "Jaswant Chaudhary"
    }
  ]

  return (
    <div className={style.box}>
      <div className={style.text}>
        <h1>Arts</h1>
        <p>Share your artistic skills and build a business doing what you love—whether it be <br /> watercolor, lettering, cake decoration, or anything else you can dream up</p>
      </div>
      <div className={style.cardbox}>
        {
          data.map((item) => {
            return <Link className={style.link}>
              <Card
                image={item.image}
                alt={item.alt}
                title={item.title}
                body={item.body}
                profile={item.profile}
                author={item.author}
              />
            </Link>
          })}
      </div>
    </div>
  )
}