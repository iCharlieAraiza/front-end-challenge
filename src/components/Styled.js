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
    margin-top: 1rem;
    padding: 1rem;
    @media (min-width: 480px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`

export const HeaderWrapper = styled.header`
    text-align: center;
`

export const FormWrap = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  margin: auto;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 450px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  z-index: 10;

  h3 {
    margin: 0 0 20px;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
    input,
    textarea,
    select {
      box-sizing: border-box;
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      outline: none;
      &:focus {
        border-color: #333;
      }
    }
    textarea {
      min-height: 100px;
    }
    select {
      padding: 5px;
    }
  }
  .button-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
    button[type="submit"] {
      background-color: #333;

      color: #fff;
    }
    button[type="reset"] {
      background-color: #fff;
      color: #333;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;


export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  margin: 0 auto;
  flex-wrap: wrap;
  .active {
    background-color: #dadada;
  }
  button {
    background: transparent;
    border: 1px solid #ececec;
    padding: 10px 20px;
    width: 50%;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        background-color: #dadada;
    }
    @media (min-width: 480px) {
        width: 8rem;
    }
  }
`;


export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  margin: 0;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  svg {
    color: white;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.3rem;
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const CardContainer = styled.div`
  a  {
    color: white;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1rem;
  }
  width: 100%;
  height: 300px;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  z-index: 1;
  .category {
    text-transform: uppercase;
    color: white;
    font-weight: 600;
  }
  .card-image {
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }
  }
  .card-content {
    height: 100%;
    background: linear-gradient(
      0deg,
      rgb(0 0 0 / 54%) 0%,
      rgb(32 20 20 / 13%) 100%
    );
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    top: 0;
    box-sizing: border-box;
    p {
      margin: 0;
      font-size: 14px;
      color: #fff;
    }
  }
`;
