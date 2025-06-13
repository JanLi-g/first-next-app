import { createSlice } from '@reduxjs/toolkit';

const initialState = { X: 0, O: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {

            if (action.payload === 'X' || action.payload === 'O') {
                state[action.payload] += 1;
            }
        },
        reset: (state) => {
            state.X = 0;
            state.O = 0;
        }
    }
});

export const { increment, reset } = counterSlice.actions;
export default counterSlice.reducer;
