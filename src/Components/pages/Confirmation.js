import React from 'react'
import HeroImage from "../../assets/Food/food5.jpg"

const Confirmation = () => {
  return (
    <div className="confirmation-header">
      <img
        className="confirmation-image"
        src={HeroImage}
        alt="Little Lemon Ingredients"
        height= '30%'
      ></img>
      <section className="reserve-header-text">
        <h2>Your Reservation is Confirmed!</h2>
        <h5>A confirmation message has been sent to your email.</h5>
        <h5>Thank you for your reservation!</h5>
      </section>
    </div>
  )
}

export default Confirmation