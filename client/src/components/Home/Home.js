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
import Courses from "../Courses/Courses";
import Form from "../Form/Form";
import Pagination from "../Pagination";
import useStyles from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
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

  return (
    <>
      <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "50px 100px 50px 100px",
            }}
          >
            <div style={{ width: "35%" }}>
              <TextField
                onKeyDown={handleKeyPress}
                name="search"
                variant="outlined"
                fullWidth
                label="Search Courses"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  backgroundColor: "white",
                  borderRadius: "none",
                  height: "55px",
                }}
              />
            </div>
            <div style={{ width: "35%" }}>
              <ChipInput
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
                fullWidth
                style={{ backgroundColor: "white", height: "55px" }}
              />
            </div>
            <div style={{ width: "30%" }}>
              <button onClick={searchCourse} className={classes.searchButton}>
                Search
              </button>
            </div>
          </div>
          <div style={{  margin: "50px 100px 50px 100px", }}>
            <Courses setCurrentId={setCurrentId} />
          </div>
      </div>
      <div>
        {!searchQuery && !tags.length && (
          <div>
            <Pagination page={page} />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
