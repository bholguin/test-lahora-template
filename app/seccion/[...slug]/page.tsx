import {ContentLayout1} from '@/app/_components/client-components/content-layout-1';
import Section from '@/app/_components/client-components/section';
import {FooterComponent} from '@/app/_components/server-components/common/footer.server';
import HeaderComponent from '@/app/_components/server-components/common/header.server';
import Schemas from '@/app/_components/server-components/schemas/pages/default';
import {SectionServerComponent} from '@/app/_components/server-components/seccion/section.server';
import getSectionData from '@/app/_setup/actions/getSectionData';

type Props = {
  params: { slug: Array<string> };
};

const Seccion = async (props: Props) => {
  const page = props.params.slug.length === 3 ? props.params.slug[2] : 1;
  const {
    menu,
    sidebar,
    listSection,
    currentPage,
    freeZone,
    cintillo,
    banners,
    footer,
    ranking,
  } = await getSectionData(props.params.slug[0], Number(page));

  return (
    <>
      <Schemas newsCondensedList={listSection?.data || []} />
      {/*       <FormatScripts
        headscripts={
          banners.find((item) => item.key === 'headscripts')?.value ?? ''
        }
        bodybefore={
          banners.find((item) => item.key === 'bodybefore')?.value ?? ''
        }
      /> */}
      <HeaderComponent
        menu={menu}
        tapeTitle="Ediciones"
        sidebar={sidebar}
        cintillo={cintillo}
      >
        <ContentLayout1>
          <Section title={listSection?.entity.description ?? ''} isTitle>
            <SectionServerComponent
              slug={props.params.slug[0]}
              currentPage={currentPage}
              option={process.env.SECTION_OPTION ?? ''}
              data={listSection?.data ?? []}
              banners={banners}
              ranking={ranking}
              NEWS_PER_SECTION={Number(process.env.NEWS_PER_SECTION)}
              PAGINATION_MAX_PAGES={Number(process.env.PAGINATION_MAX_PAGES)}
            />
          </Section>
        </ContentLayout1>
      </HeaderComponent>
      <FooterComponent freeZone={freeZone} menu={footer} />
    </>
  );
};

export default Seccion;
