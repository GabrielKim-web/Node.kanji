//Adds cards here (extend to another child component)
//Display cards received from App.js
import React, {Component} from 'react';
import AddNewCard from './AddNewCard';
import DisplayCardData from './DisplayCardData';
import './styles/DisplayCardBase.css';

class DisplayCardBase extends Component {
   constructor() {
      super();

      this.state = {
         cardNo: 0,
      }

      this.appUpdate=this.appUpdate.bind(this);
      // this.deleteCard=this.deleteCard.bind(this);
      // this.editCard=this.editCard.bind(this);
   }

   appUpdate(data) {
      this.props.updateDatabase(data);
   }

   render() {
      const {cards} = this.props;
      return(
         <div id = "DisplayCardBase">
            <AddNewCard 
            cardUpdate={this.appUpdate}
            />
            {/* Run component DisplayCardData for each object in cards array */}
            <div className="cards">
               {cards.map((element, index) => {
                  return (<div className="card" key={index}>
                     <DisplayCardData
                     id={index}
                     kanji={element.kanji}
                     furigana={element.furigana}
                     romanji={element.romanji}
                     english={element.english}
                     appUpdate={this.appUpdate}/>
                     {/* <span onClick={() => this.deleteCard(index)}>delete button here</span> */}
                  </div>
                  )})}
            </div>
         </div>
      )
   }
}

export default DisplayCardBase;