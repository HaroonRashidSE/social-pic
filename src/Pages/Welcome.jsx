import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
function Welcome() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Link to="/login">
        <Button variant="contained" color="primary" className="button-login">
          Login
        </Button>
      </Link>
    </div>
  );
}
export default Welcome;
