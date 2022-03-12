// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Typography, Paper } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import FileBase from 'react-file-base64';
// import { useHistory } from 'react-router-dom';
// import ChipInput from 'material-ui-chip-input';
// import { Link } from "react-router-dom";
// import StorageIcon from '@mui/icons-material/Storage';

// import { createCourse, updateCourse } from '../../actions/courses';
// import useStyles from './styles';

// const Form = ({ currentId, setCurrentId }) => {
//   const [courseData, setCourseData] = useState({ title: '', description: '', price: 0, tags: [], selectedFile: '' });
//   const course = useSelector((state) => (currentId ? state.courses.courses.find((description) => description._id === currentId) : null));
//   const dispatch = useDispatch();
//   const classes = useStyles();
//   const user = JSON.parse(localStorage.getItem('profile'));
//   const history = useHistory();

//   const clear = () => {
//     setCurrentId(0);
//     setCourseData({ title: '', description: '',price: 0, tags: [], selectedFile: '' });
//   };

//   useEffect(() => {
//     if (!course?.title) clear();
//     if (course) setCourseData(course);
//   }, [course]);

//   const handleSubmit = async (e) => {
//     if (currentId === 0) {
//       dispatch(createCourse({ ...courseData, name: user?.result?.name }, history));
//       clear();
//       alert('Your course has been created successfully');
//     } else {
//        dispatch(updateCourse(currentId, { ...courseData, name: user?.result?.name }));
//       clear();
//     }
//   };

//   if (!user?.result?.name) {
//     return (
//       <div style={{ border:"1px solid white", width:"300px",borderRadius:"10px",backgroundColor:"#E5FF04", color:"black", margin:"auto", height:"400px"}}>
//        <h2 style={{paddingLeft:"20px"}}> Please Sign in to explore more features like</h2>
//        <ul style={{ listStyle:"none"}}>
//          <p>
//          <li> ✅ Create your own courses</li>
//          </p>
//          <p><li> 🖌 Create update your courses</li></p>

//          <p><li> ❌ Delete your courses</li></p>
//          <p><li> ♥️ Like courses</li></p>
//        </ul>
//        <h3 style={{textAlign:"center"}}>
//        <Link to='/auth' style={{textDecoration:"none", color : "blue"}}>Please click here to Sign in</Link>
//        </h3>
//       </div>
//     );
//   }

//   const handleAddChip = (tag) => {
//     setCourseData({ ...courseData, tags: [...courseData.tags, tag] });
//   };

//   const handleDeleteChip = (chipToDelete) => {
//     setCourseData({ ...courseData, tags: courseData.tags.filter((tag) => tag !== chipToDelete) });
//   };

//   return (
//     <div>
//       <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
//         <div>{currentId ? `Editing "${course?.title}"` : 'Create a new Course'}</div>
//         <TextField name="title" variant="outlined" label="Course Title" fullWidth value={courseData.title} onChange={(e) => setCourseData({ ...courseData, title: e.target.value })} />
//         <TextField name="description" variant="outlined" label="Course Description" fullWidth multiline rows={4} value={courseData.description} onChange={(e) => setCourseData({ ...courseData, description: e.target.value })} />
//         <TextField name="price" variant="outlined" label="Course Price" fullWidth value={courseData.price} onChange={(e) => setCourseData({ ...courseData, price: e.target.value })} />

//         <div style={{ padding: '5px 0', width: '94%' }}>
//           <ChipInput
//             name="tags"
//             variant="outlined"
//             label="Add course tags"
//             fullWidth
//             value={courseData.tags}
//             onAdd={(chip) => handleAddChip(chip)}
//             onDelete={(chip) => handleDeleteChip(chip)}
//           />
//         </div>
//         <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setCourseData({ ...courseData, selectedFile: base64 })} /></div>
//         <div>
//         <div>
//         <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit">Submit</Button>
//         </div>
//         <div>
//         <Button variant="contained" color="secondary" size="small" onClick={clear}  style={{backgroundColor:"#900C3F ", width:"500px", padding:"10px"}}>Clear</Button>
//         </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;

