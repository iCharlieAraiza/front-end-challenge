import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getRandomImg } from "../utils/getRandomImg";
import { GlobalContext } from "../context/GlobalContext";

const Cards = (props) => {
  const { title, body, cat, id } = props;
  const { deletePost } = useContext(GlobalContext);


  return (
    <CardContainer>
      <LazyLoadImage
        effect="blur"
        src={getRandomImg(cat)}
        alt={cat}
      />
        <Link className="card-content" to={`/posts/${id}`}>
            <h1>{title}</h1>
            <p>{body}</p>            
        </Link>
        <ButtonSection>
            <p>{cat}</p>
       
            <p onClick={()=> {deletePost(id)}}>remove</p>
        </ButtonSection>
    </CardContainer>
  );
};

const ButtonSection = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
`

const CardContainer = styled.div`
  width: 100%;
  height: 280px;
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
    background-color: rgb(18 18 18 / 4%);
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


