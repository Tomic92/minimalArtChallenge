import { Link } from "react-router-dom";

import "./../styles/button.css";

export const Button = ({ onClick, children }) => {
  return (
    <Link to={"/pokedex"}>
      <div className="Button" onClick={onClick}>
        {children}
      </div>
    </Link>
  );
};
