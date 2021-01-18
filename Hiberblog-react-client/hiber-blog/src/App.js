import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewAll from "./ViewAll"
import AddArticle from "./AddArticle"
import EditArticle from "./EditArticle"
import DeleteArticle from "./DeleteArticle"
import LogIn from "./LogIn"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {fbase,firebaseApp} from './fbase';
import './App.css'
import Natura1 from './natura1.jpg';
import Natura2 from './natura1.jpg';
import Natura3 from './natura1.jpg';
import Natura4 from './natura1.jpg';
import Natura5 from './natura1.jpg';
import Natura6 from './natura1.jpg';

class App extends Component {

    state =
        {
articles: [],
            name: "Chmielu",
        langueges: ["PHP","JAVA","C#"]
        }
        constructor(props) {
          super(props);
          this.state = {
            loggedIn : false,
            email:"",
            password:""
                 
          };
        }
        handleLoginChange=(event)=>{
          this.setState({
             [event.target.name]: event.target.value 
          })
      }

        authenticate=(event)=>{
          event.preventDefault();
          firebaseApp.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
          .then(()=>{this.setState({loggedIn: true})})
          .catch(()=>{console.log('Unable to authenticate');})
          
      }

// componentDidMount() {
//     fetch('http://localhost:8080/api/articles/add')



// }

// componentDidMount() {
//     fetch('http://localhost:8080/api/articles/update')



// }
// componentDidMount() {
//     fetch('http://localhost:8080/api/articles/delete')



// }

// componentDidMount() {
//     fetch('http://localhost:8080/api/articles')



// }

    render() {
        return (
          <div>
        {!this.state.loggedIn &&


        <form  style={{border: '1px solid #ccc'}} onSubmit={this.authenticate}>
  <div className="container">
    <h1>Sign In</h1>
    <p>Please fill in this form to login on your account.</p>
    <hr />
    <label htmlFor="email"><b>Email</b></label>
    <input type="email" placeholder="Enter Email" id="email" name="email" className="form-control" onChange={this.handleLoginChange} value={this.state.email}/>
    <label htmlFor="password"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" id="password" name="password"  className="form-control" onChange={this.handleLoginChange} value={this.state.password} />
    <label>
      <input type="checkbox" defaultChecked="checked" name="remember" style={{marginBottom: '15px'}} /> Remember me
    </label>
    <div className="clearfix">
      <button type="submit" className="signupbtn">Sign In</button>
    </div>
  </div>
</form>
  
        }
    {this.state.loggedIn &&
            <div>
            <BrowserRouter>

<Navbar bg="dark" variant="dark">
  <Navbar.Brand as={Link} to='/'>Welcome on my page with articles! </Navbar.Brand>
  <Navbar.Toggle />

  <Nav className="news-menager">
   <NavItem eventkey={1} href="/">
            <Nav.Link as={Link} to="/all">View all articles!</Nav.Link>
   </NavItem>
   <NavItem eventkey={2} href="/">
            <Nav.Link as={Link} to="/add">Add article!</Nav.Link>
   </NavItem>
   <NavItem eventkey={3} href="/">
            <Nav.Link as={Link} to="/update">Edit article!</Nav.Link>
   </NavItem>
   <NavItem eventkey={4} href="/">
            <Nav.Link as={Link} to="/delete">delete article :(</Nav.Link>
   </NavItem>
   <NavItem eventkey={5}>
           <input type="text" name="search" className="searchInput" placeholder="Search.." style={{marginTop: '11px',marginLeft: '500px'}}/>
   </NavItem>
   <NavItem eventkey={6}>
   <button  type="submit" className="btn btn-info" style={{marginLeft: "20px",marginTop: "7px"}} onClick={this.validate}>
                    Search
            </button>
   </NavItem>
   
  </Nav>
</Navbar>

<Switch>
  <Route exact path="/all" component={ViewAll}/>
  <Route path="/add" component={AddArticle}/>  
  <Route path="/update" component={EditArticle}/>  
  <Route path="/delete" component={DeleteArticle}/>  
  {/* <Route exact path="/login" component={LogIn}/>  */}

</Switch>
</BrowserRouter>
            

</div>
}
        </div>
);

}

}  



export default App;