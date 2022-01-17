import { useAppSelector } from "store/storeHooks";
import { formatValue } from "utils";
import { ContainerSummary, ItemSummary } from "./styled";

const Summary: React.FC = () => {
  const allProducts = useAppSelector((e) => e.storeSlice.allProducts);
  const productSelected = useAppSelector((e) => e.storeSlice.productsSelected);
  const arrayProducts = Object.values(productSelected);
  const price = arrayProducts.reduce((prev, val) => prev + (val.qty * Number(allProducts[val.id].price)), 0.0);

  return (
    <ContainerSummary>
      <div style={{ display: "flex", justifyContent: "center" }}>Resumo</div>
      <Item text="Subtotal:" value={price}/>
      <Item text="Frete:" />
      <Item text="Desconto" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>Total: </div>
        <div style={{color: 'rgb(82, 177, 47)'}}>{formatValue(price)}</div>
      </div>
    </ContainerSummary>
  );
};

interface ItemProps {
  text: string;
  value?: number;
}

const Item: React.FC<ItemProps> = ({ text, value = 0 }) => (
  <ItemSummary>
    <div>{text}</div> {formatValue(value)}
  </ItemSummary>
);

export default Summary;
