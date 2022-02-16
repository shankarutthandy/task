import React from 'react'
import './Users.css'
import Card from '../Card/Card'
export default function Users({list}) {
  return (
    <div className="users">
    {list.map((element,key) => {return <Card data={element} key={key}/>}) }
    </div>
  )
}
