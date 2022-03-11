import React from 'react';
import { Grid} from '@mui/material';
import { useSelector } from 'react-redux';

import Course from './Course/Course';
// import useStyles from './CoursesStyles';

import Skeleton from '@mui/material/Skeleton';

let count = 0;

const Courses = ({ setCurrentId }) => {
  const { courses, isLoading } = useSelector((state) => state.courses);
  // const classes = useStyles();
  if(!courses.length && !isLoading)
    return 'No courses';
  const user = JSON.parse(localStorage.getItem('profile'));

  if(courses){
    courses?.map((course) => ((user?.result?.googleId === course?.creator || user?.result?._id === course?.creator)) ? count++ : null )
  }

  

  return (
    isLoading ?  (
      <Grid  container alignItems="stretch" spacing={3}>
      { [1,2,3,4].map((item) => (
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Skeleton variant="rectangular" width={210} height={180} />
          <Skeleton variant="rectangular" width={100} />
          <Skeleton variant="rectangular" width={160}/>
          <Skeleton variant="rectangular" width={160} height={30} />
          <br/>
          <br/>
          <br/>
          </Grid>
    ))}</Grid>) : (
      <div style={{display: 'flex', gap:"2.3rem", flexWrap:"wrap"}}>
        {courses?.map((course) => ((user?.result?.googleId === course?.creator || user?.result?._id === course?.creator))?
          (<div>
            <Course course={course} setCurrentId={setCurrentId} />
          </div>):null
        )}
        {count? null : "You do not have any school"}
      </div>
    )
  );
};

export default Courses;

