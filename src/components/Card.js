import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getRandomImg } from "../utils/getRandomImg";
import { GlobalContext } from "../context/GlobalContext";
import { BsTrash } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";

const Cards = (props) => {
  const { title, body, cat, id } = props;
  const { deletePost } = useContext(GlobalContext);

  const sumUp = (str, limit) => {
    if (str.length > limit) {
      return str.slice(0, limit) + "...";
    }
    return str;
  };

  return (
    <CardContainer>
      <LazyLoadImage effect="blur" src={getRandomImg(cat)} alt={cat} />
      <Link className="card-content" to={`/posts/${id}`}>
        <Title>{sumUp(title, 40)}</Title>
        <p>{sumUp(body, 80)}</p>
      </Link>
      <ButtonSection>
        <p className="category">{cat}</p>
        <ButtonWrapper>
          <Link className="edit-icon" to={`/edit/${id}`}>
            <MdModeEditOutline />
          </Link>
          <button
            onClick={() => {
              deletePost(id);
            }}
          >
            <BsTrash />
          </button>
        </ButtonWrapper>
      </ButtonSection>
    </CardContainer>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  margin: 0;
`;

const ButtonSection = styled.div`
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

const Title = styled.h3`
  font-size: 1.3rem;
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CardContainer = styled.div`
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

export default Cards;
