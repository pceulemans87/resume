import { mdiPlay } from '@mdi/js';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlayerState {
    value: number;
}

const initialState: PlayerState = {
    value: 0
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        fastforward(state) {

        }
    }
});

export const { fastforward } = playerSlice.actions;
export default playerSlice.reducer;