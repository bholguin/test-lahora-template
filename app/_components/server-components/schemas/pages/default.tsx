import {NewListResponseData} from '@/app/_setup/types/new-list-response';
import WebsiteList from '../modules/web.site.list.server';
import OrgList from '../modules/org.list.server';
import ItemList from '../modules/item.list.server';

export default function Schemas({
  newsCondensedList,
}: {
  newsCondensedList: Array<NewListResponseData>;
}) {
  return (
    <>
      <WebsiteList />
      <OrgList />
      <ItemList newsCondensedList={newsCondensedList} />
    </>
  );
}
