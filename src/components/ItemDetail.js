import React from 'react'
import { useParams } from "react-router-dom"
import { items } from './Data'


const ItemDetail = () => {

    const { id } = useParams()
    const item = items.find(item => item.id === parseInt(id));

    if(!item){
        return <h2>Item not found</h2>
    }

  return (
    <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
    </div>
  )
}

export default ItemDetail