import React from 'react'
import Specials from '../Specials'
import Testimonials from '../Testimonials'

const HomePage = () => {
  return (
    <>
         <section>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1><br></br>
                    <h2 className='mt-3 mb-4'>Chicago</h2>
                    <p className="subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.</p>
                    <br></br>
                    <button className='btn btn-warning' onClick={() => window.location.href = '/reservation'}>Reserve a table</button>
                </section>

                <section className="hero-image">
                    <img src={require('../../assets/Food/food1.png')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
      </section>
      <Specials />
      <Testimonials />
    </>
  )
}

export default HomePage