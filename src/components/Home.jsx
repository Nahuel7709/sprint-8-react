import MainBoxes from './MainBoxes';
import LastMovie from './LastMovie';
import Genres from './Genres';



const Home = ({genresList, isLoading}) => {
 return (
    <>
    <MainBoxes/>
      <div className="row">
                <LastMovie/>
                { isLoading && <h3>Cargando...</h3> }
                { !isLoading && <Genres genresList={genresList} />}
      </div>
    </>
 )
}

export default Home;