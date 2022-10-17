import "./App.css"
import { Title } from "./components/TitleReactCreateElement"
import Counter from "./components/CounterFC"
import InputSearch from "./components/InputSearch"

const movieList = [
  "Pulp Fiction",
  "Bohemian Rhapsody",
  "Kill Bill",
  "Avengers: War of Infinity",
  "Inception",
  "Reservoir dogs",
  "Home Alone",
]

function App() {
  return (
    <div className="App">
      <h1> Home task 1 </h1>
      <Title />
      <Counter />
      <br />
      <br />
      <InputSearch items={movieList} />
    </div>
  )
}

export default App
