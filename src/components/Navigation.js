//Put application name and options to flip between DisplayGame and DisplayCardBase by clicking them in the navigation.

import React, {Component} from 'react';
import './styles/Navigation.css';

class Navigation extends Component {
   render() {
      return(
         <div id="Navigation">
            <ul className="mainHeader">
               <li>
                  <link rel="icon" href="../public/20741.png"></link>
                  Node.kanji</li>
               <li>
                  <ul>
                     <li onClick={() => this.props.changeMode()}>Change Mode: {this.props.displayCard ? 
                     <p>Cards</p>: <p>Game</p>}</li>
                  </ul>
               </li>
            </ul>
         </div> 
      )
   }
}

export default Navigation;