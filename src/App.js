
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Homepage/HomePage';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/LogIn';
import Allservices from './Pages/Services/AllServices/AllServices';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import SignUp from './Pages/SingUp/SingUp';
import AuthProvider from './Context/AuthProbider';
import Contact from './Pages/Contact/Contact';
import Booking from './Pages/Booking/Booking';
import Getappoinment from './Pages/Getappoinment/Getappoinment';
import PrivateRoute from './Hooks/PrivateRoute';
import HomeDoctor from './Pages/Doctors/HomeDoctor/HomeDoctor';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/service">
              <Allservices></Allservices>
            </Route>
            <Route path="/doctor">
              <HomeDoctor></HomeDoctor>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/getappoinment/:appointId">
              <Getappoinment></Getappoinment>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
