import { rest } from "msw";

const url = process.env.REACT_APP_PRODUCTS;

export const getMockProducts = 
  rest.get(`${url}product`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "1",
          createdAt: "2019-09-02T12:58:54.103Z",
          name: "Rustic Metal Fish",
          price: "289.00",
          image: "http://lorempixel.com/640/480/food",
          stock: 65171,
        },
        {
          id: "2",
          createdAt: "2019-09-02T07:59:58.181Z",
          name: "Sleek Wooden Soap",
          price: "430.00",
          image: "http://lorempixel.com/640/480/transport",
          stock: 91260,
        },
        {
          id: "3",
          createdAt: "2019-09-02T22:14:05.454Z",
          name: "Small Cotton Shoes",
          price: "993.00",
          image: "http://lorempixel.com/640/480/sports",
          stock: 36608,
        },
        {
          id: "4",
          createdAt: "2019-09-02T07:36:56.139Z",
          name: "Ergonomic Frozen Towels",
          price: "259.00",
          image: "http://lorempixel.com/640/480/nightlife",
          stock: 92065,
        },
      ])
    );
  });

  export const handlers = [getMockProducts];
