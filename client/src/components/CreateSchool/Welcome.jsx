import { Link } from "react-router-dom";
import One from "../../images/One.svg";
import Two from "../../images/Two.svg";
import Three from "../../images/Three.svg";

const Welcome = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "30px", fontWeight: "350"}}>
          Welcome to your dashboard, Jaswant
        </p>
        <Link to="/myschools/createnewschool/tellus/welcome/chooseproduct" style={{ color: "black" }}>jaswant-s-school2.teachable.com</Link>
      </div>
      <div style={{padding:"50px 200px"}}>
      <div style={{width:"700px"}}>
        <div
          style={{
            display: "flex",
            border: "1px solid #C9C9C9",
           
            alignItems: "center",
            gap: "2rem",
            borderBottom: ".1px solid #C9C9C9"
          }}
        >
          <div style={{ textAlign: "center", padding: "25px" }}>
            <img src={One} alt="" />
          </div>
          <div>
            <p
              style={{ lineHeight: "5px", fontSize: "22px", fontWeight: "600" }}
            >
              Create your first product
            </p>
            <p style={{ overflow: "hidden", fontSize: "13px", paddingRight:"50px"}}>
              Create rich course content and coaching products for your
              students. When you give them a pricing plan, they'll appear on
              your site!
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "white", border: "1px solid #C9C9C9", borderTop:".00001px solid #C9C9C9"}}>
          <Link to="/myschools/createnewschool/tellus/welcome/chooseproduct" style={{textDecoration:"none",color:"black"}}>
        <div style={{ margin: "40px", display: "flex",borderRadius: "5px", border: "1px solid #C9C9C9", padding:"20px"}}>
          <div
            style={{
              height: "44px",
              width: "44px",
              border: ".01px solid #C9C9C9",
              borderRadius: "50%",
            }}
          ></div>
          <div style={{paddingTop:"10px", paddingLeft: "40px" }}>Create a product</div>
        </div>
        </Link>
        <Link to="/myschools/createnewschool/tellus/welcome/chooseproduct" style={{textDecoration : "none", color: "black" }}>
        <div style={{ margin: "40px", display: "flex",border: "1px solid #C9C9C9",borderRadius: "5px", backgroundColor:"whitesmoke", padding:"20px"}}>
          <div
            style={{
              height: "44px",
              width: "44px",
              border: ".01px solid #C9C9C9",
              borderRadius: "50%"
            }}
          ></div>
          <div style={{paddingTop:"10px",  paddingLeft: "40px"}}>Edit your product's sales page</div>
        </div>
        </Link>
      </div>
      </div>

{/* ---------------2nd BOX ------------------------------- */}

      <div style={{padding:"50px 200px"}}>
      <div style={{width:"700px"}}>
        <div
          style={{
            display: "flex",
            border: "1px solid #C9C9C9",
           
            alignItems: "center",
            gap: "2rem",
            borderBottom: ".1px solid #C9C9C9"
          }}
        >
          <div style={{ textAlign: "center", padding: "25px" }}>
            <img src={Two} alt="" />
          </div>
          <div>
            <p
              style={{ lineHeight: "5px", fontSize: "22px", fontWeight: "600" }}
            >
              Customize your website
            </p>
            <p style={{ overflow: "hidden", fontSize: "13px", paddingRight:"50px"}}>
            Customize your site with your pictures, colors, and content to engage your
students and inform them of your products.
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "white", border: "1px solid #C9C9C9", borderTop:".00001px solid #C9C9C9"}}>
        <Link to="/myschools/createnewschool/tellus/welcome/chooseproduct" style={{textDecoration : "none", color: "black" }}>
        <div style={{ margin: "40px", display: "flex",borderRadius: "5px", border: "1px solid #C9C9C9", padding:"20px"}}>
          <div
            style={{
              height: "44px",
              width: "44px",
              border: ".01px solid #C9C9C9",
              borderRadius: "50%",
            }}
          ></div>
          <div style={{paddingTop:"10px", paddingLeft: "40px" }}>Edit your homepage</div>
        </div>
        </Link>
        <Link to="/myschools/createnewschool/tellus/welcome/chooseproduct" style={{textDecoration : "none", color: "black" }}>
        <div style={{ margin: "40px", display: "flex",border: "1px solid #C9C9C9",borderRadius: "5px", padding:"20px"}}>
          <div
            style={{
              height: "44px",
              width: "44px",
              border: ".01px solid #C9C9C9",
              borderRadius: "50%"
            }}
          ></div>
          <div style={{paddingTop:"10px",  paddingLeft: "40px"}}>Edit your site page</div>
        </div>
        </Link>
        <Link to="/myschools/createnewschool/tellus/welcome/chooseproduct" style={{textDecoration : "none", color: "black" }}>
        <div style={{ margin: "40px", display: "flex",border: "1px solid #C9C9C9",borderRadius: "5px",  padding:"20px"}}>
          <div
            style={{
              height: "44px",
              width: "44px",
              border: ".01px solid #C9C9C9",
              borderRadius: "50%"
            }}
          ></div>
          <div style={{paddingTop:"10px",  paddingLeft: "40px"}}>Set up your domain name</div>
        </div>
        </Link>
      </div>
      </div>

{/* ---------------------------- 3rd BOX ---------------------------- */}
      
      <div style={{padding:"50px 200px"}}>
      <div style={{width:"700px"}}>
        <div
          style={{
            display: "flex",
            border: "1px solid #C9C9C9",
           
            alignItems: "center",
            gap: "2rem",
            borderBottom: ".1px solid #C9C9C9"
          }}
        >
          <div style={{ textAlign: "center", padding: "25px" }}>
            <img src={Three} alt="" />
          </div>
          <div>
            <p
              style={{ lineHeight: "5px", fontSize: "22px", fontWeight: "600" }}
            >
              Launch and grow your business
            </p>
            <p style={{ overflow: "hidden", fontSize: "13px", paddingRight:"50px"}}>
            Your site is looking good, your courses are set up. Learn about our tools that help
you build your audience and share your offerings.
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "white", border: "1px solid #C9C9C9", borderTop:".00001px solid #C9C9C9"}}>
      <Link to="/myschools/createnewschool/tellus/welcome/chooseproduct" style={{textDecoration : "none", color: "black" }}>
        <div style={{ margin: "40px", display: "flex",borderRadius: "5px", border: "1px solid #C9C9C9", padding:"20px"}}>
          <div
            style={{
              height: "44px",
              width: "44px",
              border: ".01px solid #C9C9C9",
              borderRadius: "50%",
            }}
          ></div>
          <div style={{paddingTop:"10px", paddingLeft: "40px" }}>Learn how to get your first student</div>
        </div>
        </Link>
        <Link to="/myschools/createnewschool/tellus/welcome/chooseproduct" style={{textDecoration : "none", color: "black" }}>
        <div style={{ margin: "40px", display: "flex",border: "1px solid #C9C9C9",borderRadius: "5px", backgroundColor:"whitesmoke", padding:"20px"}}>
          <div
            style={{
              height: "44px",
              width: "44px",
              border: ".01px solid #C9C9C9",
              borderRadius: "50%"
            }}
          ></div>
          <div style={{paddingTop:"10px",  paddingLeft: "40px"}}>Launch your school</div>
        </div>
        </Link>
      </div>
      </div>
    </>
  );
}
export default Welcome;
