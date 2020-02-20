import React, { Component } from "react";
import { UserList } from "./UserList";

export class List extends Component {
  state = {
    listTitle: "",
    userInfo: [
      {
        name: "Lucas",
        email: "lucasportosd@gmail.com",
        idade: "24"
      },
      {
        name: "Brandon",
        email: "brandon@gmail.com",
        idade: "25"
      },
      {
        name: "Samuel",
        email: "samuel@gmail.com",
        idade: "25"
      }
    ]
  };

  handleOnDelete = email => {
    this.setState({
      userInfo: this.state.userInfo.filter(u => u.email !== email)
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.userInfo.map(list => (
            <li>
              <UserList
                onDelete={this.handleOnDelete}
                name={list.name}
                email={list.email}
                idade={list.idade}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
