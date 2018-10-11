import React, { Component } from 'react';
// import './App.css';

import axios from 'axios';

class Db1 extends Component {

  state = {
  };



  getDb() {

    debugger;
      var that = this;
      axios.get('https://randomuser.me/api?results=5')
          .then((response) => {
              console.log(response);
              const {results} = response.data;
              this.state.users = results; //({users:});
              this.setState({x:1});

          })
          .catch((err) => {
              console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
              const resp = {
                  data:[{id:1, text :'John'}]
              };
          });
  }
    getUsersAsync = async () => {
        const resp = await axios.get('https://randomuser.me/api?results=5');
            this.setState({users: resp.data.results});
    }




  render() {

      const {users} = this.state;
    return (
      <div className="counter">
        <h2>DB1</h2>

        <div>
        <span onClick={this.getUsersAsync.bind(this)}>get data from db</span>
        </div>

          { users &&
          <ul>
              {
                  users.map((user, index) => (
                      <li key={index}>
                     <label key={index}>{user.gender}</label>
                          </li>
                  ))
              }
          </ul>
          }


      </div>
    );
  }
}

export default Db1;
