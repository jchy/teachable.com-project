import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
// import React from "react";
import { Link } from "react-router-dom";
import StorageIcon from '@mui/icons-material/Storage';

import { createCourse, updateCourse } from '../../actions/posts';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setCourseData] = useState({ title: '', description: '', price: 0, tags: [], selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.posts.find((description) => description._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const clear = () => {
    setCurrentId(0);
    setCourseData({ title: '', description: '',price: 0, tags: [], selectedFile: '' });
  };

  useEffect(() => {
    if (!post?.title) clear();
    if (post) setCourseData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    if (currentId === 0) {
      dispatch(createCourse({ ...postData, name: user?.result?.name }, history));
      clear();
      alert('Your post has been created successfully');
    } else {
       dispatch(updateCourse(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <div style={{ border:"1px solid white", width:"300px",borderRadius:"10px",backgroundColor:"#E5FF04", color:"black", margin:"auto", height:"400px"}}>
       <h2 style={{paddingLeft:"20px"}}> Please Sign in to explore more features like</h2>
       <ul style={{ listStyle:"none"}}>
         <p>
         <li> ✅ Create your own courses</li>
         </p>
         <p><li> 🖌 Create update your courses</li></p>

         <p><li> ❌ Delete your courses</li></p>
         <p><li> ♥️ Like courses</li></p>
       </ul>
       <h3 style={{textAlign:"center"}}>
       <Link to='/auth' style={{textDecoration:"none", color : "blue"}}>Please click here to Sign in</Link>
       </h3>
      </div>
    );
  }

  const handleAddChip = (tag) => {
    setCourseData({ ...postData, tags: [...postData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setCourseData({ ...postData, tags: postData.tags.filter((tag) => tag !== chipToDelete) });
  };

  return (
    <Paper className={classes.paper} elevation={6} >
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post?.title}"` : 'Create a new Course'}</Typography>
        <TextField name="title" variant="outlined" label="Course Title" fullWidth value={postData.title} onChange={(e) => setCourseData({ ...postData, title: e.target.value })} />
        <TextField name="description" variant="outlined" label="Course Description" fullWidth multiline rows={4} value={postData.description} onChange={(e) => setCourseData({ ...postData, description: e.target.value })} />
        <TextField name="price" variant="outlined" label="Course Price" fullWidth value={postData.price} onChange={(e) => setCourseData({ ...postData, price: e.target.value })} />
        
        <div style={{ padding: '5px 0', width: '94%' }}>
          <ChipInput
            name="tags"
            variant="outlined"
            label="Add course tags"
            fullWidth
            value={postData.tags}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          />
        </div>
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setCourseData({ ...postData, selectedFile: base64 })} /></div>
        <div>
        <div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit">Submit</Button>
        </div>
        <div>
        <Button variant="contained" color="secondary" size="small" onClick={clear}  style={{backgroundColor:"#900C3F ", width:"500px", padding:"10px"}}>Clear</Button>
        </div>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
