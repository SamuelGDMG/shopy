import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, productsApi } from "./productsApi";

export interface IApplicationSelected {
    [state: string]: {
      id: string;
      qty: number;
    };
}

export interface NormalizeIProduct{
    [state: string]: IProduct;
}

interface IInitialState{
    productsSelected: IApplicationSelected,
    allProducts: NormalizeIProduct,
}

const initialState = {
    productsSelected: {},
    allProducts: {}
} as IInitialState;

export const addProductToCart = createAction<string, string>('addProductToCart');
export const removeProductFromCart = createAction<string, string>('removeProductFromCart');
export const deleteProductFromCart = createAction<string, string>('deleteProductFromCart');


const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addProductToCart, (state, action: PayloadAction<string>) => {
            const payload = action.payload;

            const isProductSelected = state.productsSelected[payload];

            const qty = isProductSelected ? isProductSelected.qty + 1 : 1;

            state.productsSelected[payload] = {id: payload, qty: qty};

        }).addCase(deleteProductFromCart, (state, action: PayloadAction<string>) => {
            const payload = action.payload;

            const isProductSelected = state.productsSelected[payload];

            if(isProductSelected){
                delete state.productsSelected[payload];
            }

        }).addCase(removeProductFromCart, (state, action: PayloadAction<string>) => {
            const payload = action.payload;
            const isProductSelected = state.productsSelected[payload];

            const qty = isProductSelected ? isProductSelected.qty - 1 : -1;

            if(qty < 1 && isProductSelected){
                delete state.productsSelected[payload]
            } else if(qty >= 1 && isProductSelected){
                state.productsSelected[payload] = {id: isProductSelected.id, qty: qty};
            }


        }).addMatcher(productsApi.endpoints.getAllProducts.matchFulfilled, (state, {payload}) => {
            const normalizing  = payload.reduce((byId, product) => {
                byId[product.id] = product
                return byId
              }, {} as NormalizeIProduct);

              state.allProducts = normalizing; 
        })
    }
});

export const {} = storeSlice.actions;
export default storeSlice.reducer;