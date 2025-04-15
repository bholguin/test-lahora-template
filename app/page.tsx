import HomePage from './_components/server-components/home/home.server';
import getHomeData from './_setup/actions/getHomeData';

export const revalidate = 0;

export default async function Home() {
  const result = await getHomeData();

  return (
    <HomePage
      {...result}
    />
  );
}
