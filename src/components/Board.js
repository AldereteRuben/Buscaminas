import React, { Component } from 'react';
import Square from './Square';
import Time from './Time';

class Board extends React.Component {
  


  constructor(props) {
    super(props);
    this.state = {
      conta:0,
      squares: Array(81).fill(null),
      bombas:llenar()//llenado de arreglo bombas al azar

      
      
    };
  }
  
  handleClick (i) {
  
    var num=0;//para asignar el numero al cuadro del centro(bombas contiguas)
    var tmp;//para buscar las bombas
    var loss=[];
    var bomba=this.state.bombas;//asignacion del vector de las 10 bombas aleaotrias
    const squares = this.state.squares.slice();
    
   
    if(i!==8 && i!==17 && i!==26 && i!==35 && i!== 44 && i!== 53 && i!==62 && i!==71 && i!==80){
      
      
      //buscar bombas  
      tmp = bomba.find(function(element){
        
        return element === i+1;
        
        
        
        
      });
      
      if(tmp){      
        num=num+1;
        
      }
    }

    if(i!==0 && i!==9 && i!==18 && i!==27 && i!==36 && i!==45 && i!==54 && i!==63 && i!==72){ 
      tmp = bomba.find(function(element){
        return element === i-1;
      });
      if(tmp){
        num=num+1;
      }
    }

    tmp = bomba.find(function(element){
      return element === i+9;
    });
    if(tmp){
      num=num+1;
    }
    tmp = bomba.find(function(element){
      return element === i-9;
    });
    if(tmp){
      num=num+1;
    }
    if(i!==0 && i!==9 && i!==18 && i!==27 && i!==36 && i!==45 && i!==54 && i!==63 && i!==72){
      tmp = bomba.find(function(element){
        return element === i-10;
      });
      if(tmp){
        num=num+1;
      }
    }

    if(i!==8 && i!==17 && i!==26 && i!==35 && i!== 44 && i!== 53 && i!==62 && i!==71 && i!==80){
      tmp = bomba.find(function(element){
        return element === i-8;
      });
     
      if(tmp){
        num=num+1;
      }
    }
    if(i!==8 && i!==17 && i!==26 && i!==35 && i!== 44 && i!== 53 && i!==62 && i!==71 && i!==80){
      tmp = bomba.find(function(element){
        return element === i+10;
      });
      if(tmp){
        num=num+1;
      }
    }

    if(i!==0 && i!==9 && i!==18 && i!==27 && i!==36 && i!==45 && i!==54 && i!==63 && i!==72){
      tmp = bomba.find(function(element){
        return element === i+8;
      });
      if(tmp){
        num=num+1;
      }
    }
    
    

    tmp = bomba.find(function(element){
      return element === i;
    });
    
    for(let i=0;i<10;i++){
      loss.push(bomba[i]);
      //alert(loss);

    }
    console.log("bombas"+loss);
    
    
    
      if (tmp){
        
        alert("perdiste bomba en la casilla "+i);
        
        squares[i] = <img src="123.svg"></img>;
        
       
        
        
      
        
      }
      else{
        if(this.state.conta==71){
          alert("Ganaste");

        }
        
        squares[i] = num;
        
        //squares[i]=<img src="carita.png"></img>
        
        
       
      }
  
    

    this.setState({
      squares: squares,
      conta:this.setState.conta+1,//checar ganador
     
      
          });
          
         
  }
  


  
  
  renderSquare(i) {
    return (
      
      <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        
        
      />
      
    );
    
    
  }
  

  render() {
    
    
    return (
      
      <div>
        <h1>BUSCAMINAS</h1>
        <h3>Los 0's significan espacios vacios</h3>
        <div>

        </div>
        <div className="board-row">

        
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="board-row">
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
        </div>
        <div className="board-row">
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
        </div>
        <div className="board-row">
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
        </div>
        <div className="board-row">
          {this.renderSquare(36)}
          {this.renderSquare(37)}
          {this.renderSquare(38)}
          {this.renderSquare(39)}
          {this.renderSquare(40)}
          {this.renderSquare(41)}
          {this.renderSquare(42)}
          {this.renderSquare(43)}
          {this.renderSquare(44)}
        </div>
        <div className="board-row">
          {this.renderSquare(45)}
          {this.renderSquare(46)}
          {this.renderSquare(47)}
          {this.renderSquare(48)}
          {this.renderSquare(49)}
          {this.renderSquare(50)}
          {this.renderSquare(51)}
          {this.renderSquare(52)}
          {this.renderSquare(53)}
        </div>
        <div className="board-row">
          {this.renderSquare(54)}
          {this.renderSquare(55)}
          {this.renderSquare(56)}
          {this.renderSquare(57)}
          {this.renderSquare(58)}
          {this.renderSquare(59)}
          {this.renderSquare(60)}
          {this.renderSquare(61)}
          {this.renderSquare(62)}
        </div>
        <div className="board-row">
          {this.renderSquare(63)}
          {this.renderSquare(64)}
          {this.renderSquare(65)}
          {this.renderSquare(66)}
          {this.renderSquare(67)}
          {this.renderSquare(68)}
          {this.renderSquare(69)}
          {this.renderSquare(70)}
          {this.renderSquare(71)}
        </div>
        <div className="board-row">
          {this.renderSquare(72)}
          {this.renderSquare(73)}
          {this.renderSquare(74)}
          {this.renderSquare(75)}
          {this.renderSquare(76)}
          {this.renderSquare(77)}
          {this.renderSquare(78)}
          {this.renderSquare(79)}
          {this.renderSquare(80)}
        </div>
        
      </div>
      
    );
    
  }
  
}



function llenar(){
  var b=[];
  for(let i=0;i<10;i++){
    b.push(Math.floor(Math.random()*80));
  //  alert(b); /* checar las bombas */
  }
  return b;
}
export default Board;
