import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import Aos from 'aos'
import 'aos/dist/aos.css';




import Error from './Error/Error'
import Home from './Home/Home';
import WebNavBar from './WebNavBar/WebNavBar'
import SignIn from './User-UI/SignIn/SignIn';
import SignUp from './User-UI/SignUp/SignUp';
import About from './About/About';
import Privacy from './Privacy/Privacy';
import Dashboard from './Dashboard/Dashboard';
import Audi from './Dashboard/CarsShows/Audi/Audi';
import BMW from './Dashboard/CarsShows/BMW/BMW';
import Citroen from './Dashboard/CarsShows/Citroen/Citroen';
import Fiat from './Dashboard/CarsShows/Fiat/Fiat';
import Ford from './Dashboard/CarsShows/Ford/Ford';
import Jeep from './Dashboard/CarsShows/Jeep/Jeep';
import Mer from './Dashboard/CarsShows/Mercedes/Mer';
import VW from './Dashboard/CarsShows/VW/VW';

import carS from './Dashboard/CarsShows/Audi/carS';
import cartCars from './Dashboard/CarsShows/Audi/cartCars'

import carSBmw from './Dashboard/CarsShows/BMW/carSBmw';
import cartCarsBmw from './Dashboard/CarsShows/BMW/cartCarsBmw'

import carSCitroen from './Dashboard/CarsShows/Citroen/carSCitroen';
import cartCarsCitroen from './Dashboard/CarsShows/Citroen/cartCarsCitroen'

import carSFiat from './Dashboard/CarsShows/Fiat/carSFiat';
import cartCarsFiat from './Dashboard/CarsShows/Fiat/cartCarsFiat'

import carSFord from './Dashboard/CarsShows/Ford/carSFord';
import cartCarsFord from './Dashboard/CarsShows/Ford/cartCarsFord'

import carSJeep from './Dashboard/CarsShows/Jeep/carSJeep';
import cartCarsJeep from './Dashboard/CarsShows/Jeep/cartCarsJeep'

import carSMer from './Dashboard/CarsShows/Mercedes/carSMer';
import cartCarsMer from './Dashboard/CarsShows/Mercedes/cartCarsMer'

import carSVW from './Dashboard/CarsShows/VW/carSVW';
import cartCarsVW from './Dashboard/CarsShows/VW/cartCarsVW'
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';
import cartSucced from './Dashboard/CarsShows/cartSucced'
import Footer from './WebNavBar/Footer';


Aos.init({
  once: true
})

export class App extends Component {




  render() {
    return (
      <div>
        <WebNavBar/>

        <Switch >
          <Route path="/" component={Home} exact />
          <Route path="/About" component={About} exact />
          <Route path="/register" component={SignUp} exact />
          <Route path="/login" component={SignIn} exact />
          <Route path="/Dashboard" component={Dashboard} exact />
          <Route path="/Blogs" component={Blogs} exact />
          <Route path="/Contact" component={Contact} exact />
          <Route path="/buy_with_success/:id" component={cartSucced} exact />

          <Route path="/Audi" component={Audi} exact />
          <Route path="/BMW" component={BMW} exact />
          <Route path="/Citroen" component={Citroen} exact />
          <Route path="/Fiat" component={Fiat} exact />
          <Route path="/Ford" component={Ford} exact />
          <Route path="/Jeep" component={Jeep} exact />
          <Route path="/Mercedes" component={Mer} exact />
          <Route path="/VW" component={VW} exact />




          <Route path="/Audi/:id" component={carS} exact />
          <Route path="/Cart_Car_Audi/:id" component={cartCars} exact />
          <Route path="/Cart_Buy_Success/:id" component={cartCars} exact />

          <Route path="/BMW/:id" component={carSBmw} exact />
          <Route path="/Cart_Car_BMW/:id" component={cartCarsBmw} exact />


          <Route path="/Citroen/:id" component={carSCitroen} exact />
          <Route path="/Cart_Car_Citroen/:id" component={cartCarsCitroen} exact />
          <Route path="/Cart_Buy_Success/:id" component={cartCarsCitroen} exact />

          <Route path="/Fiat/:id" component={carSFiat} exact />
          <Route path="/Cart_Car_Fiat/:id" component={cartCarsFiat} exact />
          <Route path="/Cart_Buy_Success/:id" component={cartCarsFiat} exact />

          <Route path="/Fiat/:id" component={carSFiat} exact />
          <Route path="/Cart_Car_Fiat/:id" component={cartCarsFiat} exact />
          <Route path="/Cart_Buy_Success/:id" component={cartCarsFiat} exact />

          <Route path="/Ford/:id" component={carSFord} exact />
          <Route path="/Cart_Car_Ford/:id" component={cartCarsFord} exact />
          <Route path="/Cart_Buy_Success/:id" component={cartCarsFord} exact />

          <Route path="/Jeep/:id" component={carSJeep} exact />
          <Route path="/Cart_Car_Jeep/:id" component={cartCarsJeep} exact />
          <Route path="/Cart_Buy_Success/:id" component={cartCarsJeep} exact />

          <Route path="/Mercedes/:id" component={carSMer} exact />
          <Route path="/Cart_Car_Mercedes/:id" component={cartCarsMer} exact />
          <Route path="/Cart_Buy_Success/:id" component={cartCarsMer} exact />

          <Route path="/VW/:id" component={carSVW} exact />
          <Route path="/Cart_Car_VW/:id" component={cartCarsVW} exact />
          <Route path="/Cart_Buy_Success/:id" component={cartCarsVW} exact />

          <Route path="/Privacy" component={Privacy} exact />

          <Route component={Error} exact />
        </Switch>

        <Footer/>

        </div>
    )
  }
}

export default App
