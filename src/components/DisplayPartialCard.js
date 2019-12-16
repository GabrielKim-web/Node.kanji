import React from 'react';
import './styles/DisplayPartialCard.css';

function DisplayPartialCard(carddata) {
   const {id, kanji, thatsEasy, thatsHard} = carddata;
   return (
      <div id="DisplayPartialCard">
         <span className="kanji">{kanji}</span>
         <button className="easy" onClick={() => thatsEasy(id)}>EASY</button>
         <button className="hard" onClick={() => thatsHard(id)}>HARD</button>
      </div>
   )
}

export default DisplayPartialCard;