
import style from './About.module.css';
import Carousel from 'react-elastic-carousel';
import { Link } from "react-router-dom";

export default function About() {

    return (
        <div>
            <div className={style.box1}>
                <div className={style.box1top}>
                    <h1>There had to be a better way. <br /> <span>So we built it.</span></h1>
                </div>
                <div className={style.box1bottom}>
                    <img src="/images/image51.webp" alt="" />
                </div>
            </div>
            <div className={style.box2}>
                <div>
                    Chapter One
                </div>
                <h1>Where else to start but at the beginning</h1>
                <p>We believe in the transformative power of knowledge. We believe it, because we’ve experienced and seen it first hand. How those 10,000 hours of expertise can swiftly turn into $10,000. Or even $100,000. And how empires can be built on goat milk, podcasting, and VR roller coasters.</p>
                <p>From the Bay area to Brooklyn, Fedora to Teachable, one person to over 150–our story is one of transformation too.</p>
            </div>

            <div className={style.box3}>
                <div className={style.box3left}>
                    <h1>" In the future, entrepreneurs will sell knowledge over products."</h1>
                    <p>Ankur Nagpal : Founder</p>
                </div>
                <div className={style.box3right}>
                    <img src="/images/image52.webp" alt="" />
                </div>
            </div>

            <div className={style.box4}>
                <h3>Studio apartment beginnings</h3>
                <p>Late one night in 2013, our founder Ankur Nagpal, put the finishing touches to what would become the predecessor of Teachable. A recent graduate of UC Berkeley and the newest resident of New York, Ankur had been instructing a course in marketing created through another course platform, when he decided that he could build something better. Something with more customization tools and a more profitable payment system.</p>
                <p>It was called Fedora. And as soon as its homepage was open for business, we started to welcome scores of experts in feng shui, handpanning, email marketing, coding, and sourdough baking, ready to craft their knowledge into beautiful courses.</p>
                <h3>The art of building a business</h3>
                <p>Just two years later, our team of one in a studio apartment in Williamsburg had grown to a team of 15 coders, marketers, and finance experts in an office in Manhattan. Valued at 8 million dollars, and growing each day in sign-ups and knowledge, it was time for a new name. And Teachable, became Teachable.</p>
            </div>

            <div className={style.box5}>
                <Carousel>
                    <div className={style.image}>
                        <img src="/images/image53.webp" alt="" />
                        <img src="/images/image54.webp" alt="" />
                    </div>
                    <div className={style.image}>
                        <img src="/images/image55.webp" alt="" />
                        <img src="/images/image56.webp" alt="" />
                    </div>
                </Carousel>
            </div>

            <div className={style.box6}>
                <h3>Into the future we go</h3>
                <p>By 2020 more than 100,000 instructors had joined the world of Teachable, and transformed their knowledge into world-class courses that have earned more than $500 million to date. To support our creators, our team grew too–doubling, tripling, and doubling again in experts, some of whom started out as creators on Teachable themselves, and who brought along ideas about expanding our offering to include workshops, authorship, coaching services, and annual tax filing to boot.</p>
                <p>As for the future? Well… it looks like freediving, propagating plants, wine pairing, drone flying, 3D rendering, and a lot more transformation. And we can’t wait.</p>
            </div>

            <div className={style.box7}>
                <h1>" <br /> Transparency is one of the four core internal values at Teachable. We believe in making every single aspect of our business transparent internally.</h1>
                <p>Ankur Nagpal : Founder</p>
            </div>

            <div className={style.box8}>
                <img src="/images/image57.jpg" alt="" />
            </div>
            <div className={style.boxcolor}>
                <div className={style.box9}>
                    <p>6 years in the making. Learn what makes Teachable unique.</p>
                </div>

                <div className={style.box10}>
                    <div>
                        Chapter Two
                    </div>
                    <h1>Actions speak louder</h1>
                    <p>We’re a team of over 150 makers, doers, designers, chefs, coders, marketers, writers, and learning devotees, who show up everyday to make Teachable better. Together we share, laugh, work hard, cocktail hour hard, and continue to learn from the world and one another—united by our curiosity and our quest for knowledge. These are the values we hold strong, and what you can expect when you partner with Teachable to build a business.</p>
                </div>

                <div className={style.box11}>
                    <div className={style.box11left}>
                        <img src="/images/image58.webp" alt="" />
                    </div>
                    <div className={style.box11right}>
                        <h3>Never not learning</h3>
                        <p>Like our members, we are always learning. We seek ways to grow our knowledge every day, and everything we build encourages our members to take the same path. We know that knowledge is transformative and more learning always leads to a better way of doing things.</p>
                        <h3>Opt for optimism</h3>
                        <p>Leading with optimism means assuming the best of your coworkers, collaborators, partners, and members. For us, optimism doesn’t mean rose-colored glasses, it means facing the future with confidence and hope, and treating obstacles as lessons to be learned.</p>
                        <h3>Worth the work</h3>
                        <p>Building a business takes persistence and that enduring focus on meaningful growth is one we share with our members. We don’t shy away from the hard work because that work brings growth of its own. Just like our members, we have a vision of a better future and that’s what drives us.</p>
                    </div>
                </div>

                <div className={style.box12}>
                    <div className={style.box12left}>
                        <img src="/images/image59.webp" alt="" />
                    </div>
                    <div className={style.box12right}>
                        <h3>Choose integrity</h3>
                        <p>We display our integrity every day as we operate with care, empathy, transparency, and truthfulness. The trust of our customers is essential. They put their faith in us to transform their business, and we deliver on that trust every single day.</p>
                        <h3>Together is better</h3>
                        <p>It takes some serious creativity and expertise from people in every part of our community to reach our goals and help our customers realize theirs. We are at our best when we work together, learn from each other, and support one another.</p>
                    </div>
                </div>

                <div className={style.box13}>
                    <div className={style.box13left}>
                        <img src="/images/image61.webp" alt="" />
                    </div>
                    <div className={style.box13right}>
                        <img src="/images/image60.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className={style.box14}>
                <div>
                    Chapter Three
                </div>
                <h1>Meet our wonderful team</h1>
                <p>We're a tight-knit group of curious creatures, always learning, and constantly seeking out new perspectives and ideas. Get to know our team—they're what makes Teachable, well, Teachable.</p>
            </div>

            <div className={style.boxcolor2}>
                <div className={style.box15}>
                    <img src="/images/image62.webp" alt="" />
                </div>
                <div className={style.box16}>
                    <div className={style.box16left}>
                        <img src="/images/image63.webp" alt="" />
                        <h3>Hamza Qureshi</h3>
                        <p>As a product designer on the creator success team, Hamza leads initiatives that give creators full control of their schools. He has a deep interest in design thinking, user experience principles, and spatial design, as well as record collecting, pop culture, random music trivia, and much more. He’s currently learning how to incorporate motion design into his work.</p>
                    </div>
                    <div className={style.box16right}>
                        <img src="/images/image64.webp" alt="" />
                        <h3>Calvin Sewell</h3>
                        <p>Calvin oversees system administration and management of Teachable's in-house information technology. Outside of work, he has a wide range of interests including martial arts, computer hardware, video-game hacking, sewing, biotechnology, and queer representation in children's media—but he’s not stopping there! He’s also currently learning about Japanese, mechanical keyboards, and orchid care.</p>
                    </div>
                </div>

                <div className={style.box17}>
                    <div className={style.box17left}>
                        <img src="/images/image65.webp" alt="" />
                        <h3>Caitlin Miller</h3>
                        <p>Cait manages content marketing at Teachable. While every day on the job is different, her main goal is finding inventive new ways to make our website a valuable and helpful resource for creators. She enjoys writing witty captions, running marathons, collecting vinyl records, and plant parenting. She’s currently learning how to embroider.</p>
                    </div>
                    <div className={style.box17right}>
                        <img src="/images/image66.webp" alt="" />
                        <h3>Sana Ahmed</h3>
                        <p>Planning is a natural talent of Sana’s, and it shows. At Teachable, she’s responsible for company culture events, onboarding, facilities, and more. Outside of work, she loves planning vacations on a budget, putting together travel itineraries with a mix of local and tourist stops.</p>
                    </div>
                </div>
                <div className={style.box18}>
                    <h1>Spear fishing tips, wine pairings, or payment gateway FAQs—ask us anything.</h1>
                    <Link to="/contact" className={style.link}>Contact us</Link>
                </div>
            </div>
        </div>
    )
}
