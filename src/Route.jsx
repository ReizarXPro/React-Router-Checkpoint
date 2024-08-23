import { Link, Route, Routes } from "react-router-dom";
import MovieDiscreption from "./MovieDiscription";
import Search from "./MovieCard";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/movie/:id" element={<MovieDiscreption />} />
    </Routes>
  );
}
