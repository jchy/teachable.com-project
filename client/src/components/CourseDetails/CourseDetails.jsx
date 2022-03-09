import React, { useEffect } from "react";
import { Paper, Typography, CircularProgress, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory, Link } from "react-router-dom";
import ReactPlayer from 'react-player'

import { getCourse, getCoursesBySearch } from "../../actions/posts";
import CommentSection from "./CommentSection";
import useStyles from "./styles";
import Skeleton from "@mui/material/Skeleton";
import Grid from '@mui/material/Grid';

const Course = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCourse(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getCoursesBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  }, [post]);

  if (!post) return null;

  const openCourse = (_id) => history.push(`/posts/${_id}`);

  if (isLoading) {
    return (
       [1].map((item) => (
         <>
         <div className={classes.skeletonContainer}>
          <Grid>
            <Skeleton variant="rectangular" width={400} height={80} className={classes.skeleton}/>
            <Skeleton variant="rectangular" width={100} height={30} className={classes.skeleton}/>
            <Skeleton variant="rectangular" width={150} height={20} className={classes.skeleton}/>
            <Skeleton variant="rectangular" width={200} height={30} className={classes.skeleton}/>
            <Skeleton variant="rectangular" width={400} height={15} className={classes.skeleton}/>
            <Skeleton variant="rectangular" width={400} height={80} className={classes.skeleton}/>
            <Skeleton variant="rectangular" width={400} height={150} className={classes.skeleton}/>
            <Skeleton variant="rectangular" width={400} height={80} className={classes.skeleton}/>
            <Skeleton variant="rectangular" width={100} height={20} className={classes.skeleton}/>
            <Skeleton variant="rectangular" width={150} height={20} className={classes.skeleton}/>
            <Skeleton variant="rectangular" width={50} height={20} className={classes.skeleton}/>
            <Skeleton variant="rectangular" width={300} height={300} className={classes.skeleton}/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Skeleton variant="rectangular" width={700} height={500} className={classes.skeletonRight}/>
          </Grid>
          </div>
          </>
    ))
    );
  }

  const recommendedCourses = posts.filter(({ _id }) => _id !== post._id);

  return (
    <div style={{width:"70%", backgroundColor:"white", borderRadius:"5px"}}>
      <div className={classes.card}>
        <div className={classes.section}>
        <div className={classes.imageSection}>
          <ReactPlayer controls url={post.selectedFile} height='600px' width="800px" />
        </div>
        <div style={{background:"whitesmoke", margin:"20px", marginRight:"40px"}}>
          <div className={classes.title}>
            <span className={classes.titleS}>Course : </span> {post.title} <span className={classes.titleSS}>{moment(post.createdAt).fromNow()}</span>
          </div>
          <div className={classes.tags}>
            {post.tags.map((tag) => (
              <Link
                to={`/tags/${tag}`}
                style={{ textDecoration: "none", color: "#3f51b5" }}
              >
                {` #${tag} `}
              </Link>
            ))}
          </div>
          <div className={classes.createdBy}>
            <span className={classes.createdByS}>Course creator :</span>
            <Link
              to={`/creators/${post.name}`}
              style={{ textDecoration: "none", color: "#3f51b5" }}
            >
              {` ${post.name}`}
            </Link>
          </div>
          
          <div className={classes.createdBy}>
            <Link
              to={`/creators/${post.name}`}
              style={{ textDecoration: "none", color: "#3f51b5", fontWeight:"bold", color:"blue"}}
            >
              Click here view all the course of {` ${post.name}`}
            </Link>
          </div>
          
          <div className={classes.description}>
            <p className={classes.descriptionH}>Course description : </p> 
            <p className={classes.descriptionB}>{post.description}</p>
          </div>
          </div>
          <Divider style={{ margin: "10px 0px", marginLeft:"20px", marginRight:"40px" }} />
          <div className={classes.msg}>
            <strong>
              Please put all your quries in comment box we will get back to you
              asap
            </strong>
          </div>
          <Divider style={{ margin: "10px 0px", marginLeft:"20px", marginRight:"40px" }} />
          <div style={{width:"100%"}}>
          <CommentSection post={post} />
          </div>
          <Divider style={{ marginTop: "20px" }} />
        </div>
      </div>
      {!!recommendedCourses.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h6" style={{ color:"blue"}}>
            You might also like:
          </Typography>
          <Divider style={{ margin: "20px 0" }}  />
          <div className={classes.recommendedCourses}>
            {recommendedCourses.map(
              ({ title, name, description, likes, selectedFile, _id }) => (
                <>
                <div
                  className={classes.suggestioncard}
                  onClick={() => openCourse(_id)}
                  key={_id}
                >
                  <div>
                    Course : {title}
                  </div>
                  <div>
                    Author : {name}
                  </div>
                  <div>
                    Course Description : {description}
                  </div>
                  <div>
                    Likes: {likes.length}
                  </div>
                  <div>
                  <img src={selectedFile} width="200px" />
                  </div>
                </div>
                </>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
