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
import { useHistory } from "react-router-dom";
import ReactPlayer from "react-player";

import { likeCourse, deleteCourse } from "../../../../actions/courses";
import useStyles from "./styles";
import styles from "./course.module.css";
import schoolLogo from "../../../../images/schoolLogo.svg";

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
    <div style={{border: '.1px solid whitesmoke',borderRadius:"7px", textAlign: 'center', backgroundColor: 'white'}}>
      <ButtonBase
        component="span"
        name="test"
        onClick={openCourse}
        style={{ overflow: "scroll" }}
      >
        {/* <CardMedia className={classes.media} image={course.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={course.title} /> */}
        <div style={{height:"300px"}}>
          <div style={{height:"50%", overflow: "hidden"}}>
            <img src={schoolLogo} alt="school"/>
          </div>
          <div style={{padding:"18px",backgroundColor:"white"}}>
            <p style={{ fontWeight: 'bold',lineHeight: '2px' }}>{course.name}'s School </p>
            <span style={{ fontSize: '14px', color:"grey" }}>{course.name.split(" ").join("-").toLowerCase()}-s-school.teachable.com</span>
          </div>
        </div>
      </ButtonBase>
    </div>
  );
};

export default Course;
