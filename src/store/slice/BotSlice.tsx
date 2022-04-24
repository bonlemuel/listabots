import { createSlice } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../Store";
import { getAllBots, getCurrentBot } from "../selectors/BotSelectors";

export interface BotState {
  all_bots: any;
  current_bot: Object;
}

const initialState: BotState = {
  all_bots: [],
  current_bot: {},
};

/** actions & reducer */
export const botSlice = createSlice({
  name: "bots",
  initialState,
  reducers: {
    createBot: (state, action) => {
      return { ...state, all_bots: [action.payload, ...state.all_bots] };
    },
    updateBot: (state, action) => {
      const bots = state.all_bots.map((bot: any) => {
        if (bot.id === action.payload.id) {
          bot = action.payload;
        }
        return bot;
      });
      return { ...state, all_bots: [...bots] };
    },
    deleteBot: (state, action) => {
      const bots = state.all_bots.filter((bot: any) => bot.id !== action.payload.id);
      return { ...state, all_bots: [...bots] };
    },
    selectBot: (state, action) => {
      return { ...state, current_bot: action.payload };
    },
  },
});

export const { createBot, updateBot, deleteBot, selectBot } = botSlice.actions;

/** selectors */
export const selectAllBots = (state: RootState) => getAllBots(state);
export const selectCurrentBot = (state: RootState) => getCurrentBot(state);

export default botSlice.reducer;
