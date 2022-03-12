// import React from 'react';
import {Link} from 'react-router-dom';

const TellUs = () => {
    return (
        <div style={{ height: "1024px"}}>
        <div style={{width:"650px", margin:"100px 100px 20px 200px"}}>
        <div>
            <p style={{fontSize:"30px", fontWeight:"350"}}>Tell us a little more about yourself</p>
        </div>
        <div style={{margin:"50px 0px"}}>
            <p>Your answers will help us build an experience to match your needs.</p>
        </div>
        <div style={{marginTop:"20px"}}>
            <div style={{color:"grey",fontSize:"14px"}}><label>Are you business owner?</label> </div>
           <select style={{padding:"8px", fontSize:"14px", width:"100%", border:".1px solid grey", borderRadius:"5px"}}>
                <option>Please choose and option...</option>
                <option>Yes, I work on my business full-time</option>
                <option>Yes, I work on my business part-time</option>
                <option>No, I created this account for my employer</option>
                <option>No, Just exploring</option>
            </select>
        </div>
        <div style={{marginTop:"20px"}}>
            <div style={{color:"grey",fontSize:"14px"}}><label>Which topic is most relevant to your business or content?</label> </div>
           <select style={{padding:"8px", fontSize:"14px", width:"100%", border:".1px solid grey", borderRadius:"5px"}}>
                <option>Please choose and option...</option>
                <option>Personal development</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Software Engineering</option>
            </select>
        </div>
        <div style={{marginTop:"20px"}}>
            <div style={{color:"grey",fontSize:"14px"}}><label>What category best describes your business stage?</label> </div>
           <select style={{padding:"8px", fontSize:"14px", width:"100%", border:".1px solid grey", borderRadius:"5px"}}>
                <option>Please choose and option...</option>
                <option>I prefer not to answer</option>
                <option> $0k - $5k in annual revenue</option>
                <option> $5k - $25k in annual revenue</option>
                <option> $25k - $100k in annual revenue </option>
            </select>
        </div>
        <div style={{marginTop:"20px"}}>
            <div style={{color:"grey",fontSize:"14px"}}><label>Are you already teaching an online course?</label> </div>
           <select style={{padding:"8px", fontSize:"14px", width:"100%", border:".1px solid grey", borderRadius:"5px"}}>
                <option>Please choose and option...</option>
                <option>Yes, I am already teaching online</option>
                <option>Yes, I teach online but through online course</option>
                <option>I am teaching, but not online</option>
                <option>I am just getting started</option>
            </select>
        </div>
        <div style={{marginTop:"20px"}}>
            <div style={{color:"grey", fontSize:"14px"}}><label>What is the size of your audience? (email list, social media followers, subscribers, etc)</label> </div>
           <select style={{padding:"8px", fontSize:"14px", width:"100%", border:".1px solid grey", borderRadius:"5px"}}>
                <option>Please choose and option...</option>
                <option>No one yet</option>
                <option> 1 - 100 people</option>
                <option> 100 - 1,000 people</option>
                <option> 1,000 - 10,000 people</option>
            </select>
        </div>
        </div>
        <div style={{textAlign:"right", marginRight:"100px", marginTop:"40px"}}>
            <Link to="/myschools/createnewschool/tellus/welcome" style={{marginTop:"20px", textDecoration : "none", color:"white", backgroundColor:"black", padding:"10px 30px",borderRadius:"5px"}}>NEXT</Link>
        </div>
        </div>
    )
}
export default TellUs;