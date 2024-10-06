import { configureStore } from "@reduxjs/toolkit";
import gameReducer, {
  gameMiddleware,
  preloadGameStore,
} from "./slices/gameSlice";

export const store: ReturnType<typeof configureStore> = configureStore({
  reducer: gameReducer,
  preloadedState: preloadGameStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([gameMiddleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
