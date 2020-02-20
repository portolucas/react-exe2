import React from "react";

export function UserList(props) {
  return (
    <div>
      <span>Name: {props.name}</span>
      <span>Email: {props.email}</span>
      <span>Idade: {props.idade}</span>
      <button onClick={event => props.onDelete(props.email)}> Excluir</button>
    </div>
  );
}
