import React from 'react';
import {updateHistory} from '../../../actions/gameActions';
import { useGameStore } from '../../../context';
import './Step.scss';

export const Step = () => {
    const [state, dispatch] = useGameStore();

    return state.history.map((el, index) => {
        if (index) {
            return (
                <div key={index}>
                    <button className="step" onClick={()=> dispatch(updateHistory(index))}>
                        Back to {index} step
                    </button>
                </div>
            )
        }
    })
};