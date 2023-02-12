import styled from 'styled-components';

export const Main = styled.main`

`

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    box-sizing: border-box;
    &.page {
        padding-top: 5rem;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 1rem;
    padding: 1rem;
`



export const HeaderWrapper = styled.header`
    text-align: center;
`
