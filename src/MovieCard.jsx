import React, { useState } from "react";
import dataList from "./MovieList";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [filter, setFilter] = useState("");
  const [movies, setMovies] = useState(dataList);
  const [movieInfo, setMovieInfo] = useState({
    title: "",
    posterUrl: "",
    rating: "",
  });

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  const dataSearch = movies.filter((item) => {
    const filterLower = filter.toLowerCase();
    return (
      item.title.toLowerCase().includes(filterLower) ||
      item.rating.toString().toLowerCase().includes(filterLower)
    );
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieInfo({
      ...movieInfo,
      [name]: value,
    });
  };

  const addMovie = (e) => {
    e.preventDefault();
    if (movieInfo.title && movieInfo.posterUrl && movieInfo.rating) {
      setMovies([...movies, movieInfo]);
      setMovieInfo({
        title: "",
        posterUrl: "",
        rating: "",
      });
    } else {
      alert("Please fill all fields");
    }
  };

  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "rgb(6, 13, 23)", padding: "10px" }}>
      <div
        style={{
          backgroundColor: "rgb(20, 23, 33)",
          height: "100px",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Navbar
          style={{
            display: "flex",
            width: "100%",
            opacity: "0.7",
            padding: "10px",
          }}
        >
          <Form style={{ width: "100%" }}>
            <Form.Control
              style={{ backgroundColor: "ThreeDDarkShadow", color: "white" }}
              type="text"
              placeholder="Search by title or rating"
              value={filter}
              onChange={searchText}
            />
          </Form>
        </Navbar>

        <form
          style={{ margin: "20px auto", opacity: "0.8", width: "80%" }}
          onSubmit={addMovie}
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={movieInfo.title}
            onChange={handleChange}
            style={{ backgroundColor: "black" }}
          />

          <input
            type="text"
            name="posterUrl"
            placeholder="Poster URL"
            value={movieInfo.posterUrl}
            onChange={handleChange}
            style={{ backgroundColor: "black" }}
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={movieInfo.rating}
            onChange={handleChange}
            style={{ backgroundColor: "black" }}
          />
          <button
            style={{
              height: "31px",
              width: "200px",
              backgroundColor: "black",
              color: "grey",
            }}
            type="submit"
          >
            Add New Movie
          </button>
        </form>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {dataSearch.map((item, index) => (
          <Card
            key={index}
            style={{
              width: "20rem",
              backgroundColor: "skyblue",
              color: "white",
              border: "solid",
              borderRadius: "0px",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
            onClick={() => navigate(`/movie/${item.id}`)}
          >
            <Card.Img
              variant="top"
              src={item.posterUrl}
              style={{
                height: 300,
                width: 300,
                margin: "10px",
                borderRadius: "150px",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                width: "100%",
                height: "40%",
                textAlign: "center",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <Card.Title>{item.title}</Card.Title>
            </div>
            <Card.Body
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                textAlign: "center",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.previousSibling.style.opacity = 1;
              }}
              onMouseOut={(e) => {
                e.currentTarget.previousSibling.style.opacity = 0;
              }}
            ></Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Search;
