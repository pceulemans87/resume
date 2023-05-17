import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlayerState {
    duration: number;
    mute: boolean;
    play: boolean;
    played: number;
    seek: number;
    seeking: boolean;
    volume: number;
    showControls: boolean;
}

const initialState: PlayerState = {
    duration: 0,
    mute: false,
    play: false,
    played: 0,
    seek: 0,
    seeking: false,
    volume: 0.5,
    showControls: false,
}

export const PlayerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setDuration( state, action: PayloadAction<number> ) {
            state.duration = action.payload;
        },
        setMute( state, action: PayloadAction<boolean> ) {
            state.mute = action.payload;
        },
        setPlay( state, action: PayloadAction<boolean> ) {
            state.play = action.payload;
        },
        setPlayed( state, action: PayloadAction<number> ) {
            state.played = action.payload;
        },
        setSeek( state, action: PayloadAction<number> ) {
            state.seek = action.payload;
        },
        setSeeking( state, action: PayloadAction<boolean> ) {
            state.seeking = action.payload;
        },
        setShowControls( state, action: PayloadAction<boolean> ) {
            state.showControls = action.payload;
        },
        setVolume( state, action: PayloadAction<number> ) {
            state.volume = action.payload;
        }
    }
});

export const { setDuration, setMute, setPlay, setPlayed, setSeek, setSeeking, setShowControls, setVolume } = PlayerSlice.actions;
export default PlayerSlice.reducer;