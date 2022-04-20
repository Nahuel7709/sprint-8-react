import { Component } from "react";



class GenreDetails extends Component {

    constructor(props){
        super();
        this.state = {
            genreInfo: null,
            
        }
    }
    
        componentDidMount () {
           const genreID = this.props.match.params.id;
           fetch("http://localhost:3000/api/products/" + genreID)
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
            <h1>Product Detail</h1>
             {genreInfo && (
                 <>
                  <h2>{genreInfo.name}</h2>
                  <h4>{genreInfo.description}</h4>
                  <p>Price: {genreInfo.price}</p>
                  

                 </>
                
             )}
            
            
            </>
            
        ) 
    }
}

export default GenreDetails;