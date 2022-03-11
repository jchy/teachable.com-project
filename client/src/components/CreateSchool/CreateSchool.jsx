import React from "react";
import { Link } from "react-router-dom";

const CreateSchool = () => {
  return (
    <>
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
    </>
  );
};

export default CreateSchool;
