import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import { Form } from 'semantic-ui-react';
import Button from 'react-bootstrap/lib/Button';
import axios from 'axios';
class LoginForm extends React.Component{
  state = {
    data: {
      username: "",
      password: "",
    },

    loading: false,
    errors: {}
  };

  onChange = e =>
  this.setState({
    data: {...this.state.data, [e.target.name]: e.target.value}
  });

  render (){
    const {data} = this.state;
    return(
      <Form>
         <Form.Field>
           <label htmlFor="email">Username</label>
           <input type="email"
             id="email"
             name="email"
            placeholder="email"
            value={data.email}
            onChange={this.onChange}
           />
         </Form.Field>
         <Form.Field>
         <label htmlFor="password">Password</label>
          <input type="password"
            id="password"
             name="password"
             placeholder="Your Password Please"
            value={data.password}
            onChange={this.onChange}
          />
        </Form.Field>
        <Link to="#">LOGIN</Link>
      </Form>
    );
  }
};

export default LoginForm;
