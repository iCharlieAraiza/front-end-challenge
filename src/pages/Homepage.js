import React, {useContext, useState} from 'react'
import {Main, Container, Grid} from '../components/Styled'
import Header from '../components/Header'
import { GlobalContext} from '../context/GlobalContext'
import Card from '../components/Card'
import Filter from '../components/Filter'


const Homepage = () => {
  const { data, isLoading} = useContext(GlobalContext)
  const [filter, setFilter] = useState('All')


  return (
    <Main>
        <Container>
            <Header />
            {isLoading ? <span className="loader"></span> :  
                <>
                  <Filter setFilter={setFilter} filter={filter}/>
                  <Grid>
                    {
                        filter === 'All' ? data?.map(item => <Card key={item.id} {...item}/>) :
                        data?.filter(item => item.cat === filter).map(item => <Card key={item.id} {...item}/>)
                    }
                    </Grid>
                </>
            }
        </Container>
    </Main>
  )
}

export default Homepage