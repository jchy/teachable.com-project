
import style from "./Home.module.css";
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <div>
            <div className={style.box1}>
                <div className={style.rightbox1}>
                    <h1>Share what you know.<sup>TM</sup></h1>
                    <p>Create online courses and coaching services. Transform your experience and know-how into a thriving knowledge business.</p>
                    <div className={style.inputbox}>
                        <input type="text" placeholder="Your email here" />
                        <div>
                            <Link to="/get-started" className={style.link}>Get Started</Link>
                        </div>
                    </div>
                </div>
                <div className={style.imagebox1}>
                    <img src="/images/image1.webp" alt="" />
                </div>
            </div>
            <div className={style.box2}>
                <p>The master of hand lettering. The Aristotle of coding. The authority on drone flying. From online courses to coaching and beyond, this is where creative entrepreneurs build the future.</p>
            </div>

            <div className={style.box3}>
                <img src="/images/image2.jpg" alt="" />
                <p>Build a course, build a brand, build a business. <br /> Here is what Teachable can do for you.</p>
                <Link to="/get-started" className={style.box3link}>Get Started for free</Link>
            </div>

            <div className={style.box4}>
                <div className={style.imagebox4}>
                    <img src="/images/image3.webp" alt="" />
                </div>
                <div className={style.rightbox4}>
                    <p>Join more than 100,000 creators who’ve <span>sold over $1 billion in courses and coaching.</span></p>
                    <Link>View Features</Link>
                </div>
            </div>

            <div className={style.box5}>
                <div className={style.box5content}>
                    <div className={style.box5text1}>
                        <p>1</p>
                    </div>
                    <h4>Easy as it gets.</h4>
                    <p>In a matter of minutes, you’ll have access to everything you could ever need to create and sell online courses and coaching—our stress-free platform makes it easy—tech skills or no tech skills.</p>
                </div>
                <div className={style.box5content}>
                    <div className={style.box5text1}>
                        <p>2</p>
                    </div>
                    <h4>Teach the way you want to learn.</h4>
                    <p>This is the fun part. Show off your brand’s unique POV by using our customization tools to curate and personalize your content.</p>
                </div>
                <div className={style.box5content}>
                    <div className={style.box5text1}>
                        <p>3</p>
                    </div>
                    <h4>The small matter of getting paid.</h4>
                    <p>You didn't go into business to stress over money (quite the opposite) so we've got that covered. Payouts, taxes, affiliates, authors, that's our thing—you do yours.</p>
                </div>
            </div>

            <div className={style.box6}>
                 <div className={style.box6left}>
                     <div>
                        In my own words
                     </div>
                     <h1>
                     “What really has clinched it for me, why I chose Teachable, and why I love it and will continue to do my online courses with Teachable, is the great support that they have.”
                     </h1>
                     <p>Julia Stoian : Live. Write. Thrive</p>
                 </div>
                 <div className={style.box6right}>
                     <img src="/images/image4.webp" alt="" />
                 </div>
            </div>

            <div className={style.box7}>
                 <img src="/images/image5.webp" alt="" />
                 <div className={style.box7text}>
                     <div>Featured Course</div>
                     <h1>Your Home Filming Studio</h1>
                     <h3>by</h3>
                     <h3>Kevin Shen</h3>
                     <Link className={style.box7link}>View Course</Link>
                 </div>
            </div>

            <div className={style.box8}>
                <h1>Discover</h1>
                <p>See how successful creators are bringing their courses to life.</p>
            </div>

            <div className={style.box9}>
                  <div className={style.box9content}>
                      <h5>:art</h5>
                      <h1>Master the Garden Rose by Catherine Oxley</h1>
                      <p>Discover the artform of paper flower making to create realistic garden roses.</p>
                      <img src="/images/image6.webp" alt="" />
                      <Link className={style.box9link}>View Course</Link>
                  </div>
                  <div  className={style.box9content}>
                      <h5>:marketing</h5>
                      <h1>Podcast Like the Pros by Jay Clouse</h1>
                      <p>Find out how to produce a high-quality podcast—even with a small team and budget.</p>
                      <img src="/images/image7.webp" alt="" />
                      <Link className={style.box9link}>View Course</Link>
                  </div>
                  <div  className={style.box9content}>
                      <h5>:sports</h5>
                      <h1>The Confident Infielder by Doug Bernier</h1>
                      <p>Learn elite infield fundamentals straight from a former Major League Baseball player.</p>
                      <img src="/images/image8.webp" alt="" />
                      <Link className={style.box9link}>View Course</Link>
                  </div>
            </div>

            <div className={style.box10}>
                <div className={style.box10left}>
                    <h1>Teachable Quickstart Webinar</h1>
                    <p>Learn how to create your own online school and set up your first course using Teachable (without any technical headaches).</p>
                    <Link className={style.box9link}>Register for webinar</Link>
                </div>
                <div className={style.box10right}>
                    <img src="/images/image9.webp" alt="" />
                </div>
            </div>

            <div className={style.box11}>
                <div className={style.box11left}>
                    <img src="/images/image10.webp" alt="" />
                </div>
                <div className={style.box11right}>
                    <p>Award-winning support for creators and businesses of all sizes and subjects.</p>
                    <Link to="/contact" className={style.box11link}>Contact us</Link>
                </div>
            </div>
        </div>
    )
}