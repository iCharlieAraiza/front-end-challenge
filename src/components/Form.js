import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { CATEGORIES } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { Overlay, FormWrap } from "./Styled";
import { Link } from "react-router-dom";


const Form = ({ id, title, cat, body, display = "" }) => {
  const {  updatePost} = useContext(GlobalContext);

  const titleInput = useInput('text', title)
  const bodyInput = useInput('text', body)
  const catInput = useInput('text', cat)

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const title = e.currentTarget[0].value;
    const body = e.currentTarget[1].value;
    const cat = e.currentTarget[2].value;

    const newPost = {
      id: id,
      title,
      body,
      cat,
    };

    updatePost(id, newPost)
    navigate('/')
  };

  const handleClick = () => {
    navigate('/')

  };

  return (
    <>
      <Overlay />
      <FormWrap onSubmit={onSubmit}>
        <Link to="/">Back</Link>
        <h3>{display}</h3>
        <div className="form-group">
          <input type="text" placeholder="Title" {...titleInput} required />
        </div>
        <div className="form-group">
          <textarea placeholder="Content" {...bodyInput} />
        </div>
        <div className="form-group">
          <select {...catInput}>
            {CATEGORIES.map((cat) => (
              <option key={`${cat}-option`} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="button-section">
          <button type="submit">Submit</button>
          <button type="reset" onClick={() => handleClick()}>
            Reset
          </button>
        </div>
      </FormWrap>
    </>
  );
};
export default Form;

