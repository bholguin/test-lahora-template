import {Error} from './_components/client-components/error';

export default function NotFound() {
  return (
    <Error
      title='Lo sentimos. Ha ocurrido un error.'
      description='Lo que quieres ver ya no está disponible. Sigue navegando'
    />
  );
}
