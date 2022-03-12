import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useDispatch } from "react-redux";
import moment from "moment";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
// import ReactPlayer from 'react-player'

import { likeCourse, deleteCourse } from "../../../actions/courses";
import useStyles from "./styles";

const Course = ({ course, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [likes, setLikes] = useState(course?.likes);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedCourse = course.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likeCourse(course._id));

    if (hasLikedCourse) {
      setLikes(course.likes.filter((id) => id !== userId));
    } else {
      setLikes([...course.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpOffAltIcon fontSize="small" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpOffAltIcon fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  const openCourse = (e) => {
    history.push(`/courses/${course._id}`);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid grey",
        cursor: "pointer",
        display: "flex",
        gap:"1rem",
        height:"150px",
        width:"90%", 
        overflow: "hidden",
        marginTop:"20px",
        borderRadius: "5px"
      }}
    >
      {/* <CardMedia className={classes.media} image={course.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={course.title} /> */}
      <div style={{ width: "200px" }}>
        <ReactPlayer
          controls
          url={course.selectedFile}
          height="150px"
          width="200px"
          style={{ backgroundColor: "black" }}
        />
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding:"5px"}}>
          <div style={{fontSize: "16px", fontWeight: "bold"}}>{course.title}</div>
          <div>
            {(user?.result?.googleId === course?.creator ||
              user?.result?._id === course?.creator) && (
              <div  name="edit">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentId(course._id);
                  }}
                  style={{ color: "red" }}
                  size="large"
                >
                  <EditOutlinedIcon
                    fontSize="default"
                  />
                </Button>
              </div>
            )}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent:"space-between", padding:"5px" }}>
          <div>{course.tags.map((tag) => `#${tag} `)}</div>
          <div >{moment(course.createdAt).fromNow()}</div>
        </div>
        <div style={{display: "flex", justifyContent:"space-between", padding:"5px"}}>
          <div style={{overflow: "scroll", fontSize: "12px", color: "grey", width: "70%", height: "40px"}}>
            <p >{course.description.split(" ").splice(0, 20).join(" ")}...</p>
          </div>
          <div >
            {(user?.result?.googleId === course?.creator ||
              user?.result?._id === course?.creator) && (
              <Button
                size="small"
                color="secondary"
                onClick={() => dispatch(deleteCourse(course._id))}
              >
                <DeleteIcon fontSize="small" /> &nbsp; Delete
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
