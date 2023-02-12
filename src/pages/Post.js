import React, {useContext, useEffect} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import { useParams, useNavigate, Link } from "react-router-dom";
import {Container, BlogPost} from '../components/Styled'
import {AiOutlineHome} from 'react-icons/ai'

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
  const {title, body, cat} = post[0]

  return (
    <BlogPost>
      <Container>
        <Link className="home-link" to="/"><AiOutlineHome className='home-icon'/> Go Back</Link>
        <h1>{title}</h1>
        <p>{body}</p>
        <div>
          Category: 
          <span className='category'>{cat}</span>
        </div>
      </Container>
    </BlogPost>
  )
}

export default Post