import { render } from "utils/test-utils";
import { fireEvent, screen } from "@testing-library/react";
import { server } from 'mocks/server';
import { getMockProducts } from "mocks/handlers";
import Home from "screens/Home";

const App = () => render(<Home/>);

describe('Component: MiniCart', () => {
    test("It should render the cart's message", async () => {
        server.use(getMockProducts);
        App();

        fireEvent.mouseOver(screen.getByTestId('icon-minicart'));

        expect(screen.getByText('Sua sacola está vazio')).toBeInTheDocument();
    });

    test("It should not render the cart's message", async () => {
        server.use(getMockProducts);
        App();

        await screen.findAllByText('Comprar');

        fireEvent.click(screen.getAllByText('Comprar')[0]);

        fireEvent.mouseOver(screen.getByTestId('icon-minicart'));

        expect(screen.queryByText('Sua sacola está vazio')).not.toBeInTheDocument();
    });
});