// Page Description: Register Form for client
// Last Modified: 25 October 2018


import React from 'react';
import {Link} from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class RegisterForm extends React.Component{
  state = {
    data: {
      name: "",
      surname: "",
      password: "",
    },

    loading: false,
    errors: {}
  };

  onChange = e =>
  this.setState({
    data: {...this.state.data, [e.target.name]: e.target.value}
  });

  // handleOptionChange: function (changeEvent) {
  //   this.setState({
  //     selectedOption: changeEvent.target.value
  //   });
  // },
  render (){
    return(
      <div className="container-reg">
      <Form>

   <Form.Field>
     <label htmlFor="text">Name</label>
     <input type="text"
     id="formControlsText"
      label="Text"
      placeholder="Enter your First name" />
   </Form.Field>

   <Form.Field>
     <label htmlFor="text">Surname</label>
     <input type="text"
     id="formControlsText"
      label="Text"
      placeholder="Enter your Last name" />
   </Form.Field>
   <Form.Field>
     <label htmlFor="email">Email Address</label>
     <input type="email"
       id="email"
       name="email"
      placeholder="Your Email Address"
     />
   </Form.Field>

{/* LOOK AT THE RADIO BUTTON */}
   <form>
    <div className="radio">
      <label>
        <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange}  />
        Male
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}  />
        Female
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange}  />
        Other
      </label>
    </div>
  </form>


  <Form.Field><label htmlFor="password">Password</label>
 <input type="password"
 id="formControlsText"
  label="Text"
  placeholder="Enter your secure password"/>
 </Form.Field>

 <Link to="/LoginPage">SUBMIT</Link>

      </Form>
    </div>
    );
  }
};

export default RegisterForm;
