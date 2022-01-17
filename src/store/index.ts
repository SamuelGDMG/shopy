import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from './productsApi';
import storeSlice from './storeSlice';

export function setUpStore() {
    const store = configureStore({
      reducer: {
          storeSlice,
          [productsApi.reducerPath]: productsApi.reducer
      },
      middleware: (gDM) => gDM().concat(productsApi.middleware)
    });
  
    setupListeners(store.dispatch);
  
    return store;
  }
  
  const store = setUpStore();
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export default store;