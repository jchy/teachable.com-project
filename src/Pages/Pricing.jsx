import { useState } from "react";
import styles from "./Pricing.module.css";

export default function Pricing() {
    const [planState, setPlanState] = useState(true);
    const [planOneState, setPlanOneState] = useState(false);
    const [planTwoState, setPlanTwoState] = useState(false);
    const [planThreeState, setPlanThreeState] = useState(false);
    const [planFourState, setPlanFourState] = useState(false);

    const handleMonthlyStateChange = () => {
        if (planState === true) {
            return
        }
        else {
            setPlanState(!planState);
        }

    }

    const handleAnnualStateChange = () => {
        if (planState === false) {
            return
        }
        else {
            setPlanState(!planState);
        }
    }

    return (
        <div>

            <div className={styles.IntroOuterDiv}>

                <div className={styles.IntroDiv}>
                    <div className={styles.IntroDivText}>
                        <h1>Unlimited products and students on all plans.</h1>
                        <h4>Not sure which plan is right for your business?</h4>
                        <button className={styles.signUpButton}>Contact Us</button>
                    </div>
                    <div className={styles.IntroDivImg}>
                        <img width="100%" src="https://lh3.googleusercontent.com/DIaviTjmGSqmwDcsCoxDZVQlxWfUzJ-jbG08eZ6HzuN5U8jXVKpfwp3q3ImCTTXxXjWZpVKj5t_m0FJ3xqY5m6wP1SgIP-aruQOiBrmrzaQ=-rw-w1518" alt=""></img>
                    </div>
                </div>

            </div>

            <div className={styles.PricingOuterDiv}>

                {planState === true ? (
                    <div className={styles.ButtonDiv}>
                        <button onClick={handleMonthlyStateChange} className={styles.monthlyselectedbutton}>Monthly</button>
                        <button onClick={handleAnnualStateChange} className={styles.annualbutton}>Annual</button>
                    </div>
                ) : (
                    <div className={styles.ButtonDiv}>
                        <button onClick={handleMonthlyStateChange} className={styles.monthlybutton}>Monthly</button>
                        <button onClick={handleAnnualStateChange} className={styles.annualselectedbutton}>Annual</button>
                    </div>
                )}

                <div className={styles.PlansDiv}>

                    <div className={styles.PlanDiv}>
                        <h2>Free</h2>
                        <h4>Share what you know. Get started on Teachable with our core set of features.</h4>
                        {planState === true ? (
                            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                                <h1>$0</h1>
                                <p>Per Month</p>
                            </div>
                        ) : (
                            <div>
                                <h1>$0</h1>
                            </div>
                        )}
                        <button className={styles.signUpButton}>Select Plan</button>
                        {planOneState === false ? (
                            <div>
                                <button onClick={() => setPlanOneState(!planOneState)} className={styles.ShowMoreButton1}>Show Features</button>
                                <div className={styles.largescreenfeaturesdiv}>
                                    <p>Includes all base features:</p>
                                    <li>Unlimited students</li>
                                    <li>$1 + 10% per transaction</li>
                                    <li>Instant payouts</li>
                                    <li>Unlimited courses</li>
                                    <li>Unlimited coaching services</li>
                                    <li>Product bundles</li>
                                    <li>Course design templates</li>
                                    <li>1 admin-level users</li>
                                    <li>Product support</li>
                                    <li>Third-party integrations</li>
                                    <li>Basic quizzes</li>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p>Includes all base features:</p>
                                <li>Unlimited students</li>
                                <li>$1 + 10% per transaction</li>
                                <li>Instant payouts</li>
                                <li>Unlimited courses</li>
                                <li>Unlimited coaching services</li>
                                <li>Product bundles</li>
                                <li>Course design templates</li>
                                <li>1 admin-level users</li>
                                <li>Product support</li>
                                <li>Third-party integrations</li>
                                <li>Basic quizzes</li>
                                <button onClick={() => setPlanOneState(!planOneState)} className={styles.ShowMoreButton1}>Hide Features</button>
                            </div>
                        )}
                    </div>

                    <div className={styles.PlanDiv}>
                        <h2>Basic</h2>
                        <h4>Grow your business. Graduate from the free plan with more advanced features.</h4>
                        {planState === true ? (
                            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                                <h1>$39</h1>
                                <p>Per Month</p>
                            </div>
                        ) : (
                            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                                <h1>$29</h1>
                                <p>Per Month</p>
                            </div>
                        )}
                        <button className={styles.signUpButton}>Select Plan</button>
                        {planTwoState === false ? (
                            <div>
                                <button onClick={() => setPlanTwoState(!planTwoState)} className={styles.ShowMoreButton2}>Show Features</button>
                                <div className={styles.largescreenfeaturesdiv}>
                                    <p>Includes everything in Free, plus:</p>
                                    <li>5% per transaction</li>
                                    <li>Instant payouts</li>
                                    <li>Members-only community</li>
                                    <li>2 admin-level users</li>
                                    <li>Product support</li>
                                    <li>Course creator training</li>
                                    <li>Custom domain support</li>
                                    <li>Coupon codes</li>
                                    <li>Drip course content</li>
                                    <li>Integrated email marketing</li>
                                    <li>Third-party integrations</li>
                                    <li>Private student community</li>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p>Includes everything in Free, plus:</p>
                                <li>5% per transaction</li>
                                <li>Instant payouts</li>
                                <li>Members-only community</li>
                                <li>2 admin-level users</li>
                                <li>Product support</li>
                                <li>Course creator training</li>
                                <li>Custom domain support</li>
                                <li>Coupon codes</li>
                                <li>Drip course content</li>
                                <li>Integrated email marketing</li>
                                <li>Third-party integrations</li>
                                <li>Private student community</li>
                                <button onClick={() => setPlanTwoState(!planTwoState)} className={styles.ShowMoreButton2}>Hide Features</button>
                            </div>
                        )}
                    </div>

                    <div className={styles.PlanDiv}>
                        <h2>Pro</h2>
                        <h4>Our most popular plan. Get advanced features designed to boost student engagement.</h4>
                        {planState === true ? (
                            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                                <h1>$119</h1>
                                <p>Per Month</p>
                            </div>
                        ) : (
                            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                                <h1>$99</h1>
                                <p>Per Month</p>
                            </div>
                        )}
                        <button className={styles.signUpButton}>Select Plan</button>
                        {planThreeState === false ? (
                            <div>
                                <button onClick={() => setPlanThreeState(!planThreeState)} className={styles.ShowMoreButton3}>Show Features</button>
                                <div className={styles.largescreenfeaturesdiv}>
                                    <p>Includes everything in Free, plus:</p>
                                    <li>No transaction fees</li>
                                    <li>Instant payouts</li>
                                    <li>5 admin-level users</li>
                                    <li>Priority product support</li>
                                    <li>Graded quizzes</li>
                                    <li>Advanced reports</li>
                                    <li>Unbranded website</li>
                                    <li>Course completion certificates</li>
                                    <li>Course compliance</li>
                                    <li>Integrated email marketing</li>
                                    <li>Integrated affiliate marketing</li>
                                    <li>Group coaching calls</li>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p>Includes everything in Free, plus:</p>
                                <li>No transaction fees</li>
                                <li>Instant payouts</li>
                                <li>5 admin-level users</li>
                                <li>Priority product support</li>
                                <li>Graded quizzes</li>
                                <li>Advanced reports</li>
                                <li>Unbranded website</li>
                                <li>Course completion certificates</li>
                                <li>Course compliance</li>
                                <li>Integrated email marketing</li>
                                <li>Integrated affiliate marketing</li>
                                <li>Group coaching calls</li>
                                <button onClick={() => setPlanThreeState(!planThreeState)} className={styles.ShowMoreButton3}>Hide Features</button>
                            </div>
                        )}
                    </div>

                    <div className={styles.PlanDiv}>
                        <h2>Business</h2>
                        <h4>Experience the very best. Scale your business with our most powerful set of features.</h4>
                        {planState === true ? (
                            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                                <h1>$299</h1>
                                <p>Per Month</p>
                            </div>
                        ) : (
                            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                                <h1>$249</h1>
                                <p>Per Month</p>
                            </div>
                        )}
                        <button className={styles.signUpButton}>Select Plan</button>
                        {planFourState === false ? (
                            <div>
                                <button onClick={() => setPlanFourState(!planFourState)} className={styles.ShowMoreButton4}>Show Features</button>
                                <div className={styles.largescreenfeaturesdiv}>
                                    <p>Includes everything in Free, plus:</p>
                                    <li>No transaction fees</li>
                                    <li>Instant payouts</li>
                                    <li>20 admin-level users</li>
                                    <li>Priority product support</li>
                                    <li>Manual student imports</li>
                                    <li>Bulk student enrollments</li>
                                    <li>Custom user roles</li>
                                    <li>Advanced theme customization</li>
                                    <li>Group coaching calls </li>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p>Includes everything in Free, plus:</p>
                                <li>No transaction fees</li>
                                <li>Instant payouts</li>
                                <li>20 admin-level users</li>
                                <li>Priority product support</li>
                                <li>Manual student imports</li>
                                <li>Bulk student enrollments</li>
                                <li>Custom user roles</li>
                                <li>Advanced theme customization</li>
                                <li>Group coaching calls </li>
                                <button onClick={() => setPlanFourState(!planFourState)} className={styles.ShowMoreButton4}>Hide Features</button>
                            </div>
                        )}
                    </div>

                </div>

            </div>

            <div className={styles.TenthDiv}>

                <div className={styles.TenthDivText}>
                    <div className={styles.topicHead}>
                        <div className={styles.headingBar}></div>
                        <p>In my own words</p>
                    </div>
                    <h1>“I made $169,000 from the launch of my first two online courses. Teachable made it incredibly easy to create high-quality products from scratch.”</h1>
                    <p>Pat Flynn : Smart Passive Income</p>
                </div>

                <div className={styles.TenthDivImg}>
                    <img width="80%" src="https://lh3.googleusercontent.com/0-Rl_V0Nuz9zbCLpdyOFeXNZdKT2NEfo6hgGysRV-_lZYmWdTpdevuE5YDdEes2owW-PYmWgS_hOhHoxgEuyQPzIXG8wsnw=-rw-w550-rw" alt=""></img>
                </div>

            </div>

            <div className={styles.LastDiv}>
                <div className={styles.LastDivHead}>
                    <h1>Share what you know.™</h1>
                    <h2>Sign up free today.</h2>
                </div>
                <button className={styles.GetStartedButton}>Get started</button>
            </div>

        </div>
    )
}