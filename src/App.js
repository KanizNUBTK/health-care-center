import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import DoctorsDetails from './component/DoctorsDetails/DoctorsDetails';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import OverView from './component/OverView/OverView';
function App() {
  return (
    <div>
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route exact path="/home">
           <Home></Home>
         </Route>
         <Route exact path="/doctorsDetails">
           <DoctorsDetails></DoctorsDetails>
         </Route>
         <Route exact path="/sevicesDetails">
           <ServiceDetails></ServiceDetails>
         </Route>
         <Route exact path="/overView">
           <OverView></OverView>
         </Route>
         <Route exact path ="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
