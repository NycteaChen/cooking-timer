import { createSlice } from "@reduxjs/toolkit";
import type { Middleware, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import type { levelItem } from "@/utils/levelList";
import type { recipeItem } from "@/utils/levelRecipes";

type GameRecordType = {
  level: levelItem["level"];
  recipeName: recipeItem["name"];
  record: string;
  score: string;
  targetTime: recipeItem["time"];
  userName: string;
};

interface GameState {
  [key: string]: GameRecordType[];
}

const initialState: GameState = {};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setUserRecord: (state, action: PayloadAction<GameRecordType>) => {
      if (!state[action.payload.userName]?.length) {
        const arr = [];
        arr.push(action.payload);
        state[action.payload.userName] = arr;
      } else {
        state[action.payload.userName].push(action.payload);
      }
    },
  },
});

export const preloadGameStore = () => {
  if (localStorage.getItem("gameState") !== null) {
    return JSON.parse(localStorage.getItem("gameState") || "{}"); // re-hydrate the store
  }
};

//MIDDLEWARE
// https://github.com/reduxjs/redux-toolkit/issues/368
export const gameMiddleware: Middleware<object, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem("gameState", JSON.stringify(store.getState()));
    return result;
  };

export const { setUserRecord } = gameSlice.actions;

export default gameSlice.reducer;
