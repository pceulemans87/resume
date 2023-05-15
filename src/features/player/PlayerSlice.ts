import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlayerState {
    seek: number;
}

const initialState: PlayerState = {
    seek: 0,
}

export const PlayerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        seek( state, action: PayloadAction ) {

        }
    }
});

export const { seek } = PlayerSlice.actions;
export default PlayerSlice.reducer;