import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div>
      <h1>OOps!</h1>
      <h3>Something went wrong!</h3>
      <h2>{status + ":" + statusText}</h2>
    </div>
  );
};

export default Error;
