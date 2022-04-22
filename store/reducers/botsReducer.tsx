import {BOTS} from '../constants/botsConstants';

const INITIAL_STATE = {
  bots: null,
  current_bot: null,
};

const botsReducer = (
  state = INITIAL_STATE,
  action = {type: '', params: {}},
) => {
  switch (action.type) {
    case BOTS.ADD_NEW_BOT:
      return {
        ...state,
      };
    case BOTS.UPDATE_BOT:
      return {
        ...state,
      };
    case BOTS.DELETE_BOT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default botsReducer;
