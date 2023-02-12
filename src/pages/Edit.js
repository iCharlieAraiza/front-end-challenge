import React, {useContext} from 'react'
import Form from '../components/Form'
import {GlobalContext} from '../context/GlobalContext'
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { data, isLoading } = useContext(GlobalContext)
  const { id } = useParams();
  const navigate = useNavigate();
  let post =  data?.filter((item) => item.id === parseInt(id))


  if (!isLoading) {
    const post = data?.filter((item) => item.id === parseInt(id))
    if (post === undefined) {
      navigate('/404')
    }
  } 
  
  if(isLoading) return <span className="loader"></span>

  return (
    <div>
        <Form {...post[0]} display="Edit post"/>
    </div>
  )
}

export default Edit