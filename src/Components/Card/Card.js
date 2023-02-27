import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ name, price, description, image }) => {
  return (
    <article className="menu-card">
        <img src={image} alt="Special Menu"></img>
        <section className="menu-card-content">
            <h2>{name}</h2>
            <h4>{price}</h4>
            <p>{description}</p>
            <button className="btn btn-warning">
              <Link to="/order">Order for Delivery</Link>
            </button>
        </section>
    </article>
  )
}

export default Card