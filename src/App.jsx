import './styles/App.css'
import GameCard from './components/GameCard'

function App() {


  return (
    <>
      <h1>Pokemon Games Over the Generations</h1>
      <p>A timeline of the mainline Pokemon game releases in the United States, separated by generation! </p>
      <GameCard imgPath="pokemonRed.webp"></GameCard>
    </>
  )
}

export default App
