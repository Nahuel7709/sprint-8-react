// Deps
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Assets
import './App.css';

// layout
import Layout from './layout/Wrapper';

//components
import Sidenav from './components/Sidenav';
import Nav from './components/Nav';
import Home from './components/Home';
import GenreDetails from './components/GenreDetails';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
import About from './components/About';

class App extends Component {
 
    constructor(){
    super ();
    this.state = {
         genresList: [],
         isLoading: true,
         
    }
 }

 componentDidMount() {
 console.log ("el componente se monto")
 //llamados a la api
 fetch("http://localhost:3000/api/products")
 .then(response => response.json())
 .then(data => {
     if (data.length > 0) {
      this.setState({
          isLoading: false,
          genresList: data
      })
     }
  

     
     
     
 })
 .catch(error => console.log(error))
 }
 
    render (){
     return (
        <div id="wrapper">
        <Sidenav/>
        <Layout>
          <div id="content">
           <Nav/>
           <div className="container-fluid">
           
           <Switch>
            <Route exact={true} path="/">
            <Home genresList={this.state.genresList} isLoading={this.state.isLoading} />
            </Route>

            <Route path="/genres/:id" render={(props) => <GenreDetails {...props}  />} />
            <Route path="/users/:id" render={(props) => <UserDetail {...props}  />} />
           
            <Route path="/users">
            <Users />
            </Route>

            
           
            <Route path="/about">
             <About />
            </Route>

            

            <Route>
             <h2>¡Error 404!</h2>
            </Route>
           </Switch>
           
           
           </div>
          </div>
        </Layout>
      </div>
     )
 }
}

export default App;