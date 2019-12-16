import React from 'react';

function DisplayPartialCard(carddata) {
   const {kanji, thatsEasy, thatsHard} = carddata;
   return (
      <div id="DisplayPartialCard">
         <span className="kanji">{kanji}</span>
         <button className="easy" onClick={() => thatsEasy()}>EASY</button>
         <button className="hard" onClick={() => thatsHard()}>HARD</button>
      </div>
   )
}

export default DisplayPartialCard;