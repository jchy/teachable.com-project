import React, { useState, useEffect } from "react";

const Profile = () => {
  const [userData, setUserData] = useState();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    return setUserData(user.result);
  }, []);
//   console.log("Profile", userData.googleId);
  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "2%",
          width: "600px",
          backgroundColor:"white",
         border: "1px solid #C9C9C9",
         margin: "100px 200px"
        }}
      >
        <div style={{border: "1px solid #C9C9C9"}}>
        <div style={{ textAlign: "center"}}>
          <img
            src={
              (userData?.imageUrl)
                ? (userData?.imageUrl)
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            style={{ borderRadius: "50%", height: "100px"}}
          />
          <p style={{color:"blue", fontSize: "20px"}}>Profile Pic</p>
        </div>
        <div style={{ textAlign: "left", marginLeft: "200px"}}>
          <p> <span style={{ fontWeight: "bold", color:"grey" }}>Name :</span> {userData?.name}</p>
          <p><span style={{ fontWeight: "bold" , color:"grey"}}>Email :</span> {userData?.email}</p>
          <p><span style={{ fontWeight: "bold" , color:"grey"}}>User ID :</span> {userData?._id ? userData?._id : userData?.googleId}</p>
        </div>
        </div>
        <h2 style={{fontWeight:"350"}}>About Me</h2>
        <p style={{ textAlign: "left", color:"grey", fontFamily: "Helvetica"}}>
          I am ambitious and driven. I thrive on challenge and constantly set
          goals for myself, so I have something to strive towards. I’m not
          comfortable with settling, and I’m always looking for an opportunity
          to do better and achieve greatness. In my previous role, I was
          promoted three times in less than two years.
        </p>
        <h2 style={{fontWeight:"350"}}>I'm a people person</h2>
        <p style={{ textAlign: "left", color:"grey", fontFamily:"Helvetica"}}>
          I'm a people person. I love meeting new people and learning about
          their lives and their backgrounds. I can almost always find common
          ground with strangers, and I like making people feel comfortable in my
          presence. I find this skill is especially helpful when kicking off
          projects with new clients. In my previous job, my clients’ customer
          satisfaction scores were 15 percent over the company average.
        </p>
      </div>
      

    </>
  );
};
export default Profile;
