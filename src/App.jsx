import "./styles/App.css";
import GameCard from "./components/GameCard";
import GenContainer from "./components/GenContainer";

function App() {
  return (
    <>
      <h1>Pokemon Games Over the Generations</h1>
      <p>
        A timeline of the mainline Pokemon game releases in the United States,
        separated by generation!
      </p>
      <br></br>

      <GenContainer generation="1">
        <GameCard
          imgPath="pokemonRed.webp"
          name="Red"
          year="1996"
          console="Game Boy"
        ></GameCard>
        <GameCard
          imgPath="pokemonBlue.webp"
          name="Blue"
          year="1996"
          console="Game Boy"
        ></GameCard>
        <GameCard
          imgPath="pokemonYellow.webp"
          name="Yellow"
          year="1998"
          console="Game Boy"
        ></GameCard>
      </GenContainer>

      <GenContainer generation="2">
        <GameCard 
          imgPath="pokemonGold.webp"
          name="Gold"
          year="1999"
          console="Game Boy Color"
        ></GameCard>
        <GameCard 
          imgPath="pokemonSilver.webp"
          name="Silver"
          year="1999"
          console="Game Boy Color"
        ></GameCard>
        <GameCard 
          imgPath="pokemonCrystal.webp"
          name="Crystal"
          year="2000"
          console="Game Boy Color"
        ></GameCard>
      </GenContainer>

      <GenContainer generation="3">
        <GameCard
          imgPath="pokemonRuby.webp"
          name="Ruby"
          year="2002"
          console="Game Boy Advance"
        ></GameCard>
        <GameCard
          imgPath="pokemonSapphire.webp"
          name="Sapphire"
          year="2002"
          console="Game Boy Advance"
        ></GameCard>
        <GameCard
          imgPath="pokemonFR.webp"
          name="Fire Red"
          year="2004"
          console="Game Boy Advance"
        ></GameCard>
        <GameCard
          imgPath="pokemonLG.webp"
          name="Leaf Green"
          year="2004"
          console="Game Boy Advance"
        ></GameCard>
        <GameCard
          imgPath="pokemonEmerald.webp"
          name="Emerald"
          year="2004"
          console="Game Boy Advance"
        ></GameCard>
      </GenContainer>

      <GenContainer generation="4">
        <GameCard
          imgPath="pokemonDiamond.webp"
          name="Diamond"
          year="2006"
          console="Nintendo DS"
        ></GameCard>
        <GameCard
          imgPath="pokemonPearl.webp"
          name="Pearl"
          year="2006"
          console="Nintendo DS"
        ></GameCard>
        <GameCard
          imgPath="pokemonPlatinum.webp"
          name="Platinum"
          year="2008"
          console="Nintendo DS"
        ></GameCard>
        <GameCard
          imgPath="pokemonHG.webp"
          name="HeartGold"
          year="2009"
          console="Nintendo DS"
        ></GameCard>
        <GameCard
          imgPath="pokemonSS.webp"
          name="SoulSilver"
          year="2009"
          console="Nintendo DS"
        ></GameCard>
      </GenContainer>

      <GenContainer generation="5">
        <GameCard
          imgPath="pokemonBlack.webp"
          name="Black"
          year="2010"
          console="Nintendo DS"
        ></GameCard>
        <GameCard
          imgPath="pokemonWhite.webp"
          name="White"
          year="2010"
          console="Nintendo DS"
        ></GameCard>
        <GameCard
          imgPath="pokemonB2.webp"
          name="Black 2"
          year="2012"
          console="Nintendo DS"
        ></GameCard>
        <GameCard
          imgPath="pokemonW2.webp"
          name="White 2"
          year="2012"
          console="Nintendo DS"
        ></GameCard>
      </GenContainer>

      <GenContainer generation="6">
        <GameCard
          imgPath="pokemonX.webp"
          name="X"
          year="2013"
          console="Nintendo 3DS"
        ></GameCard>
        <GameCard
          imgPath="pokemonY.webp"
          name="Y"
          year="2013"
          console="Nintendo 3DS"
        ></GameCard>
        <GameCard
          imgPath="pokemonOR.webp"
          name="Omega Ruby"
          year="2014"
          console="Nintendo 3DS"
        ></GameCard>
        <GameCard
          imgPath="pokemonAS.webp"
          name="Alpha Sapphire"
          year="2014"
          console="Nintendo 3DS"
        ></GameCard>
      </GenContainer>

      <GenContainer generation="7">
        <GameCard
          imgPath="pokemonSun.webp"
          name="Sun"
          year="2016"
          console="Nintendo 3DS"
        ></GameCard>
        <GameCard
          imgPath="pokemonMoon.webp"
          name="Moon"
          year="2016"
          console="Nintendo 3DS"
        ></GameCard>
        <GameCard
          imgPath="pokemonUS.webp"
          name="Ultra Sun"
          year="2017"
          console="Nintendo 3DS"
        ></GameCard>
        <GameCard
          imgPath="pokemonUM.webp"
          name="Ultra Moon"
          year="2017"
          console="Nintendo 3DS"
        ></GameCard>
        <GameCard
          imgPath="pokemonLGP.webp"
          name="Let's Go, Pikachu!"
          year="2018"
          console="Nintendo Switch"
        ></GameCard>
        <GameCard
          imgPath="pokemonLGE.webp"
          name="Let's Go, Eevee!"
          year="2018"
          console="Nintendo Switch"
        ></GameCard>
      </GenContainer>

      <GenContainer generation="8">
        <GameCard
          imgPath="pokemonSword.webp"
          name="Sword"
          year="2019"
          console="Nintendo Switch"
        ></GameCard>
        <GameCard
          imgPath="pokemonShield.webp"
          name="Shield"
          year="2019"
          console="Nintendo Switch"
        ></GameCard>
        <GameCard
          imgPath="pokemonBD.webp"
          name="Brilliant Diamond"
          year="2021"
          console="Nintendo Switch"
        ></GameCard>
        <GameCard
          imgPath="pokemonSP.webp"
          name="Shining Pearl"
          year="2021"
          console="Nintendo Switch"
        ></GameCard>
        <GameCard
          imgPath="pokemonLA.webp"
          name="Legends: Arceus"
          year="2022"
          console="Nintendo Switch"
        ></GameCard>
      </GenContainer>

      <GenContainer generation="9">
        <GameCard
          imgPath="pokemonScarlet.webp"
          name="Scarlet"
          year="2022"
          console="Nintendo Switch"
        ></GameCard>
        <GameCard
          imgPath="pokemonViolet.webp"
          name="Violet"
          year="2022"
          console="Nintendo Switch"
        ></GameCard>
        <GameCard
          imgPath="pokemonLZA.webp"
          name="Legends: Z-A"
          year="2025"
          console="Nintendo Switch"
        ></GameCard>
      </GenContainer>

    </>
  );
}

export default App;
