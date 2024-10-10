import React from 'react'
import { items } from './Data'
import { Link } from "react-router-dom"

const ItemList = () => {
  return (
    <div>
        <h1>ItemList</h1>
        <ul>
            {items.map(item => (
                <li key="item.id">
                    <Link to={`/item/${item.id}`}>{item.name}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ItemList