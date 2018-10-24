import React from 'react';

const About = () => (
  <div class ="container">
    <h1>About us</h1>
    <section>
      <br></br>

    </section>
    <section className="about" id="about">
      <div className="container-about">
        <div className="container">
          <div className="col-md-6 about-right">
            <h3>The Bank of the Sun, pride themselves in making sure our clients needs are always met.</h3>
            <p>Access the true meaning of efficiency with The Bank of the Sun with it's simplified complexity!
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
    <br>
    </br>
    <div class ="container-about2">
    <section className="about" id="about">
      <div className="container">
        <div className="about-grids">
          <div className="col-md-6 about-right">
            <h3>Tips on stretching your retirement savings</h3>
            <p>29 August 2018: - When you finally reach retirement age, you need to be in a position where you can afford to maintain a similar lifestyle which you have been accustomed to prior to retirement. The only way to achieve this is making sure you start planning and saving for retirement much earlier.</p>
            <div className="more">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Read More</button>

            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </section>
  </div>

    <div className="modal about-modal fade" id="myModal" tabindex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="span1"aria-hidden="true">&times;</span></button>
            <h4 className="modal-title"> The Bank<span> Of the Sun</span></h4>
          </div>
          <div className="modal-body">
            <div className="agileits-w3layouts-info">
              <img src="#" alt="" />
              <p>valuate costs: Look at your current household expenses and identify areas where you can cut costs. These expenses can be filtered down based on your needs and wants. The key is to prioritise things that matter the most such as insurance and medical care.
              Budget: This is a very important element, it allows you to plan your finances and also give you a view of what you can and cannot afford to ensure that you don"t outlive your retirement savings. Therefore, you need to stick to your monthly budget and regularly review if you are living within your means.
              Monitor investments: Environmental shifts, inflationary changes are some of the things you need to consider that can have a direct impact on your investments. Therefore, it is advisable to enlist the service of a financial advisor who will help you monitor and ensure that your savings are safe from market fluctuations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
