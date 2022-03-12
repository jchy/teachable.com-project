import React from "react";
import { Link } from "react-router-dom";

const CreateSchool = () => {

  const user = JSON.parse(localStorage.getItem("profile"));

  if(!user){
    return (
      <>
      <div
          style={{
            border: "1px solid white",
            width: "300px",
            borderRadius: "10px",
            backgroundColor: "rgb(255,247,220)",
            color: "black",
            height: "400px",
            margin: "200px 300px"
          }}
        >
          <h2 style={{ paddingLeft: "20px" }}>
            {" "}
            Please Sign in to explore more features like
          </h2>
          <ul style={{ listStyle: "none" }}>
            <p>
              <li> ✅ Create your own courses</li>
            </p>
            <p>
              <li> 🖌 Create update your courses</li>
            </p>

            <p>
              <li> ❌ Delete your courses</li>
            </p>
            <p>
              <li> ♥️ Like courses</li>
            </p>
          </ul>
          <h3 style={{ textAlign: "center" }}>
            <Link to="/auth" style={{ textDecoration: "none", color: "blue" }}>
              Please click here to Sign in
            </Link>
          </h3>
        </div>
      </>
    )
  }

  return (
    <div style={{ height: "1024px"}}>
      <div
        style={{
          padding: "30px",
          backgroundColor: "white",
          color: "grey",
          position: "fixed",
          top: "30%",
          left: "40%",
          width: "500px"
        }}
      >
        <div>
          <h4 style={{color:"black", fontWeight:"400", fontSize:"14px"}}>Name Your School</h4>
          <input type="text" placeholder="Your's School" style={{width: "440px", padding:"10px"}}/>
          <p style={{fontWeight:"400", fontSize:"12px"}}>You can always change this later</p>
        </div>
        <div
          style={{
            backgroundColor: "rgb(28,166,154)",
            borderRadius: "30px",
            height: "40px",
            paddingTop: "12px",
            width: "200px",
            textAlign:"center",
            margin: "auto",
            marginTop: "40px"

          }}
        >
          <Link to="/myschools/createnewschool/tellus" style={{ color:"white", textDecoration : "none"}}>Create New School</Link>
        </div>
        <div style={{ textAlign: "center",paddingTop:"30px"}}>
          <Link to="/myschools/createnewschool/tellus" style={{ color: "rgb(28,166,154)", textDecoration : "none", fontSize:"14px" }}>Skip for now</Link>
        </div>
      </div>
    </div>
  );
};

export default CreateSchool;
