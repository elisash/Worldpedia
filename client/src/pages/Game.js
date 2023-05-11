import { useState } from "react";
import React from "react";
import { Button, Modal } from "react-bootstrap";

function Game({ countryObject }) {
  const [capital, setCapital] = useState("");
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);
  const [wrongShow, setWrongShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const close = () => setWrongShow(false);

  // function handleRandomize() {
  //   // Make a fetch request to your Rails API to retrieve a list of countries
  //   fetch('/countries')
  //     .then(response => response.json())
  //     .then(countries => {
  //       // Generate a random index to select a country from the list
  //       const randomIndex = Math.floor(Math.random() * countries.length);
  //       // Set the current country object to the randomly selected country
  //       setCountriesObject(countries[randomIndex]);
  //     });

  function handleSubmit(e) {
    e.preventDefault();
    setCapital("");
    if (countryObject.capital.toLowerCase() === capital.toLowerCase()) {
      setShow(true);
      setScore(score + 10);
    } else {
      setWrongShow(true);
      // alert(`WRONG. The answer is ${countryObject.capital}`);
      setScore(score - 10);
    }
  }

  return (
    <div>
      <div className="card-game">
        <form onSubmit={handleSubmit}>
          <img className="flag" src={countryObject.flag} />
          <h1 className="lc">
            Language: <strong> {countryObject.language} </strong>{" "}
          </h1>
          <h1 className="lc">
            Continent: <strong>{countryObject.continent}</strong>
          </h1>
          <label className="lc">
            <strong>What is {countryObject.name}'s capital? </strong>
            <></>
            <input
              type="text"
              id="capital"
              name="capital"
              value={capital}
              onChange={(e) => setCapital(e.target.value)}
            />
          </label>
          <></>
          <label>
            <Button id="submit" variant="warning" onClick={handleSubmit}>
              {" "}
              test me!{" "}
            </Button>
          </label>
        </form>
        <p className="score">Score: {score}</p>
      </div>
      {/* <div>
      <Button onClick={handleRandomize}>Get Random Country</Button>
      </div> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fun fact about {countryObject.name}: </Modal.Title>
        </Modal.Header>
        <Modal.Body>{countryObject.fun_fact}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={wrongShow} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>
            Sorry, that's not the capital of {countryObject.name}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The capital of {countryObject.name} is {countryObject.capital}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Game;
{
  /* <div className="funfacts">
      <h1 >There are 5 oceans in the world: the Atlantic Ocean, the Indian Ocean, the Southern Ocean, the Arctic Ocean, and the Pacific Ocean.</h1>

<h1>There are 195 recognized countries in the world, according to the United Nations. This includes 193 member states and 2 observer states (the Holy See and Palestine).</h1>

<h1>The largest ocean in the world is the Pacific Ocean, which covers an area of about 63,800,000 square miles (165,200,000 square kilometers).</h1>

<h1>The smallest country in the world, by land area, is Vatican City, which is an independent city-state enclaved within Rome, Italy. It has an area of about 44 hectares (110 acres).</h1>

<h1>The largest country in the world, by land area, is Russia, which covers an area of about 6,612,000 square miles (17,098,000 square kilometers).</h1>
    </div> */
}
