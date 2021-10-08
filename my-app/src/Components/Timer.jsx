import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Timer({times}) {

    return (
        <div>
            <ul>
                {times.map(time=><li key={uuidv4()}>{time.hour}:{time.minute}:{time.second}</li>)}
            </ul>
        </div>
    )
}

export default Timer;