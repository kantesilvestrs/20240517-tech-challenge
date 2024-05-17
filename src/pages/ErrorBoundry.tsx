import { useRouteError } from 'react-router-dom';

const ErrorBoundry = () => {
  const routeError = useRouteError()

  return <div>
    <div>There was an issue:</div>
    <p>{JSON.stringify(routeError)}</p>
  </div>
}

export default ErrorBoundry;