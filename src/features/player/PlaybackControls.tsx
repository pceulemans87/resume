import React from 'react';
import { IconButton } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setPlay } from './PlayerSlice';
import { mdiFastForward, mdiPause, mdiPlay, mdiRewind } from '@mdi/js';

interface PlaybackControlProps {
    onRewind: () => void;
    onFastForward: () => void;
}

const PlaybackControls = (props: PlaybackControlProps) => {
    const { onRewind, onFastForward } = props;
    const state = useAppSelector((state) => state.player);
    const dispatch = useAppDispatch();

    // VIDEO PLAY PAUSE CONTROLS
    function handlePlayPause() {
        dispatch(setPlay( !state.play ));
    }
    
    return(        
        <div className='playback_controls'>
            {/* <Icon onClick={() => handlePrevious()} icon={ mdiSkipBackward} /> */}
            <IconButton onClick={ onRewind } icon={ mdiRewind } size={ 1 } />
            <IconButton onClick={ handlePlayPause } icon={ state.play ? mdiPause : mdiPlay } size={ 1.5 } />                    
            <IconButton onClick={ onFastForward } icon={ mdiFastForward } size={ 1 } />
            {/* <Icon onClick={() => handleNext()} icon={ mdiSkipForward }/> */}
        </div>
    )
}

export default PlaybackControls;