import React, {Component} from 'react';
import './styles/Clock.css';

class Clock extends Component {
   constructor() {
      super();

      this.state = {
         timeElapsed: 0,
         bestTime: 0
      }
   }

   componentDidMount() {
      //this.intervalID is part of the setInterval object, no need to declare it
      //setInterval happens every single time the interval has passed, which is why setTimeout does not work!
      this.intervalID = setInterval(
         () => this.secondTimer(), 1000
      )
   }

   secondTimer() {
      //set timer to 0 if we are modifying cards
      if(this.props.displayCard) {
         this.setState({timeElapsed: -1});
      }
      var {timeElapsed} = this.state;
      timeElapsed++;
      this.setState({timeElapsed});
   }

   render() {
      const {displayCard, numCards} = this.props;
      const {timeElapsed, bestTime} = this.state;
      return (
         <div id="Clock">
            <span className="timeElapsed">
               {displayCard ?
                  <p>Number of cards: {numCards}</p> :
                  <p>Time elapsed: {timeElapsed}</p>
               }
            </span>
            <span>{`Best Time: ${bestTime}`}</span>
         </div>
      )
   }
}

export default Clock;