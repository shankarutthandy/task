import React from 'react'
import './Card.css'
export default function Card({data}) {
  return (
    <div className="container">
        <div className="id">
            <span className="idno">{data.id}</span>
        </div>
        <span className="title">{data.title}</span>
        <span className="body">{data.body}</span>
    </div>
  )
}
