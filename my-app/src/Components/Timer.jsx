import React from 'react';

function Timer({time}) {
    return (
        <div>
            <ul>
                {time.map(time=><li key={time.time}>{time.time}</li>)}
            </ul>
        </div>
    )
}

export default Timer;