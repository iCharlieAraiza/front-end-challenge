import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getRandomImg } from "../utils/getRandomImg";
import { GlobalContext } from "../context/GlobalContext";
import { BsTrash } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { CardContainer, ButtonSection, ButtonWrapper, CardTitle } from "./Styled";

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
        <CardTitle>{sumUp(title, 40)}</CardTitle>
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

export default Cards;
