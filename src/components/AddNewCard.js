import React, {Component} from 'react';
import axios from 'axios';
import './styles/AddNewCard.css';

class AddNewCard extends Component {
   constructor() {
      super();

      this.state = {
         kanjiInput: '',
         furiganaInput: '',
         romanjiInput: '',
         englishInput: '',
      }
   }

   addNewCard(card) {
      //Empties the input boxes
      this.setState({kanjiInput: '', furiganaInput: '', romanjiInput: '', englishInput: ''})
      axios.post('/api/kanji', card).then((response) => this.props.cardUpdate(response.data)).catch((err) => console.log(err));
   }

   appUpdate() {
      this.props.cardUpdate();
   }

   handleKanji(value) {   
      this.setState({kanjiInput: value});
   }
   handleFurigana(value) {   
      this.setState({furiganaInput: value});
   }
   handleRomanji(value) {   
      this.setState({romanjiInput: value});
   }
   handleEnglish(value) {   
      this.setState({englishInput: value});
   }

   render() {
      const {kanjiInput, furiganaInput, romanjiInput, englishInput} = this.state
      return(
         <div id="AddNewCard">
            <h1 className="AddNewCardHeader">Add a New Card</h1>
            {/* Adding value=state of inputs allows boxes to be reset after a card is added */}
            <input placeholder="Kanji" value={kanjiInput} onChange={(e) => this.handleKanji(e.target.value)}></input>
            <input placeholder="Furigana" value={furiganaInput} onChange={(e) => this.handleFurigana(e.target.value)}></input>
            <input placeholder="Romanji" value={romanjiInput} onChange={(e) => this.handleRomanji(e.target.value)}></input>
            <input placeholder="English" value={englishInput} onChange={(e) => this.handleEnglish(e.target.value)}></input>
            <button onClick={() => this.addNewCard({kanji: kanjiInput, furigana: furiganaInput, romanji: romanjiInput, english: englishInput})}>Add Card</button> 　
         </div>
      )
   }
}

export default AddNewCard;