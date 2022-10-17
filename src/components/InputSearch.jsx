import React, { useState } from "react"
import MovieList from "./MovieList"

const InputSearch = ({ items }) => {
  const [filteredList, setFilteredList] = useState(items)
  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value
    // Create copy of item list
    let updatedList = [...items]
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
    // Trigger render with updated values
    setFilteredList(updatedList)
  }

  return (
    <>
      <form>
        <label htmlFor="header-search">
          <span className="visually-hidden">Search movies</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Search blog posts"
          name="s"
          onChange={filterBySearch}
        />
        <button type="submit">Search</button>
      </form>

      <MovieList items={filteredList} />
    </>
  )
}
export default InputSearch
