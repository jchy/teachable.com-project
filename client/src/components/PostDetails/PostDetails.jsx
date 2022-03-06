import React, { useEffect } from "react";
import { Paper, Typography, CircularProgress, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory, Link } from "react-router-dom";

import { getPost, getPostsBySearch } from "../../actions/posts";
import CommentSection from "./CommentSection";
import useStyles from "./styles";
import Skeleton from "@mui/material/Skeleton";
import Grid from '@mui/material/Grid';

const Post = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  }, [post]);

  if (!post) return null;

  const openPost = (_id) => history.push(`/posts/${_id}`);

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

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag) => (
              <Link
                to={`/tags/${tag}`}
                style={{ textDecoration: "none", color: "#3f51b5" }}
              >
                {` #${tag} `}
              </Link>
            ))}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">
            Created by:
            <Link
              to={`/creators/${post.name}`}
              style={{ textDecoration: "none", color: "#3f51b5" }}
            >
              {` ${post.name}`}
            </Link>
          </Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>
              Please put all your quries in comment box we will get back to you
              asap
            </strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <CommentSection post={post} />
          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
          />
        </div>
      </div>
      {!!recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(
              ({ title, name, message, likes, selectedFile, _id }) => (
                <div
                  style={{ margin: "20px", cursor: "pointer" }}
                  onClick={() => openPost(_id)}
                  key={_id}
                >
                  <Typography gutterBottom variant="h6">
                    {title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {name}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {message}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    Likes: {likes.length}
                  </Typography>
                  <img src={selectedFile} width="200px" />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default Post;
