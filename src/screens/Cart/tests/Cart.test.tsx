import { render } from "utils/test-utils";
import { screen } from "@testing-library/react";
import Cart from "..";

const App = () => render(<Cart/>)

describe('if cart is empty', () => {

    test("It should render a message if the array is empty", () => {
        App();
      
        expect(screen.getByText("Seu carrinho está vazio")).toBeInTheDocument();
    });

})


