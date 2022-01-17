import { render } from "utils/test-utils";
import { screen } from "@testing-library/react";
import { server } from 'mocks/server';
import Home from "..";
import { getMockProducts } from "mocks/handlers";

const App = () => render(<Home/>);

describe('Products loaded', () => {

    test("It should render 4 product card", async () => {
        server.use(getMockProducts);
        const {debug} = App();

        const products = await screen.findAllByText('Comprar');
      
        expect(products).toHaveLength(4);
    });

});