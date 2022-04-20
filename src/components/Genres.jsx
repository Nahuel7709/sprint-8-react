import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function Genres ({genresList}) {
    return (
<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Products</h5>
								</div>
								<div className="card-body">
									<div className="row">
                                    {
										genresList.map(oneGenre =>{
											return (
											<div className="col-lg-6 mb-4" key={oneGenre.name}>
											 <div className="card bg-dark text-white shadow">
											  <div className="card-body">
											  {oneGenre.name} - Price: {oneGenre.price ? oneGenre.price : "TBD"}
											  <br />
											  <Link className="btn btn-primary" to={`/genres/${oneGenre.id}`}>Detail</Link>
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

Genres.defaultProps = {
	genresList: []
}

Genres.propTypes = {
   genresList: PropTypes.arrayOf(PropTypes.shape({
   name: PropTypes.string.isRequired,
   price: PropTypes.string
  })).isRequired
}

export default Genres