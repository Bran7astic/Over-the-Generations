import "../styles/GameCard.css";

function GenContainer({ children, generation }) {
  return (
    <>
      <hr></hr>
      <h2>Generation {generation}</h2>
      <div className="genContainer">{children}</div>
    </>
  );
}

export default GenContainer;