import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useHistory } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import { Link } from "react-router-dom";
import StorageIcon from "@mui/icons-material/Storage";

import { createCourse, updateCourse } from "../../../actions/courses";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    creating: "course",
    tags: [],
    selectedFile: "",
  });
  const course = useSelector((state) =>
    currentId
      ? state.courses.courses.find(
          (description) => description._id === currentId
        )
      : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  const clear = () => {
    setCurrentId(0);
    setCourseData({
      title: "",
      description: "",
      creating: "course",
      tags: [],
      selectedFile: "",
    });
  };

  useEffect(() => {
    if (!course?.title) clear();
    if (course) setCourseData(course);
  }, [course]);

  const handleSubmit = async (e) => {
    if (currentId === 0) {
      dispatch(
        createCourse({ ...courseData, name: user?.result?.name }, history)
      );
      clear();
      alert("Your course has been created successfully");
    } else {
      dispatch(
        updateCourse(currentId, { ...courseData, name: user?.result?.name })
      );
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <div
        style={{
          border: "1px solid white",
          width: "300px",
          borderRadius: "10px",
          backgroundColor: "#E5FF04",
          color: "black",
          margin: "auto",
          height: "400px",
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
            <li> 🖌 Update your courses</li>
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
    );
  }

  const handleAddChip = (tag) => {
    setCourseData({ ...courseData, tags: [...courseData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setCourseData({
      ...courseData,
      tags: courseData.tags.filter((tag) => tag !== chipToDelete),
    });
  };

  return (
    <div style={{border: "1px solid grey", padding:"20px 70px", width: "540px", borderRadius: "10px", margin:"50px 200px", backgroundColor:"white"}}>
      <h1 style={{fontWeight: "350"}}>Update your course</h1>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div style={{fontSize:"14px", color: "grey"}}>
          <label>What would you like to rename your course?</label>
        </div>
        <div >
          <input
            name="title"
            placeholder="Course name"
            value={courseData.title}
            style={{padding:"10px", width:"500px"}}
            onChange={(e) =>
              setCourseData({ ...courseData, title: e.target.value })
            }
          />
        </div>
        <div style={{fontSize:"14px", color: "grey", marginTop:"20px"}}>
          <label>Update description of the course</label>
        </div>
        <div>
          <input
            name="description"
            placeholder="Course Description"
            value={courseData.description}
            style={{padding:"10px", width:"500px"}}
            onChange={(e) =>
              setCourseData({ ...courseData, description: e.target.value })
            }
          />
        </div>
        <div  style={{fontSize:"14px", color: "grey", marginTop:"20px"}}>
          <label>Add suitable tags for your course</label>
        </div>
        <div style={{}}>
          <ChipInput
          style={{padding:"10px", width:"500px", fontSize:"14px"}}
            name="tags"
            variant="outlined"
            label="Add course tags"
            value={courseData.tags}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          />
        </div>
        <div style={{width:"600px"}}>
        <div  style={{fontSize:"14px", color: "grey", marginTop:"20px"}}>
          <label>Update videos for this course</label>
        </div>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            style={{cursor:"pointer"}}
            onDone={({ base64 }) =>
              setCourseData({ ...courseData, selectedFile: base64 })
            }
          />
        </div>
        </div>
        <div>
          <div style={{ width: '600px', textAlign: 'center', marginTop:"30px"}}>
            <button style={{padding:"15px 100px", borderRadius:"50px",backgroundColor: "rgb(28,166,154)", color:"white", fontSize:"18px", border:"1px solid white", cursor: "pointer"}} type="submit">UPDATE</button>
          </div>
          <div style={{ width: '600px', textAlign: 'center', marginTop:"20px"}}>
            <div onClick={clear}  style={{color:"rgb(28,166,154)", cursor:"pointer"}}>
              CLEAR
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

{
  /* <div>
          {currentId ? `Editing "${course?.title}"` : "Create a new Course"}
        </div> */
}
