import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IProduct{
    id: string;
    createdAt: string;
    name: string;
    image: string;
    stock: number;
    price: string;
}

const url = process.env.REACT_APP_PRODUCTS;

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: url}),
    endpoints: (builder) => ({
        getAllProducts: builder.query<IProduct[], void>({
            query: () => `product`,
        })
    })
});

export const {useGetAllProductsQuery} = productsApi;
