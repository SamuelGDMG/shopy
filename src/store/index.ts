import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import storeSlice from './storeSlice';

export function setUpStore() {
    const store = configureStore({
      reducer: {
          storeSlice
      },
      middleware: (gDM) => gDM()
    });
  
    setupListeners(store.dispatch);
  
    return store;
  }
  
  const store = setUpStore();
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export default store;