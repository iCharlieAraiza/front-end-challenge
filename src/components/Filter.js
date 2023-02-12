import styled from "styled-components";
import { CATEGORIES } from "../utils/constants";

const Filter = (props) => {
  const { filter, setFilter } = props;
  return (
    <Box>
      <button
        className={filter === "All" ? "active" : ""}
        key={`all-button`}
        onClick={() => setFilter("All")}
      >
        All
      </button>
      {CATEGORIES.map((category, index) => {
        return (
          <button
            className={filter === category ? "active" : ""}
            key={`${index}${category}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        );
      })}
    </Box>
  );
};

const Box = styled.div`
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


export default Filter;
