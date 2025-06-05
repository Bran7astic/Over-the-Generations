import '../styles/GameCard.css'

function GameCard(props) {

    return(
        <div className="GameCard">
            <img src={props.imgPath} className="gameImg"></img>
            <p>Pokemon Red</p>
        </div>
    )

}

export default GameCard