import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Instructions from "./components/Instructions";
import Scoreboard from "./components/Scoreboard";
import Characters from "./images.json";
import "./App.css";

let topScore = 0;
let guessesCorrect = 0;
let message = "";

class App extends Component {
  state = {
    Characters,
    topScore,
    guessesCorrect,
    message
  };

  setClicked = id => {
    const Characters = this.state.Characters;
    const cardClicked = Characters.filter(character => character.id === id);

    if (cardClicked[0].clicked) {

      guessesCorrect = 0;
      message = 'Whoops. Start over';

      // change to map or smth?
      for (let i = 0; i < Characters.length; i++) {
        Characters[i].clicked = false;
      }

      this.setState({ message });
      this.setState({ guessesCorrect });
      this.setState({ Characters });

    } else {
      cardClicked[0].clicked = true;

      guessesCorrect = guessesCorrect + 1;
      message = "Good Job!"

      if (guessesCorrect > topScore) {
        topScore = guessesCorrect;
        this.setState({ topScore });
      }

      Characters.sort((a, b) => {
        return 0.5 - Math.random();
      });

      this.setState({ Characters });
      this.setState({ guessesCorrect });
      this.setState({ message });
    }
  };

  render() {
    return (
      <Wrapper>
        <div className="row">
          <Instructions>
              <ul>
                <li>Welcome to the Futurama Memory Game.</li>
                <li>Click an image to begin the game!</li>
                <li> Each time you click an image that is not a repeat of a previously clicked image your score will increase.</li>
                <li>However, if you click an repeat your score will reset to 0.</li>
              </ul>
          </Instructions>
          <Title>Futurama Memory</Title>
          <Scoreboard>
            Top Score: {topScore} <br />
            Current Score: {guessesCorrect} <br />
            {message}
          </Scoreboard>
        </div>
        {this.state.Characters.map(character => (
          <MemoryCard
            characterSelect={this.characterSelect}
            setClicked={this.setClicked}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            className="col-sm-1"
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
