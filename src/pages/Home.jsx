import React from "react";
{/*import topCard from "/api/topCard.json";
import studentsSay from "/api/studentsSay.json";*/}
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
        <section id="hero" className="hero">
      <div className="container center">
        <h1>Learn Modern Web Development</h1>
        <p>
          Master the skills needed to build stunning, high-performance web
          applications with our industry-leading coding courses.
        </p>
        <a href="#courses" className="btn-primary">Explore Courses</a>
      </div>
    </section>

     <section id="about" className="about">
      <div className="container">
        <div className="content">
          <div className="about-text">
            <h2>Why FuturePlix?</h2>
            <p>
              We provide a project-based learning environment that prepares
              students for the real world. Our curriculum is designed by
              industry experts to ensure you stay ahead of the curve.
            </p>
            <p>
              From HTML/CSS basics to advanced React and Node.js, we cover
              everything you need to become a Full-Stack Developer.
            </p>
           <div className="about-image">
             <div
              style={{width: "100%",
                height: "300px",
                background: "linear-gradient(135deg, #4f46e5, #a855f7)",
                borderRadius: "20px",
              }}>
               {/*<!-- Placeholder image via generate_image later if needed, using a colored div for now -->*/}
              </div>
            </div>
              </div>  
            </div>
          </div>
    </section>
       
       <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 style= {{textAlign: "center", marginBottom: "40px"}}>
          What Our Students Say
        </h2>
        <div className="testimonial-container">
          <article class="testimonial-card">
            <p>
              "The best coding institute I've ever joined. The projects are
              actually relevant!"
            </p>
            <strong>- Alex Johnson</strong>
          </article>
          <article className="testimonial-card">
            <p>
              "FuturePlix helped me land my first dev job in just 6 months.
              Highly recommended."
            </p>
            <strong>- Sarah Miller</strong>
          </article>
          <article className="testimonial-card">
            <p>
              "Great mentors and a very supportive community. The React course
              was a game changer."
            </p>
            <strong>- James Lee</strong>
          </article>
        </div>
      </div>
    </section>
    <Contact/>
    <Footer/>
        </>
    );
};
export default Home;

