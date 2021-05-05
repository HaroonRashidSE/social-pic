import { Link } from "react-router-dom";
import Button from "../Components/Button";

function Welcome() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Link to="/login">
        <Button
          variant="contained"
          color="primary"
          className="button-welcome"
          title="Login"
        />
      </Link>
    </div>
  );
}
export default Welcome;
