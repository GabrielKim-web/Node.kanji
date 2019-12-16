import React, {Component} from 'react';
import axios from 'axios';
import Navigation from './components/Navigation';
import DisplayCardBase from './components/DisplayCardBase';
import DisplayCardGame from './components/DisplayCardGame';
import Clock from './components/Clock';
import './Reset.css';
import './App.css';

//Both DisplayGame and DisplayCardBase pull from the same database.
class App extends Component {
  constructor() {
    super();

    this.state = {
      displayCard: true,
      cards: [],
      numCards: 0,
      hideFurigana: true,
      hideRomanji: true,
      hideEnglish: true
    }
    this.changeMode=this.changeMode.bind(this);
    this.updateDatabase=this.updateDatabase.bind(this);
  }

  componentDidMount() {
    axios.get('/api/kanji').then((response) => {
      this.setState({cards: response.data, numCards: response.data.length})})
    .catch((err) => console.log(err));
  }

  updateDatabase(data) {
    this.setState({cards: data, numCards: data.length});
  }

  changeMode() {
    this.setState({displayCard: !this.state.displayCard});
  }
  
  render() {
    const {displayCard, cards, numCards} = this.state;
    return (
      <div id="App">
        <header>
          <Navigation 
          displayCard={displayCard}
          changeMode={this.changeMode}/>
        </header>
          <div className="Clock">
            <Clock 
            displayCard={displayCard}
            numCards={numCards}/>
          </div>
          <div className="cardBody">
            {displayCard ? 
                <DisplayCardBase 
                cards={cards}
                updateDatabase={this.updateDatabase}/> : 
                <DisplayCardGame 
                cards={cards}/>}
          </div>
      </div>
    );
  }
}

export default App;
