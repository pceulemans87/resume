import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import '../../styles/features/player/player.css';
import ReactPlayer from 'react-player';
import { setDuration, setPlay, setPlayed, setSeeking } from '../../features/player/PlayerSlice';
import { Card } from '../../components';
import VolumeControls from './VolumeControls';
import ProgressControls from './ProgressControls';
import PlaybackControls from './PlaybackControls';

interface PlayerProps {

}

const Player = (props: PlayerProps ) => {
    const playerRef = React.useRef<ReactPlayer>(null);
    const controlRef = React.useRef<HTMLDivElement>(null);
    const state = useAppSelector((state) => state.player);
    const dispatch = useAppDispatch();
    
    const { duration, mute, play, played, seek, seeking, volume } = state;

    React.useEffect(() => {

    }, [ duration, mute, play, played, seek, seeking, volume ]);

    function handleDuration( duration: number ) {
        dispatch( setDuration( duration ))
    }

    function handleProgress(value: { played: number, playedSeconds: number }) {
        dispatch(setPlayed(value.playedSeconds));
    }

    function handleRewind() {
        if ( playerRef && playerRef.current ) {
            playerRef.current.seekTo(Number(playerRef.current.getCurrentTime()) - 10);
        }
    }

    function handleFastForward() {
        if ( playerRef && playerRef.current ) {
            playerRef.current.seekTo(Number(playerRef.current.getCurrentTime()) + 10);
        }
    }
    
    function handleSeekUp( event: React.FormEvent<HTMLInputElement> ) {
        dispatch( setPlayed( Number( event.currentTarget.value )));

        if ( playerRef && playerRef.current ) {
            playerRef.current.seekTo( Number( event.currentTarget.value ));
        }

        dispatch( setSeeking( false ));
        !play && dispatch( setPlay( true ));
    }

    

    return(
        <div className='player'>
            <Card>
                <div className="player_window">
                    <ReactPlayer 
                        ref={ playerRef }
                        className="player_video"
                        url={ 'https://www.youtube.com/watch?v=sCtixpIWBto' }
                        playing={ play }
                        loop={ false }
                        controls={ false }
                        light={ false }
                        volume={ mute ? 0 : volume }
                        muted={ false }

                        onPlay={ () => dispatch(setPlay( true )) }
                        onPause={ () => dispatch(setPlay( false)) } 
                        onProgress={ (e) => handleProgress(e) }
                        onDuration={ (e) => handleDuration(e) }
                        onEnded={ () => console.log('play next') }
                    />
                </div>

                <div className='player_controls' ref={ controlRef }>
                    <PlaybackControls 
                        onFastForward={ handleFastForward }
                        onRewind={ handleRewind }
                    />

                    <ProgressControls 
                        onSeekUp={ (e) => handleSeekUp(e) }
                    />

                    <VolumeControls />
                </div>
            </Card>
        </div>
    )
}

export default Player;