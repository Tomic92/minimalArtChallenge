import { Button } from "./Button";
import "./../styles/app.css";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../redux/actions";
import "./../styles/loading.css";

function Landing() {
  const dispatch = useDispatch();

  return (
    <div className="App d-flex">
      <div className="container">
        <div className="row min-vh-100">
          <div className="col-6 m-auto">
              <Button
                onClick={() => setTimeout(() => {
                  dispatch(getAllPokemons());
                }, 1500)}
                children={"Traer Lista"}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
