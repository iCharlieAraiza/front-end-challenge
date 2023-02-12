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
    bottom: 10px;
    left: 10px;
    border-radius: 50%;
    border: none;
    background-color: #f67f50;
    svg {
        color: white;
        font-size: 1.4rem;
    }
`