import { Component } from "react";
import { Link } from 'react-router-dom';


class Users extends Component {

    constructor(props){
        super();
        this.state = {
            genresList: [],
         isLoading: true,  
        }
    }
    
    componentDidMount() {
        console.log ("el componente se monto")
        //llamados a la api
        fetch("http://localhost:3000/api/users")
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

    render(){
        const {genresList} = this.state
        return (
            <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Usuarios</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                    {
                        genresList.map(oneGenre =>{
                            return (
                            <div className="col-lg-6 mb-4" key={oneGenre.email}>
                             <div className="card bg-dark text-white shadow">
                              <div className="card-body">
                              {oneGenre.name} - Username: {oneGenre.userName ? oneGenre.userName : "TBD"}
                              <br />
                              <Link className="btn btn-primary" to={`/users/${oneGenre.id}`}>Detail</Link>
                              </div>
                             </div>
                            </div>)
                        })
                    }

                    </div>
                </div>
            </div>
        </div>
            
        ) 
    }
}



export default Users;