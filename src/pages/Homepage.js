import React, {useContext} from 'react'
import {Main, Container, Grid} from '../components/Styled'
import Header from '../components/Header'
import { GlobalContext} from '../context/GlobalContext'
import Card from '../components/Card'


const Homepage = () => {
  const { data, isLoading} = useContext(GlobalContext)


  return (
    <Main>
        <Container>
            <Header />
            {isLoading ? <span className="loader"></span> :  
                <>
                    <Grid>
                      {data?.map((item) => (
                        <Card key={item.id} {...item} />
                      ))}
                    </Grid>
                </>
            }
        </Container>
    </Main>
  )
}

export default Homepage