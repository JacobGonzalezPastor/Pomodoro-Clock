import React, { useContext, useEffect, useRef, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BotonInicio from './BotonInicio';
import '../style/Timer.css';
import BotonPause from './BotonPause';
import Configuracion from './Configuracion';
import ConfigContext from './ConfigContext';

const mist = '#00ffbf';
const blue = '#00a8eb';

const Timer = () => {
    const settingsInfo = useContext(ConfigContext);

    const [pause, setPause] = useState(true);
    const [mode, setMode] = useState('work')
    const [seconds, setSeconds] = useState(0);

    const secondsRef = useRef(seconds);
    const pauseRef = useRef(pause);
    const modeRef = useRef(mode);


    const tick = () => {
        secondsRef.current--;
        setSeconds(secondsRef.current);
    }

    useEffect(() => {

        const switchMode = () => {
            const nextMode = modeRef.current === 'work'
                ? 'break'
                : 'work';
            const nextSeconds = (nextMode === 'work'
                ? settingsInfo.workMin
                : settingsInfo.breakMin
            ) * 60;
            setMode(nextMode);
            modeRef.current = nextMode;

            setSeconds(nextSeconds);
            secondsRef.current = nextSeconds;
        }

        secondsRef.current = settingsInfo.workMin * 60;
        setSeconds(secondsRef.current);

        const interval = setInterval(() => {
            if (pauseRef.current) {
                return;
            }
            if (secondsRef.current === 0) {
                return switchMode();
            }

            tick();
        }, 1000);

        return () => clearInterval(interval);

    }, [settingsInfo]);

    const totalSeconds = mode === 'work'
        ? settingsInfo.workMin * 60
        : settingsInfo.breakMin * 60;
    let percentage = Math.round(seconds / totalSeconds * 100) ;

    const mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;

    return (
        <div className='container-timer'>
            <CircularProgressbar
                value={percentage}
                text={mins + ':' + secs}
                styles={buildStyles({
                    textColor: '#eee',
                    pathColor: mode === 'work' ? blue : mist,
                    tailColor:'rgba(255,255,255,.2)',
                })} />

            <div className='container-buttons'>
                {
                    pause
                        ? <BotonInicio onClick={() => { setPause(false); pauseRef.current = false; }} />
                        : <BotonPause onClick={() => { setPause(true); pauseRef.current = true; }} />
                }

            </div>
            <Configuracion />
        </div>
    )
}

export default Timer;