import React from 'react';

const About = () => (
  <div class ="container" className="text-center">
    <h1>About Us</h1>
    <section className="about" id="about" className="text-center">
      <div className="container-about" className="text-center">
        <div className="container" className="text-center">
          <div className="Col sm={6} md={4} / about-center">
            <h3 className="text-center">The Bank of the Sun</h3>
            <p style={{fontSize:'15px', textAlign:'center'}}>Access the true meaning of efficiency with The Bank of the Sun with it's simplified complexity!
            We create and deliver innovative advisory, funding, trading, corporate banking and principal investing
            solutions for our clients. We are innovative thinkers who turn challenges into opportunities.</p>
            <div className="more">
              <button class="btn btn-outline-success my-2 my-sm-0"  onClick="submit">Read More</button>
              {/* <a href="#" data-toggle="modal" data-target="#myModal">Read More</a> */}
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </section>

    {/* <div class ="container-about2">
    <section className="about" id="about">
      <div className="container">
        <div className="about-grids">
          <div className="Col sm={6} md={4} / about-center">
            <h3>Our Team</h3>
            <Carousel>
               <Carousel.Item>
                 <img width={500} height={100} alt="500x100" src="/carousel.png" />
                 <Carousel.Caption>
                   <h3>First slide label</h3>
                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                 </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                 <img width={500} height={100} alt="500x100" src="/carousel.png" />
                 <Carousel.Caption>
                   <h3>Second slide label</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                 <img width={500} height={100} alt="500x100" src="/carousel.png" />
                 <Carousel.Caption>
                   <h3>Third slide label</h3>
                   <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                 </Carousel.Caption>
               </Carousel.Item>
             </Carousel>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </section>
    </div> */}
  </div>
);

export default About;
