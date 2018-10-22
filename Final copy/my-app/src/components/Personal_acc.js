import React from "react";
import reactDOM from 'react-dom';

  const Personal_acc= () => {
    return(
      <div>
        <div class="logo">
          <a href="index.html">
            {/* <!--<i class="fa fa-inr" aria-hidden="true"></i>-->  */}
            The Bank<span> of the Sun</span></a>
        </div>
    {/* <!-- contact --> */}
    <section class="contact" id="contact">
      <div class="container">
        <div class="contact-heading">
          <h3>Personal Account</h3>
          <p>Hello,</p>
          <p>
            <form>
              <td><input type="text" name="Mr/Mrs" value="name"/><br/></td>
            </form>
          </p>
        </div>
        <div class="contact-grids">
          <div class=" col-md-6 contact-form">
            <form action="#" method="post">
              <h2>Debit Account</h2>

                <br/><p>Account Number       225585458</p><br/>
                <h4><caption>Balances</caption></h4>
                <table style={{width:'100%'}}>
                  <form action="/action_page.php">
                  Current Balance: <input type="text" name="FirstName" value="R00.00"/><br/>
                  Available Balance: <input type="text" name="LastName" value="R0.00"/><br/>
                  </form>

                </table>
            </form>
          </div>
        </div>
      </div>
    </section>


    <section class="contact" id="contact">
      <div class="container"></div>
    <div class="contact-grids">
      <h2>Savings Account</h2>
      <caption>Account number:   225585458 </caption>

      <table style={{width:'100%'}}>
          <caption>Monthly savings</caption>
          <tr>
            <th>Month</th>
            <th>Savings</th>
            <th>Balance</th>
            <th>Available</th>
          </tr>
          <tr>
            <td>October</td>
            <form>
              <td><input type="text" name="" value="R0.00"/><br/></td>
            </form>
            <form>
              <td><input type="text" name="" value="R0.00"/><br/></td>
            </form>
            <form>
              <td><input type="text" name="" value="R0.00"/><br/></td>
            </form>
          </tr>

          <tr>
            <td>November</td>
            <form>
              <td><input type="text" name="" value="R0.00"/><br/></td>
            </form>
            <form>
              <td><input type="text" name="" value="R0.00"/><br/></td>
            </form>
            <form>
              <td><input type="text" name="" value="R0.00"/><br/></td>
            </form>
          </tr>
        </table>
      </div>
        <div class="clearfix"></div>

      <a href="Account.html"><button>BACK..</button></a>
    </section>

    {/* <!-- <input type="submit" value="Submit"> -->
    <!-- //footer -->

    <!-- copyright --> */}
    <section class="copyright">
      <div class="agileits_copyright text-center">
          <p>© 2018 The Bank of The Sun. All rights reserved | Design by <a href="//w3layouts.com/" class="w3_agile">Control Alt Delete</a></p>
      </div>
    </section>
      </div>
    );
  };
  export default Personal_acc;
