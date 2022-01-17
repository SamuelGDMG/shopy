import Product from "components/Product";
import React from "react";
import { useGetAllProductsQuery } from "store/productsApi";
import { Container } from "./styled";

const List : React.FC = () => {
    const {data = [], error, isLoading, isFetching} = useGetAllProductsQuery();


    return <Container>
        {
            data.map(e => <Product key={e.id} product={e}/>)
        }
    </Container>
}

export default List;