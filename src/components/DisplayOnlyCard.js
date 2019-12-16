import React from 'react';

function DisplayOnlyCard(props) {
   const {kanji, furigana, romanji, english} = props;
   return(
      <div className="sortedCard">
         <span className="kanji">{kanji}</span>
         <span className="furigana">{furigana}</span>
         <span className="romanji">{romanji}</span>         
         <span className="english">{english}</span>
      </div>
   )
}

export default DisplayOnlyCard;