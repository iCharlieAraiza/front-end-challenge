import React from 'react'
import styled from 'styled-components'
import {MdModeEdit} from 'react-icons/md'

const EditButton = () => {
  return (
    <Button>
        <MdModeEdit/>      
    </Button>
  )
}

export default EditButton

const Button = styled.button`
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: #f67f50;
    right: 1rem;
    top: 2rem;
    svg {
        color: white;
        font-size: 1.4rem;
    }
`