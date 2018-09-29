import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function isValidMove(i){
    return i >=0 && i <=63;
}



function Square(props){
    let color = props.color;
    return (
      <button className="square" onClick = {props.onClick} style={{background: color}}>{props.value} 
      </button>
    );
}

class Board extends React.Component{
    constructor(props){
        super(props);
    }

    renderSquare(i, color, index) {
        return <Square value={i} color={color} onClick = {() => this.props.onClick(index)}/>; 
    }

    render(){
        return (
            <div>
            <div className="board-row">
                {this.renderSquare(this.props.squares[0],"white", 0)}
                {this.renderSquare(this.props.squares[1],"LightGray", 1)}
                {this.renderSquare(this.props.squares[2],"white", 2)}
                {this.renderSquare(this.props.squares[3],"LightGray", 3)}
                {this.renderSquare(this.props.squares[4],"white", 4)}
                {this.renderSquare(this.props.squares[5],"LightGray", 5)}
                {this.renderSquare(this.props.squares[6],"white", 6)}
                {this.renderSquare(this.props.squares[7],"LightGray", 7)}
            </div>
            <div className="board-row">
                {this.renderSquare(this.props.squares[8],"LightGray", 8)}
                {this.renderSquare(this.props.squares[9],"white", 9)}
                {this.renderSquare(this.props.squares[10],"LightGray", 10)}
                {this.renderSquare(this.props.squares[11],"white", 11)}
                {this.renderSquare(this.props.squares[12],"LightGray", 12)}
                {this.renderSquare(this.props.squares[13],"white", 13)}
                {this.renderSquare(this.props.squares[14],"LightGray", 14)}
                {this.renderSquare(this.props.squares[15],"white", 15)}
            </div>
            <div className="board-row">
                {this.renderSquare(this.props.squares[16],"white",16)}
                {this.renderSquare(this.props.squares[17],"LightGray",17)}
                {this.renderSquare(this.props.squares[18],"white",18)}
                {this.renderSquare(this.props.squares[19],"LightGray",19)}
                {this.renderSquare(this.props.squares[20],"white",20)}
                {this.renderSquare(this.props.squares[21],"LightGray",21)}
                {this.renderSquare(this.props.squares[22],"white",22)}
                {this.renderSquare(this.props.squares[23],"LightGray",23)}
            </div>
            <div className="board-row">
                {this.renderSquare(this.props.squares[24],"LightGray",24)}
                {this.renderSquare(this.props.squares[25],"white",25)}
                {this.renderSquare(this.props.squares[26],"LightGray",26)}
                {this.renderSquare(this.props.squares[27],"white",27)}
                {this.renderSquare(this.props.squares[28],"LightGray",28)}
                {this.renderSquare(this.props.squares[29],"white",29)}
                {this.renderSquare(this.props.squares[30],"LightGray",30)}
                {this.renderSquare(this.props.squares[31],"white",31)}
            </div>
            <div className="board-row">
                {this.renderSquare(this.props.squares[32],"white",32)}
                {this.renderSquare(this.props.squares[33],"LightGray",33)}
                {this.renderSquare(this.props.squares[34],"white",34)}
                {this.renderSquare(this.props.squares[35],"LightGray",35)}
                {this.renderSquare(this.props.squares[36],"white",36)}
                {this.renderSquare(this.props.squares[37],"LightGray",37)}
                {this.renderSquare(this.props.squares[38],"white",38)}
                {this.renderSquare(this.props.squares[39],"LightGray",39)}
            </div>
            <div className="board-row">
                {this.renderSquare(this.props.squares[40],"LightGray", 40)}
                {this.renderSquare(this.props.squares[41],"white", 41)}
                {this.renderSquare(this.props.squares[42],"LightGray", 42)}
                {this.renderSquare(this.props.squares[43],"white", 43)}
                {this.renderSquare(this.props.squares[44],"LightGray", 44)}
                {this.renderSquare(this.props.squares[45],"white", 45)}
                {this.renderSquare(this.props.squares[46],"LightGray", 46)}
                {this.renderSquare(this.props.squares[47],"white", 47)}
            </div>
            <div className="board-row">
                {this.renderSquare(this.props.squares[48],"white", 48)}
                {this.renderSquare(this.props.squares[49],"LightGray", 49)}
                {this.renderSquare(this.props.squares[50],"white", 50)}
                {this.renderSquare(this.props.squares[51],"LightGray", 51)}
                {this.renderSquare(this.props.squares[52],"white", 52)}
                {this.renderSquare(this.props.squares[53],"LightGray", 53)}
                {this.renderSquare(this.props.squares[54],"white", 54)}
                {this.renderSquare(this.props.squares[55],"LightGray", 55)}
            </div>
            <div className="board-row">
                {this.renderSquare(this.props.squares[56],"LightGray", 56)}
                {this.renderSquare(this.props.squares[57],"white", 57)}
                {this.renderSquare(this.props.squares[58],"LightGray", 58)}
                {this.renderSquare(this.props.squares[59],"white", 59)}
                {this.renderSquare(this.props.squares[60],"LightGray", 60)}
                {this.renderSquare(this.props.squares[61],"white", 61)}
                {this.renderSquare(this.props.squares[62],"LightGray", 62)}
                {this.renderSquarethis.props.squares([63],"white", 63)}
            </div>
            </div>
        );
        }
    }
    
    class Game extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                squares: Array(64).fill(null),
                start: null,

            }
            this.state.squares[0] = "P";
        }
        handleClick(i){
            console.log("YOu've clicked on square " + i);
            if(this.state.start == null){
                console.log("In");
                this.state.start = i;
                return;
            }
            else{
                console.log("Trying to move " + this.state.squares[this.state.start])
                if(this.state.squares[this.state.start] == "P"){
                    console.log("Moving "+ this.state.start+" "+i)
                    this.movePawn(this.state.start,i);
                }
                this.state.start = null;
            }
            
        }
        movePawn(start, target){
            const squares = this.state.squares.slice();
            if(target-start<7||target-start>9){
                console.log("Not Valid");
                this.state.start = null;
                return;
            }
            else{
                console.log("Valid " + (target-start));
                if(target-start == 7 || target-start == 9 && this.state.squares[target] != null){
                    squares[target] = "P";
                    squares[start] = null;
                    this.setState({
                        squares:squares,
                    })
                    this.state.start = null;
                    return;
                }
                else{
                    console.log("Moving forward");
                    if(this.state.squares[target] == null){
                        console.log("Switching");
                        squares[target] = "P";
                        squares[start] = null;
                        this.setState({
                            squares:squares,
                        })
                        this.state.start = null;
                        console.log(this.state.squares);
                        return;
                    }
                }
            }
            return;
        }
        render(){
            return <Board squares={this.state.squares} onClick = {(i) => this.handleClick(i)}></Board>
        }
    }
    ReactDOM.render(
        <Game />,
        document.getElementById('root')
      );