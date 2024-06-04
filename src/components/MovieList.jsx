import React from "react";
import "./MovieList.css"

const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <>
      <table>
        <tr>
          <th> Title </th>
          <th>Genre </th>
          <th>Year </th>
        </tr>
        {
            movies.map((movie) => (
              <tr>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
              </tr>
            ))
        }
      </table>
    </>
  );
};

export default MovieList;
