import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <h3>{err.status + " " + err.statusText} </h3>
      <p>We're sorry, but we couldn't find the page you were looking for.</p>
    </div>
  );
};

export default Error;
