import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const { title, body, cat, id } = props;

  return (
    <CardContainer>
      <div className="card-content">
        <Link to={`/posts/${id}`}>
            <h1>{title}</h1>
            <p>{body}</p>
            <p>{cat}</p>
        </Link>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  z-index: 1;
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
    background-color: rgb(221 221 221 / 50%);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    top: 0;
    box-sizing: border-box;

    h3 {
      margin: 0 0 10px;
      font-size: 20px;
      font-weight: 400;
      color: #fff;
    }
    p {
      margin: 0;
      font-size: 14px;
      color: #fff;
    }
  }
`;


export default Cards;


