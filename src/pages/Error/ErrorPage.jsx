import { useRouteError } from "react-router-dom";
import "./Error.css";
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="center">
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
