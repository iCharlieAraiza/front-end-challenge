import React, {useContext, useEffect} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import { useParams, useNavigate, Link } from "react-router-dom";


const Post = () => {
  const {getCurrentPost, isLoading, data} = useContext(GlobalContext)

  const { id } = useParams();
  const navigate = useNavigate();

  const resp = getCurrentPost(id)

  if (!isLoading) {
    if (resp === undefined) {
      navigate('/404')
    }
  }
  if(isLoading) return <span className="loader"></span>

  const post = data?.filter((item) => item.id === parseInt(id))
  const {title, body} = post[0]

  return (
    <div>
      <Link to="/">Go back</Link>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default Post