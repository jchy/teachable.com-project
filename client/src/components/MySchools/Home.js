import React, { useState } from "react";
import {
  Container,
  Grow,
  Grid,
  AppBar,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

import { getCoursesBySearch } from "../../actions/courses";
import Courses from "./Courses/Courses";
import Form from "../Form/Form";
import Pagination from "../Pagination";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ErrorIcon from '@mui/icons-material/Error';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const MySchool = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const history = useHistory();

  const searchCourse = () => {
    if (search.trim() || tags) {
      dispatch(getCoursesBySearch({ search, tags: tags.join(",") }));
      history.push(
        `/courses/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history.push("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchCourse();
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) =>
    setTags(tags.filter((tag) => tag !== chipToDelete));

  // const { courses, isLoading } = useSelector((state) => state.courses);
  const user = JSON.parse(localStorage.getItem("profile"));

  if (!user) {
    return (
      <>
        <div
          style={{
            border: "1px solid white",
            width: "300px",
            borderRadius: "10px",
            backgroundColor: "rgb(255,247,220)",
            color: "black",
            height: "400px",
            margin: "200px 300px"
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
              <li> 🖌 Create update your courses</li>
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
      </>
    );
  }

  return (
    <div style={{ height: "1024px"}}>
      <div style={{display: "flex", margin:"40px", padding:"10px", backgroundColor:"rgb(255,247,220)"}}> <div style={{color:"red", marginRight:"20px"}}><ErrorIcon/></div> <div style={{fontSize:"14px"}}>You are already signed in.</div> </div>
      <div style={{ paddingLeft: "50px" }}>
        <p style={{ textAlign: "left" }}>Schools I Own</p>
        <div>
          <Courses setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
};

export default MySchool;
