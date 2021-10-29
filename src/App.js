import React from 'react';
import BreakTime from './components/BreakTime';
import WorkTime from './components/WorkTime';
import Timer from './components/Timer';
import './App.css';

const App = () => {
    return (
        <div className='App-container'>
            <h1 style={{color: '#fff'}}>Redux Pomodoro App</h1>
            <Timer />
            <div className='set-time-container'>
                <WorkTime />
                <BreakTime />
            </div>
        </div>
    )
}

export default App;