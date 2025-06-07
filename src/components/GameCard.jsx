import "../styles/GameCard.css";

function GameCard(props) {
  return (
    <div className="GameCard">
      <img src={props.imgPath}></img>
      <div className="info"> 
        <h3>Pokemon {props.name}</h3>
        <p>Year: {props.year}</p>
        <p>Console: {props.console}</p>
      </div>
    </div>
  );
}

export default GameCard;
