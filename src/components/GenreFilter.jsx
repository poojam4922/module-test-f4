import React from 'react'
import "./MovieList.css"
const GenreFilter = ({genres, onGenreSelect, selectedGenre}) => {
  return (
    <>
      <div className='genre-filter'>
        <h1>Filter By Genre</h1>
            {
                genres.map(genre => {
                    return (
                        <button key={genre} onClick={() => onGenreSelect(genre)}>{genre}</button>
                    )
                })
            }
      </div>
    </>
  )
}

export default GenreFilter
