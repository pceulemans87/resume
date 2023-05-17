import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setVolume, setMute } from './PlayerSlice';
import { IconButton } from '../../components';
import { mdiMinus, mdiPlus, mdiVolumeHigh, mdiVolumeOff } from '@mdi/js';
import '../../styles/features/player/volume-controls.css';

const VolumeControls = () => {
    const state = useAppSelector((state) => state.player);
    const dispatch = useAppDispatch();
    const { mute, volume } = state;

    React.useEffect(() => {

    }, [ mute, volume ]);

    // VIDEO VOLUME CONTROLS
    function handleVolume(event: React.FormEvent<HTMLInputElement>) {
        if( mute ) {
            dispatch( setMute( false ));
        }

        dispatch(setVolume( Number(event.currentTarget.value) / 10 ));
    }

    function handleVolumeDown() {
        if( volume > 0 ) {
            dispatch(setVolume(volume - 0.1));
        }
    }    

    function handleVolumeUp() {
        if( Number(volume.toFixed(1)) < 1 ) {
            dispatch( setVolume( volume + 0.1 ));
        }
    }

    function handleMute() {
        dispatch( setMute( !mute ));
    }

    return(
        <div className='volume_controls'>
            <div>
                <IconButton 
                    icon={ mute ? mdiVolumeOff : mdiVolumeHigh }
                    onClick={ handleMute }
                    size={0.75}
                />
            </div>

            <div className='volume_input'>
                <input 
                    className='volume_slider'
                    type='range'
                    min='0'
                    max='10'
                    step='auto'
                    value={ mute ? 0 : volume * 10 }
                    onInput={ (e) => handleVolume(e) }
                />
                
                <div 
                    className='volume_tracker' 
                    style={{
                        width: `${ mute ? 0 : volume * 100 }%`,
                    }}
                />
            </div>
            
            <IconButton 
                onClick={ handleVolumeDown }
                icon={ mdiMinus }
                size={ 0.5 }
            />
            
            <IconButton 
                onClick={ handleVolumeUp } 
                icon={ mdiPlus } 
                size={ 0.5 }
            />
        </div>
    )
}

export default VolumeControls;