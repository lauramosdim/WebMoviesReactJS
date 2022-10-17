import React from "react"

class MovieListItem extends React.PureComponent {
  render() {
    const { item } = this.props
    return <li className="List-item">{item}</li>
  }
}

export default MovieListItem
