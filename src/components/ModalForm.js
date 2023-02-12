import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import { CATEGORIES } from "../utils/constants";

const ModalForm = ({ isShowing, setIsShowing }) => {
  const { addNewPost } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const title = e.currentTarget[0].value;
    const body = e.currentTarget[1].value;
    const cat = e.currentTarget[2].value;

    const newPost = {
      id: new Date().getTime(),
      title,
      body,
      cat,
    };

    addNewPost(newPost);
  };

  const handleClick =() => {
    console.log('click')
    setIsShowing(false)
  }

  return (
    <>
      {isShowing ? (
        <>
          <Overlay  onClick={()=> handleClick()} />
          <Form onSubmit={onSubmit}>
            <h3>Create a new post</h3>
            <div className="form-group">
              <input type="text" placeholder="Title" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Content" />
            </div>
            <div className="form-group">
              <select>
                {CATEGORIES.map((cat) => (
                  <option key={`${cat}-option`} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="button-section">
              <button type="submit">Submit</button>
              <button type="reset" onClick={()=> handleClick()}>Reset</button>
            </div>
          </Form>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ModalForm;

const Form = styled.form`
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;
