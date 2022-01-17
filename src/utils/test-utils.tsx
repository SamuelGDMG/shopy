import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import storeSlice from "store/storeSlice";
import { productsApi } from "store/productsApi";
import { BrowserRouter } from "react-router-dom";

function render(
  ui: any,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        storeSlice,
        [productsApi.reducerPath]: productsApi.reducer
      },
      preloadedState,
      middleware: (gDM) => gDM().concat(productsApi.middleware)
    }),
    ...renderOptions
  } : {preloadedState?: any, store?: any} = {}
) {
  function Wrapper({ children } : {children: any}) {
    return (
      <BrowserRouter><Provider store={store}>{children}</Provider></BrowserRouter>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
