/* eslint-disable no-case-declarations */
import Ediciones from '../_components/server-components/home/edition.server';
import HomePage from '../_components/server-components/home/home.server';
import getHomeData from '../_setup/actions/getHomeData';

type Props = {
  params: { slug: string };
};

export default async function HomeSlug(props: Props) {
  switch (props.params.slug) {
  case 'index.html':
    const result = await getHomeData();
    return (
      <HomePage {...result} />
    );
  default:
    return <Ediciones params={props.params} />;
  }
}
