import React from 'react'

const Navbar = () => {
    return (
        <header className="navbar">
      <div className="container navbar-container">
        <div className="logo">FuturePlix</div>
        <nav className="menu-links">
          <span href="#hero">Home</span>
          <span  href="#about">About</span>
          <span href="#courses">Courses</span>
          <span href="#testimonials">Testimonials</span>
          <span href="#contact">Contact</span>
        </nav>
      </div>
    </header>
    )
}
export default Navbar