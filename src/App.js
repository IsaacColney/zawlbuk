import React,{Fragment,useEffect} from 'react';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import {Provider} from 'react-redux';
import store from './store';
import Alert from './components/Layout/Alert';
import setAuthToken from './utils/setAuthToken';
import { loaduser } from './actions/auth';
import PrivateRoute from './components/routing/Privateroute';
import Dashboard from './components/dashboard/dashboard';
import Footer from './components/Layout/Footer';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import MyPosts from './components/posts/MyPosts';
import PostForm from './components/posts/PostForm';
import Post from './components/post/Post';
if(localStorage.token){
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loaduser());  
  },[]);
  return (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar/>
        <Route exact path="/" component={Landing}/>
        <section className="container">
          <Alert/>
          <Switch>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/profiles" component={Profiles}/>
            <Route exact path="/profile/:id" component={Profile}/>
            <Route exact path="/posts" component={Posts}/>
            <Route exact path="/posts/:id" component={Post}/>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/createprofile" component={CreateProfile} />
            <PrivateRoute exact path="/editprofile" component={EditProfile} />
            <PrivateRoute exact path="/addeducation" component={AddEducation}/>
            <PrivateRoute exact path="/myposts" component={MyPosts}/>
            <PrivateRoute exact path="/addpost" component={PostForm}/>
          </Switch>
        </section>
        <Footer/>
      </Fragment>
    </Router>
  </Provider>
)
};



export default App;
