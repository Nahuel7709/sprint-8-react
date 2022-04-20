import { Component } from "react";



class UserDetail extends Component {

    constructor(props){
        super();
        this.state = {
            genreInfo: null,
            
        }
    }
    
        componentDidMount () {
           const genreID = this.props.match.params.id;
           fetch("http://localhost:3000/api/users/" + genreID)
           .then(response => response.json())
           .then(data=>{
               this.setState({genreInfo: data})
           })
           .catch(error=>console.log(error))
        }

    render(){
        const {genreInfo} = this.state
        return (
            <>
            <h1>User Detail</h1>
             {genreInfo && (
                 <>
                  <h2>{genreInfo.name}</h2>
                  <h4>{genreInfo.userName}</h4>
                  <p>Email: {genreInfo.email}</p>
                  <p>Country: {genreInfo.country}</p>
                  <p>Adress: {genreInfo.adress}</p>
                  <p>Cellphone: {genreInfo.cellphone}</p>
                  

                 </>
                
             )}
            
            
            </>
            
        ) 
    }
}

export default UserDetail;