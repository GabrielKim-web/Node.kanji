import React, {Component} from 'react';
import axios from 'axios';
import './styles/DisplayCardData.css';

class DisplayCardData extends Component {
   constructor(props) {
      super(props);

      //Set input fields to the data currently being mapped
      //Remember, this component is being rendered for each card mapped in DisplayCardBase,
      //so each of these states are unique to each card!
      this.state = {
         kanjiInput: this.props.kanji,
         furiganaInput: this.props.furigana,
         romanjiInput: this.props.romanji,
         englishInput: this.props.english,
         card: {},
         editing: false
      }
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

   editCard(id, card) {
      //set editing back to false after changes are submitted
      this.setState({editing: !this.state.editing});
      axios.put(`/api/kanji/${id}`, card).then((response) => {
         this.props.appUpdate(response.data);
      }).catch((err) => console.log(err));
   }

   changeEditState() {
      const {kanji, furigana, romanji, english} = this.props;
      this.setState({editing: !this.state.editing, 
         kanjiInput: kanji, 
         furiganaInput: furigana, 
         romanjiInput: romanji, 
         englishInput: english})
   }

   deleteCard(id) {
      axios.delete(`/api/kanji/${id}`).then((response) => {
         this.props.appUpdate(response.data);
      }).catch( (err) => console.log(err));
   }

   render() {
   const {id, kanji, furigana, romanji, english} = this.props;
   const {kanjiInput, furiganaInput, romanjiInput, englishInput} = this.state
   return(
      <div id="DisplayCardData">
         <div className="cardData">
         {/* Check if editing is true or not. */}
         {this.state.editing ? 
            <div className="editingCard">
               {/* Set all the values equal to what they are at that ID */}
               <input placeholder="Kanji" value={kanjiInput} onChange={(e) => this.handleKanji(e.target.value)}></input>
               <input placeholder="Furigana" value={furiganaInput} onChange={(e) => this.handleFurigana(e.target.value)}></input>
               <input placeholder="Romanji" value={romanjiInput} onChange={(e) => this.handleRomanji(e.target.value)}></input>
               <input placeholder="English" value={englishInput} onChange={(e) => this.handleEnglish(e.target.value)}></input>
               <button onClick={() => this.editCard(id, {kanji: kanjiInput, furigana: furiganaInput, romanji: romanjiInput, english: englishInput})}>Submit Changes</button>
            </div> :
            <div className="displayingCard">
               {/* I don't think diplaying ID is necessary. */}
               {/* <span className="id">{id}</span> */}
               <span className="kanji">{kanji}</span>
               <span className="furigana">{furigana}</span>
               <span className="romanji">{romanji}</span>         
               <span className="english">{english}</span>
            </div>
         }
         <button className="editCard" onClick={() => this.changeEditState()}>Edit</button>
         <button className="deleteCard" onClick={() => this.deleteCard(id)}>Delete</button>
         </div>
      </div>
      )
   }
}

export default DisplayCardData;