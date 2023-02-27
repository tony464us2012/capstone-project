import React from 'react'

const Footer = () => {
  return (
    <footer>
      <li className="img-footer">
        <img
          src={require("../assets/footer-logo.png")}
          alt="Little Lemon logo"
        ></img>
      </li>
      <li>
        <h2>Contact</h2>
        <section>
          <p>2395 Maldove Way,</p>
          <p>Chicago Illinois</p>
          <p>(629)-243-6827</p>
          <a className='social'
            href="mailto: info@littlelemon.com"
            target="_blank"
            rel="noreferrer"
          >
            info@littlelemon.com
          </a>
        </section>
      </li>
      <li>
        <h2>Connect</h2>
        <section>
          <a id='social'
            href="https://www.facebook.com/thelittlelemonshop/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a id='social'
            href="https://www.instagram.com/littlelemonmoon/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a id='social'
            href="https://www.youtube.com/watch?v=3Li-FfypZYE"
            target="_blank"
            rel="noreferrer"
          >
            Join us!
          </a>
        </section>
      </li>
  </footer>
  )
}

export default Footer