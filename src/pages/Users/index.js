import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

import { Card } from '../../components';
import './style.css';

class UsersPage extends Component {

  state = {
    users: []
  }

  componentDidMount = async () => {
     try {
      const response = await axios.get("http://localhost:3001/users")
      this.setState({ users: response.data });
    } catch (err) {
      console.log(err);
    }
  }

  render () {
    return (
      <div className="page">
        <div className="page-users">
          {this.state.users.map((item) => {
            return (
              <Link to = {`/users/${item.index + 1}`} key ={item._id}>
                <Card
                  picture={item.picture}
                  name={item.name}
                  showId={this.state.showIds}
                  key={item._id}
                />
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}

export  { UsersPage };