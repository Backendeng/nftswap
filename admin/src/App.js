import { useEffect, useState } from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

// components
import DashboardLayout from "./layout/DashboardLayout";
import Pabloethereum from "./pages/Pabloethereum";
import Login from "./pages/auth/Login";
import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let storage = localStorage.getItem("isLoggedIn");
  console.log(storage);
  return (
    <Router>
      <DashboardLayout>
        {/* {localStorage.getItem("isLoggedIn") == 1 ? (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/create-trade" exact component={Pabloethereum} />
            <Route path="/login" component={Login} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
          </Switch>
        )} */}
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <Switch>
          {console.log("isLoggedIn: ", localStorage.getItem("isLoggedIn"))}
          <PrivateRoute path="/create-trade" exact component={Pabloethereum}  />
        </Switch>
      </DashboardLayout>
    </Router>
  );
};

export default App;
