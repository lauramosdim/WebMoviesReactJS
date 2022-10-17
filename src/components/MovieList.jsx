import React from "react"
import MovieListItem from "./MovieListItem"

class MovieList extends React.Component {
  render() {
    const { items } = this.props
    const movieItems = items.map((movie) => (
      <MovieListItem item={movie} key={movie} />
    ))
    return <ul className="List">{movieItems}</ul>
  }
}

export default MovieList
