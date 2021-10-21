import React, {useEffect} from 'react';
import './Game.scss';
import Board from '../Board/Board';
import { useGameStore } from '../../context';
import { calculateWinner} from '../../utils';
import { addToHistory, defineWinner, newGame, turnSign } from '../../actions';
import { Step } from './Step/Step';

export default function Game() {
    let date = new Date().toLocaleDateString();
    const [{ history, winner, isXTurn, disabled, winnerHistory }, dispatch] = useGameStore();
    const currentStep = history[history.length - 1];
    const handleClick = (i) => {
        const squares = [...currentStep.squares];
        squares[i] = isXTurn ? "X" : "O";
        const finalWinner = calculateWinner(squares);
        if (finalWinner) {
            dispatch(defineWinner(finalWinner));
          }
        dispatch(addToHistory(squares));
    };

    useEffect(()=> {
        localStorage.setItem('winners', JSON.stringify([]))
    }, []);

    if (winner) {
        localStorage.setItem('winners', JSON.stringify([...winner, date]));
    }

    return (
        <div>
            <div>
                <p style={{color:'white', fontSize:'20px', textAlign:"center"}}>Choose sign</p>
                <div className="choose-container">
                <button value="X"  disabled = {disabled} className="choose" onClick={()=> dispatch(turnSign(true))}>X</button>
                <button value="O" disabled = {disabled} className="choose" onClick={()=> dispatch(turnSign(false))}>O</button>
                </div>
            </div>
            <div className={winner ? "game disabled" : "game"}>
            <Board squares={currentStep.squares} onClick={handleClick}/>
            <div>
                {
                    winner
                    ? <p className="winner">Winner is {winner}</p>
                    : <p className="step-next">Next step is {isXTurn ? "X" : "O"}</p>
                } 
                <p style={{color:'white', fontSize:'20px'}}>Step History</p>
                <Step />
    
            </div>   
        </div>
        <div>
            {
            winner
            ? <button className="start" onClick={() => dispatch(newGame())}> Start new game</button>
            : ""
            }
        </div>  
        </div>
    )
}