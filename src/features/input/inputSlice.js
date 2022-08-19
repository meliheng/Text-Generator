import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 4,
};

export const inputSlice = createSlice({
	name: 'input',
	initialState,
	reducers: {
		changeInputValue: (state, action) => {
			state.value = action.payload;
		},
	},
});
export const { changeInputValue } = inputSlice.actions;

export default inputSlice.reducer;
