import { useNavigate } from "react-router-dom";
import React from "react";
import MovieList from "./MovieList";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

export default function MovieDiscreption() {
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = MovieList.find((movie) => movie.id === parseInt(id));
  return (
    <div style={{ backgroundColor: "rgb(20, 23, 33)" }}>
      <button
        style={{
          position: "sticky",
          top: "0px",
          backgroundColor: "grey",
          borderRadius: "10px",
          zIndex: 1000,
          width: "200px",
          display: "flex",
          justifyContent: "left",
        }}
        onClick={() => navigate("/")}
      >
        return
      </button>
      <img
        style={{ borderRadius: 25, height: "300px" }}
        src={movie.posterUrl}
        alt=""
        srcset=""
      />
      <h1 style={{ color: "white" }}>{movie.title} </h1>
      <br />
      <p style={{ color: "white" }}>{movie.description}</p>
      <h1 style={{ color: "white" }}>Trailer</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactPlayer url={movie.video} />
      </div>
    </div>
  );
}
