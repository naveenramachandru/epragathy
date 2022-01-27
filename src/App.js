import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
// import ServicePage from "./Pages/ServicePage";

import NavBar from "./components/NavBar";
import Services from "./Pages/Services";
import Contacts from "./Pages/Contacts";
import Blog from "./Pages/Blog";

import Footer from "./components/Footer";
import OurProcess from "./Pages/ourProcess";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/ourprocess" component={OurProcess} />


        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
