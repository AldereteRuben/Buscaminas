import React, { Component } from 'react';
import Board from './Board';
import Time from './Time';

class Game extends React.Component {
    render() {
            var divStyle = {
                    width: "auto",
                    textAlign: "left",                  
                    fontFamily: "sans-serif",
                    
                   
            };
            var divStyle1 = {
                
                
               
        };


            return (
            <div className="game">
                <div className="game-board">
                <Board />
                <div>
                <Time />
                </div>
                </div>
                <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TO-DO */}</ol>
                </div>
            </div>
            );
    }
}

export default Game;
