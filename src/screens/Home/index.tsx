import Header from "components/Header";
import List from "components/List";
import React from "react";
import { Container, Content } from "./styled";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <List />
        </Content>
      </Container>
    </>
  );
};

export default Home;
