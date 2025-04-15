'use client'; // Error boundaries must be Client Components
import {Error} from './_components/client-components/error';

const Error500 = ({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  return (
    <Error title='Algo salio mal!' description={error.message}/>
  );
};

export default Error500;
