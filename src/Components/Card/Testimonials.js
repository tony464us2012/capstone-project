import React from 'react'
// import Star from '../../../../assets/star.png';

const Testimonials = ({ name, description }) => {
  return (
    <article className="testimonial-card">
        {/* <img src={Star} alt="delivery Icon"></img> */}
        <h3>{name}</h3>
        <p>{description}</p>
    </article>
  )
}

export default Testimonials