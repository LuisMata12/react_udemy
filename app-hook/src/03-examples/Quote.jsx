import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'

export const Quote = ({quote,author}) => {

  return (
    <blockquote className="blockquote text-end"
                style={{display:"flex"}}>
    <p className=" mb-1">{quote}</p>
    <footer className="blockquote-footer mt-1">{author}</footer>
    </blockquote>
  )
}
