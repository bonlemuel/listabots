import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState, AppThunk} from '../Store';
import {fetchCount} from '../api';
import {getCounter} from '../selectors/AuthSelectors';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'rejected';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    /** actions & reducers */
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: builder => {
    /** events & assigner */
    builder
      .addCase(incrementAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        console.debug('action', action.type);
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, state => {
        state.status = 'rejected';
      });
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

/** selectors */
export const selectCount = (state: RootState) => getCounter(state);

/** local redux */
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };

/** api */
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    console.debug('response', response);
    return response.data;
  },
);

export default counterSlice.reducer;
