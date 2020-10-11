import React from 'react';
import { Bracket, BracketGame, BracketGenerator, Model } from 'react-tournament-bracket';

import mock from "./mock.data"
import './App.css';

class Test extends React.Component {
  changeHoveredTeamId = (hoveredTeamId) => this.setState({ hoveredTeamId });

  handleClick = (game) => alert('clicked game: ' + game.name);

  render() {
    console.log("HERE")
    return (
      <BracketGame
        {...this.props}
        // onHoveredTeamIdChange={this.changeHoveredTeamId}
        onClick={this.handleClick.bind(this, this.props.game)}
        // hoveredTeamId={this.state.hoveredTeamId}
        />
    );
  }
}

function App() {
  let game = mock.find(m => m.id === "35b0745d-ef13-4255-8c40-c9daa95e4cc4")
  console.log(game.sides)
  return (
    <div className="App">
      <h3>Bracket Game</h3>
      <BracketGame game={game} />
      <h3>Bracket</h3>
      <Bracket game={game} gameComponent={props => <Test {...props}/>}/>
      {/* <h3>BracketGenerator</h3>
      <BracketGenerator games={mock} gameComponent={props => <Test {...props}/>} /> */}
    </div>
  );
}

export default App;
