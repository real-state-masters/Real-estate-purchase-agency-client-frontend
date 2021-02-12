import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'counter',
    initialState: {
        total: 10
    },
    reducers: {
        add(state){
            state.total++
        },
        sub(state){
          state.total--
      },
    }
})

export const { add, sub } = slice.actions;
export default slice.reducer;