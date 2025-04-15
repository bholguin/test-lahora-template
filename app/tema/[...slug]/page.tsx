import {SectionCard} from '@/app/_components/client-components/cards/section-card-1';
import {NewsContent} from '@/app/_components/client-components/content/news-content';
import {NextPrev} from '@/app/_components/client-components/next-prev';
import {FooterComponent} from '@/app/_components/server-components/common/footer.server';
import HeaderComponent from '@/app/_components/server-components/common/header.server';
import Schemas from '@/app/_components/server-components/schemas/pages/default';
import TagComponent from '@/app/_components/server-components/tag/tag.server';
import getTagData from '@/app/_setup/actions/getTagData';
import {FC} from 'react';
import {ContentLayoutTema} from '@/app/_components/server-components/tema/content-layout-tema.server';

type Props = {
  params: { slug: Array<string> };
};

const Tags: FC<Props> = async (props) => {
  const tagId = /([t][0-9]{4})\w+/.exec(props.params.slug[0]);
  const t = tagId && tagId?.length > 0 ? tagId[0].replace('t', '') : '';
  const page = props.params.slug.length === 3 ? props.params.slug[2] : 1;
  const {menu, sidebar, listTags, freeZone, cintillo, footer} =
    await getTagData(t, Number(page));
  return (
    <>
      <Schemas newsCondensedList={listTags?.data || []} />
      <HeaderComponent
        menu={menu}
        sidebar={sidebar}
        tapeTitle="Ediciones"
        cintillo={cintillo}
      >
        <ContentLayoutTema>
          <TagComponent
            entity={listTags?.entity}
            option={process.env.TAG_HEADER_OPTION ?? ''}
          />
          <NewsContent
            paginatorComponent={
              <NextPrev
                currentPage={Number(page)}
                maxPages={Number(process.env.PAGINATION_MAX_PAGES)}
                showNext={
                  !(
                    (listTags?.data.length ?? 0) <
                    Number(process.env.NEWS_PER_SECTION)
                  )
                }
              />
            }
          >
            {Array.isArray(listTags?.data) &&
              listTags.data.map((item, index) => (
                <SectionCard key={index} {...item} rounded />
              ))}
          </NewsContent>
        </ContentLayoutTema>
      </HeaderComponent>
      <FooterComponent freeZone={freeZone} menu={footer} />
    </>
  );
};
export default Tags;
