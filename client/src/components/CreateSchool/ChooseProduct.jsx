
import {Link} from "react-router-dom";
import plogo from "../../images/plogo.jpg";

const ChooseProduct = () => {
    return (
        <div style={{ height: "1024px"}}>
        <div style={{margin:"200px 200px", marginBottom:"20px"}}>
            <p style={{fontSize:"35px", lineHeight:"2px"}}>Choose a product</p>
            <p>What kind of product would you like to offer?</p>
        </div>
        <div style={{margin:"0px 200px"}}>
            <Link to="/myschools/createnewschool/tellus/welcome/chooseproduct/form" style={{textDecoration : "none", color:"black"}}>
        <div style={{display: 'flex', padding:"10px",  border: '1px solid #C9C9C9', marginBottom: '30px', width: '550px', backgroundColor:"white", borderRadius: "5px" }}>
            <div>
            <img src={plogo} alt="course" height="100px"/>
            </div>
            <div style={{paddingLeft:"30px"}}>
                <div>
                    <p>Course</p>
                </div>
                <div style={{fontSize:"14px", color:"grey"}}>
                Create all of your content and assessments first and have students work independently.
                </div>
            </div>
        </div>
        </Link>
        <Link to="/myschools/createnewschool/tellus/welcome/chooseproduct/form" style={{textDecoration : "none", color:"black"}}>
        <div style={{display: 'flex', padding:"10px", border: '1px solid #C9C9C9',width: '550px', backgroundColor:"white", borderRadius: "5px"}}>
            <div>
            <img src={plogo} alt="course" height="100px" />
            </div>
            <div style={{paddingLeft:"30px"}}>
                <div>
                    <p>Coaching</p>
                </div>
                <div style={{fontSize:"14px", color:"grey"}}>
                  Work with people, often in live, scheduled sessions.
                </div>
            </div>
            </div>
            </Link>
        </div>
        </div>
    )
}
export default ChooseProduct;