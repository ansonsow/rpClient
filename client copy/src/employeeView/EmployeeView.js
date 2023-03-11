import React, { useState } from "react";
import "./EmployeeView.css";
import Home from "../employeeView/components/home/Home";
import SideBar from "../employeeView/components/sidebar/SideBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Account from "../employeeView/components/account/Account";
import Task from "../employeeView/components/task/Task";
function EmployeeView(props) {
  return (
    <div className="components">
      <Router>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home tasks={props.tasks} />} />
          <Route exact path="/home" element={<Home tasks={props.tasks} />} />
          <Route exact path="/task" element={<Task tasks={props.tasks} />} />
          <Route
            exact
            path="/account"
            element={<Account account={props.account} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default EmployeeView;
