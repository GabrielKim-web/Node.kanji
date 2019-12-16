import React from 'react';
import './styles/DisplayOnlyCard.css';

function DisplayOnlyCard(props) {
   const {kanji, furigana, romanji, english} = props;
   return(
      <div id="sortedCard">
         <span className="kanji">{kanji}</span>
         <span className="furigana">{furigana}</span>
         <span className="romanji">{romanji}</span>         
         <span className="english">{english}</span>
      </div>
   )
}

export default DisplayOnlyCard;