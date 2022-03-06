import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';



// import PropTypes from 'prop-types';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts.length && !isLoading) return 'No posts';

  return (
    isLoading ?  (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      { [1,2,3,4,5,6,7,8].map((item) => (
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Skeleton variant="rectangular" width={210} height={180} className={classes.skeleton}/>
          <Skeleton variant="rectangular" width={100} className={classes.skeleton}/>
          <Skeleton variant="rectangular" width={160} className={classes.skeleton}/>
          <Skeleton variant="rectangular" width={160} height={30} className={classes.skeleton}/>
          <br/>
          <br/>
          <br/>
          </Grid>
    ))}</Grid>) : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
