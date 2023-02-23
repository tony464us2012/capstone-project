import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ name, price, description }) => {
  return (
    <article className="menu-card">
        {/* <img src={props.image} alt="Special Menu"></img> */}
        <section className="menu-card-content">
            <h1>{name}</h1>
            <h3>{price}</h3>
            <p>{description}</p>
            <Link className="special-button" to="/order">Order for Delivery</Link>
        </section>
    </article>
  )
}

export default Card