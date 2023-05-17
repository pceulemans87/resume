import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setPlay, setSeek, setSeeking } from './PlayerSlice';
import { Typography } from '../../components';
import '../../styles/features/player/progress-controls.css';

interface ProgressControlProps {
    onSeekUp: (event: React.FormEvent<HTMLInputElement>) => void;
}

const ProgressControls = (props: ProgressControlProps) => {
    const state = useAppSelector(( state ) => state.player );
    const dispatch = useAppDispatch();

    const { duration, played, seek, seeking } = state;
    // VIDEO SEEK CONTROLS
    function handleSeekChange( event: React.FormEvent<HTMLInputElement> ) {
        dispatch( setSeek( Number( event.currentTarget.value )));
    }

    function handleSeekDown() {
        dispatch( setSeeking( true ));
        dispatch( setPlay( false ));
    }

    // FORMAT TIMESTAMPS
    function format( seconds: number ) {
        if( isNaN( seconds )) {
            return '00:00'
        }
        
        const date = new Date( seconds * 1000 );
        const hh = date.getUTCHours();
        const mm = date.getUTCMinutes();
        const ss = date.getUTCSeconds().toString().padStart(2, "0");

        if(hh) {
            return `${ hh }:${ mm.toString().padStart( 2,"0" )}:${ss}`;
        }

        return `${ mm }:${ ss }`;
    }


    return(
        <div className='progress_controls'>
            <div className='progress_input'>
                <input
                    className='progress_slider'
                    type='range' 
                    min={ 0 } 
                    max={ duration } 
                    step='any'
                    value={ seeking ? seek : played }
                    onInput={(e) => handleSeekChange(e)}
                    onMouseDown={ () => handleSeekDown() }
                    onMouseUp={ (e) => props.onSeekUp(e) }
                />

                <div 
                    className='progress_tracker'
                    style={{
                        width: `${(seeking ? seek : played) / duration * 100}%`,
                    }}
                />
            </div>

            <div className='progress_time'>
                <Typography variant='subtext'>{ format( seeking ? seek : played ) }</Typography>
                <Typography variant='subtext'> / </Typography>
                <Typography variant='subtext'>{ format( duration ) }</Typography>
            </div>
        </div>
    )
}

export default ProgressControls;