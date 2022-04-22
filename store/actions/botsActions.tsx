import {BOTS} from '../constants/botsConstants';

export function BotsActions(action = '', params = {}) {
  return {
    type: (BOTS as any)[action],
    params: params,
  };
}
