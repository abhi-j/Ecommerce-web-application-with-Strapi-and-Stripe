import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const stripe = require("stripe")(
  "sk_test_51MfrW1SHJyYKBMZOfKtYlvbaC1hRF3KyyGzS9xboMSQdhGfNq7gFz44s0VcRauIwyy6qglVt1PYFBQEfDcp3fFK200Vj8Fp4B4"
);

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
