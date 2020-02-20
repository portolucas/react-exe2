import React from "react";
import { Route } from "react-router-dom";
import { Home, List, UserList, UserName } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/userList" exact component={UserList} />
    <Route path="/users" exact component={List} />
    <Route path="/users/:id" component={UserName} />
  </>
);
