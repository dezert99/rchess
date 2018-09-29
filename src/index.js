import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
    let color = props.color;
    return (
      <button className="square" style={{background: color}}>{}
      </button>
    );
}

class Board extends React.Component{
    constructor(props){
        super(props);
    }

    renderSquare(i, color) {
        return <Square value={i} color={color}/>; 
    }

    render(){
        return (
            <div>
            <div className="board-row">
                {this.renderSquare(0,"white")}
                {this.renderSquare(1,"LightGray")}
                {this.renderSquare(2,"white")}
                {this.renderSquare(3,"LightGray")}
                {this.renderSquare(4,"white")}
                {this.renderSquare(5,"LightGray")}
                {this.renderSquare(6,"white")}
                {this.renderSquare(7,"LightGray")}
            </div>
            <div className="board-row">
                {this.renderSquare(8,"LightGray")}
                {this.renderSquare(9,"white")}
                {this.renderSquare(10,"LightGray")}
                {this.renderSquare(11,"white")}
                {this.renderSquare(12,"LightGray")}
                {this.renderSquare(13,"white")}
                {this.renderSquare(14,"LightGray")}
                {this.renderSquare(15,"white")}
            </div>
            <div className="board-row">
                {this.renderSquare(16,"white")}
                {this.renderSquare(17,"LightGray")}
                {this.renderSquare(18,"white")}
                {this.renderSquare(19,"LightGray")}
                {this.renderSquare(20,"white")}
                {this.renderSquare(21,"LightGray")}
                {this.renderSquare(22,"white")}
                {this.renderSquare(23,"LightGray")}
            </div>
            <div className="board-row">
                {this.renderSquare(24,"LightGray")}
                {this.renderSquare(25,"white")}
                {this.renderSquare(26,"LightGray")}
                {this.renderSquare(27,"white")}
                {this.renderSquare(28,"LightGray")}
                {this.renderSquare(29,"white")}
                {this.renderSquare(30,"LightGray")}
                {this.renderSquare(31,"white")}
            </div>
            <div className="board-row">
                {this.renderSquare(32,"white")}
                {this.renderSquare(33,"LightGray")}
                {this.renderSquare(34,"white")}
                {this.renderSquare(35,"LightGray")}
                {this.renderSquare(36,"white")}
                {this.renderSquare(37,"LightGray")}
                {this.renderSquare(38,"white")}
                {this.renderSquare(39,"LightGray")}
            </div>
            <div className="board-row">
                {this.renderSquare(40,"LightGray")}
                {this.renderSquare(41,"white")}
                {this.renderSquare(42,"LightGray")}
                {this.renderSquare(43,"white")}
                {this.renderSquare(45,"LightGray")}
                {this.renderSquare(46,"white")}
                {this.renderSquare(47,"LightGray")}
                {this.renderSquare(48,"white")}
            </div>
            <div className="board-row">
                {this.renderSquare(49,"white")}
                {this.renderSquare(50,"LightGray")}
                {this.renderSquare(51,"white")}
                {this.renderSquare(52,"LightGray")}
                {this.renderSquare(53,"white")}
                {this.renderSquare(54,"LightGray")}
                {this.renderSquare(55,"white")}
                {this.renderSquare(56,"LightGray")}
            </div>
            <div className="board-row">
                {this.renderSquare(57,"LightGray")}
                {this.renderSquare(58,"white")}
                {this.renderSquare(59,"LightGray")}
                {this.renderSquare(60,"white")}
                {this.renderSquare(61,"LightGray")}
                {this.renderSquare(62,"white")}
                {this.renderSquare(63,"LightGray")}
                {this.renderSquare(64,"white")}
            </div>
            </div>
        );
        }
    }
    
    ReactDOM.render(
        <Board />,
        document.getElementById('root')
      );