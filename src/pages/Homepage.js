import React, { useContext, useState } from "react";
import { Main, Container, Grid } from "../components/Styled";
import EditButton from '../components/EditButton'
import Header from "../components/Header";
import { GlobalContext } from "../context/GlobalContext";
import Card from "../components/Card";
import Filter from "../components/Filter";
import ModalForm from "../components/ModalForm";
import Loader from "../components/Loader";

const Homepage = () => {
  const { data, isLoading } = useContext(GlobalContext);
  const [filter, setFilter] = useState("All");
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Main>
      <Container>
        <Header />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Filter setFilter={setFilter} filter={filter} />
            <Grid>
              {filter === "All"
                ? data?.map((item) => <Card key={item.id} {...item} />)
                : data
                    ?.filter((item) => item.cat === filter)
                    .map((item) => <Card key={item.id} {...item} />)}
            </Grid>
          </>
        )}
      </Container>
      <EditButton onClick={() => setIsShowing(true)}>Toggle</EditButton>
      {isShowing ? <ModalForm isShowing={isShowing} setIsShowing={setIsShowing}/> : ''}
    </Main>
  );
};

export default Homepage;
