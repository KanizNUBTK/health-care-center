import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import DoctorsDetails from './component/DoctorsDetails/DoctorsDetails';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import OverView from './component/OverView/OverView';
import SingleDetails from './component/SingleDetails/SingleDetails';
import AuthProvider from './Context/AuthProvider';
import LogIn from './component/LogIn/LogIn';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
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
         <PrivateRoute exact path="/singleDetails/:serviceId">
           <SingleDetails></SingleDetails>
         </PrivateRoute>
         <Route exact path="/doctorsDetails">
           <DoctorsDetails></DoctorsDetails>
         </Route>
         <PrivateRoute exact path="/sevicesDetails">
           <ServiceDetails></ServiceDetails>
         </PrivateRoute>
         <Route exact path="/overView">
           <OverView></OverView>
         </Route>
         <Route exact path="/login">
           <LogIn></LogIn>
         </Route>
         <Route exact path ="*">
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
