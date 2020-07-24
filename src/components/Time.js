import React, { Component } from 'react';

class Time extends React.Component {
  constructor(props,context){
        super(props,context);
        this.state = {
            segundos: 0,
            minutos:0
        };
        this.timerTick = this.timerTick.bind(this);
  }
  

  timerTick(){
        this.setState({
            segundos: this.state.segundos + 1
            
        });
        if(this.state.segundos==60){
          this.setState({
            minutos: this.state.minutos + 1,
            segundos:0
            
        });
         
        }
      //  if (this.state.segundos == 10){ alert("Fin del Juego"); }//evitar que siga avanzando

  }
  
  componentDidMount(){
        setInterval(this.timerTick, 1000 );
  }
  
  render() {
    //if (this.state.segundos == 10)
    return (
        <p>Tiempo: {this.state.minutos}:{this.state.segundos}</p>
    );
  }
}

export default Time; 
