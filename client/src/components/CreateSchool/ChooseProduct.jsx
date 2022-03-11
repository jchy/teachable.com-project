
import {Link} from "react-router-dom";
import plogo from "../../images/plogo.jpg"

const ChooseProduct = () => {
    return (
        <>
        <div>
            <p>Choose a product</p>
            <p>What kind of product would you like to offer?</p>
        </div>
        <div style={{margin:"0px 200px"}}>
            <Link style={{textDecoration : "none", color:"black"}}>
        <div style={{display: 'flex', padding:"10px",  border: '1px solid #C9C9C9', marginBottom: '50px', width: '550px'}}>
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
        <Link style={{textDecoration : "none", color:"black"}}>
        <div style={{display: 'flex', padding:"10px", border: '1px solid #C9C9C9',width: '550px'}}>
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
        </>
    )
}
export default ChooseProduct;