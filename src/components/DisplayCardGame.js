import React, {Component} from 'react';
import DisplayPartialCard from './DisplayPartialCard';
import DisplayOnlyCard from './DisplayOnlyCard';
import './styles/DisplayCardGame.css';

class DisplayCardGame extends Component {
   constructor(props) {
      super(props);

      this.state = {
         cards: this.props.cards,
         randomCards: [],
         knowCards: [],
         unknownCards: []
      }
      this.thatsEasy=this.thatsEasy.bind(this);
      this.thatsHard=this.thatsHard.bind(this);
   }

   componentDidMount() {
      this.setState({randomCards: this.shuffle(this.state.cards)})
   }
   
   // Fisher-Yates Shuffle: https://github.com/coolaj86/knuth-shuffle
   shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;

      //if currentIndex is 0, remaining element is last element!
      while (0 !== currentIndex) {
         //get random element that remains in the array
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex--;

         //temporaryValue is as a placeholder of the current index, that way you can swap them!
         temporaryValue = array[currentIndex];
         array[currentIndex] = array[randomIndex];
         array[randomIndex] = temporaryValue;
      }

      return array;
   }

   thatsEasy(id) {
      const {knowCards, randomCards} = this.state;
      knowCards.push(randomCards.splice(id, 1));
      this.setState({knowCards, randomCards});
   }

   thatsHard(id) {
      const {unknownCards, randomCards} = this.state;
      unknownCards.push(randomCards.splice(id, 1));
      this.setState({unknownCards, randomCards});
   }

   render() {
      const {randomCards, knowCards, unknownCards} = this.state;
      return (
         <div id="DisplayCardGame">
            {randomCards.length === 0 ?
            <div className="cardDifficulty">
               <div className="easyCards">
                  <h1 className="listEasy">I know these!</h1>
                  <div className="organizeEasy">
                  {knowCards.map((element, index) => {
                     console.log(element)
                     return (<div className="onlyCard" key={index}>
                        {/* We are accessing the first element of the array of each element! */}
                     <DisplayOnlyCard
                     kanji={element[0].kanji}
                     furigana={element[0].furigana}
                     romanji={element[0].romanji}
                     english={element[0].english}/>
                     </div>
                  )})}
                  </div>
               </div> 
               <div className="hardCards">
                  <h1 className="listHard">I need to study these.</h1>
                  <div className="organizeHard">
                  {unknownCards.map((element, index) => {
                     return (<div className="onlyCard" key={index}>
                     <DisplayOnlyCard
                     kanji={element[0].kanji}
                     furigana={element[0].furigana}
                     romanji={element[0].romanji}
                     english={element[0].english}/>
                     </div>
                  )})}
                  </div>
               </div>
            </div>   
               : 
               <div className="partialCardArea">
               {randomCards.map((element, index) => {
                  return (<div className="partialCard" key={index}>
                     <DisplayPartialCard
                     id={index}
                     kanji={element.kanji}
                     furigana={element.furigana}
                     romanji={element.romanji}
                     english={element.english}
                     thatsEasy={this.thatsEasy}
                     thatsHard={this.thatsHard}/>
                  </div>
               )})} 
            </div>}
         </div>
      )
   }
}

export default DisplayCardGame;