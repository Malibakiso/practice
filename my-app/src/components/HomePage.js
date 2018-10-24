import React from 'react';
import axios from 'axios';
import jsSha from 'jssha';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import {Container} from 'reactstrap';
import {Carousel } from 'react-bootstrap';
import {CarouselItem } from 'react-bootstrap';
import {CarouselCaption } from 'react-bootstrap';

export default class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username:"lazymeercat116",
      password:"hottest",
      columns: [
        {
          Header: 'Username',
          accessor: 'usernames'
        },
        {
          Header: 'Title',
          accessor: 'title',

        },
				{
          Header: 'First Name',
          accessor: 'first',

        },
				{
          Header: 'Last Name',
          accessor: 'last',

        },
				{
          Header: 'Date of Birth',
          accessor: 'dob',

        },


        {
          Header: 'ID',
          accessor: 'id',
        },
				{
          Header: 'Email',
          accessor: 'email',

        },
				{
          Header: 'Client ID',
          accessor: '_id',

        },
      ],
      clients: [],
      profileDetails: [],
    }
  }

  componentDidMount(){
    const hmac = new jsSha('SHA-256','TEXT');
    hmac.setHMACKey(this.state.password, 'TEXT');
    hmac.update(this.state.username);
    hmac.update(Date.now().toString(36).substring(0, 4));

    const token = `${hmac.getHMAC('HEX')}%${this.state.username}`;
    const api = axios.create({
      baseURL: 'http://45.77.58.134:8080',
      headers: { 'Authorization': 'Bearer ' + token }
    });


    (async () => {
      const res = await api.get('/clients');
      const clients = await api.get(`/clients`);
      // const transactions = await api.get(`/clients`);
      // console.log(res);
      // console.log(transactions.data);
      console.log(clients);
      this.setState({clients: clients.data, profileDetails: clients.data[0].description})
    })();
  }

  render() {
    return(
      <div>
        <Container>
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
        </Container>

        <h1>WELCOME..</h1>
        <h2>{this.state.username}</h2>
        <p>{this.state.profileDetails}</p>
        <ReactTable
          maxRows={3}
          data={this.state.clients}
          columns={this.state.columns}
        >
        </ReactTable>
      </div>
    )
  }
}
