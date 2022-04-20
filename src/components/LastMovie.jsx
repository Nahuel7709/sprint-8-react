import { Link } from 'react-router-dom';
import { Component } from "react";
import Mandalorian from "../images/vino trumpeter.jpg"



function LastMovie () {
    return (
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Last product</h5>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <img 
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
                    style={{ width: "40rem" }}
                    src={Mandalorian} alt=" Star Wars - Mandalorian " />
                </div>
                <p>Rojo violáceo brillante, seduce con sus aromas frutales (ciruela) y especiados (canela, cardamomo, pimienta negra). Posee gran cuerpo y su vivaz estructura acentúa los taninos intensos que se vuelven aterciopelados en el retrogusto. Variedad: 100% Malbec.</p>
                <Link className="btn btn-primary" to={`/genres/1`}>Detail</Link>
            </div>
        </div>
    </div>
    )
}

export default LastMovie