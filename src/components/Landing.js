import { Button } from "./Button";
import "./../styles/app.css";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../redux/actions";
import { Link } from "react-router-dom";

function Landing() {
  const dispatch = useDispatch();

  return (
    <div className="App d-flex">
      <div className="container">
        <div className="row min-vh-100">
          <div className="col-6 m-auto">
            <Link to={"/pokedex"}>
              <Button
                onClick={() => dispatch(getAllPokemons())}
                children={"Traer Lista"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
