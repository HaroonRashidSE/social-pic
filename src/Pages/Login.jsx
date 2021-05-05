import { Link } from "react-router-dom";
import Button from "../Components/Button";

function Login() {
  return (
    <div>
      <Link to="/home">
        <Button
          variant="outlined"
          color="secondary"
          className="button-login"
          title="Home"
        />
      </Link>
    </div>
  );
}

export default Login;
