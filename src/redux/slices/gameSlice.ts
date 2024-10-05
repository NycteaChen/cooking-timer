import { createSlice } from "@reduxjs/toolkit";
import type { Middleware, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

interface GameState {
  level: string;
}

const initialState: GameState = {
  level: "",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setGameLevel: (state, action: PayloadAction<string>) => {
      state.level = action.payload;
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

export const { setGameLevel } = gameSlice.actions;

export default gameSlice.reducer;
