import { configureStore } from '@reduxjs/toolkit';
import PlayerReducer from '../features/player/PlayerSlice';

export const store = configureStore({
    reducer: {
        player: PlayerReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;