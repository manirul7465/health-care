import Home from "./Component/Home/Home";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./Component/Notfound/NotFound";
import Booking from "./Component/Booking/Booking/Booking";
import Login from "./Login/Login/Login";
import Header from "./Component/Header/Header";
import Doctors from "./Component/Doctors/Doctors";
import Aboutus from "./Component/Aboutus/Aboutus";
import Footer from "./Footer/Footer";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRout/PrivateRoute";



function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/aboutus">
            <Aboutus></Aboutus>
          </Route>
          <Route path="/login">
            <Login></Login>
            </Route>
          <PrivateRoute path="/booking/:serviceId">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
