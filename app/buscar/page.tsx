import {FC} from 'react';
import {ContentLayout1} from '../_components/client-components/content-layout-1';
import {SearchSection} from '../_components/server-components/buscar/search.section.server';
import {FooterComponent} from '../_components/server-components/common/footer.server';
import HeaderComponent from '../_components/server-components/common/header.server';
import getBuscarData from '../_setup/actions/getBuscarData';
import Section from '../_components/client-components/section';
import {NewsContent} from '../_components/client-components/content/news-content';
import {SectionCard} from '../_components/client-components/cards/section-card-1';

type Props = {
  searchParams: { query: string };
};

const Buscar: FC<Props> = async (props) => {
  const query = props.searchParams.query;

  const {menu, sidebar, searchData, freeZone, cintillo, footer} =
    await getBuscarData(query);

  return (
    <>
      <HeaderComponent
        menu={menu}
        sidebar={sidebar}
        tapeTitle="Ediciones"
        cintillo={cintillo}
      >
        <SearchSection
          query={props.searchParams.query ?? ''}
          hasContent={!!searchData}
        />
        {searchData && (
          <div style={{marginBottom: '1.5rem'}}>
            <ContentLayout1>
              {Array.isArray(searchData?.search?.data.data) &&
                searchData.search.data.data.length > 0 && (
                <NewsContent>
                  {Array.isArray(searchData?.search.data.data) &&
                      searchData.search.data.data.map((item, index) => (
                        <SectionCard key={index} {...item} rounded />
                      ))}
                </NewsContent>
              )}
              {searchData?.lastNews?.data && query !== '' && (
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginBottom: '2.5rem',
                    gap: '2rem',
                  }}
                >
                  <p
                    style={{
                      fontWeight: '800',
                      width: '100%',
                      fontSize: '18px',
                      lineHeight: '26px',
                      textAlign: 'center',
                    }}
                  >
                    No se encontraron resultados con tu búsqueda.
                  </p>
                  <Section title={'Ultimas Noticias'}>
                    <NewsContent>
                      {Array.isArray(searchData?.lastNews.data.data) &&
                        searchData.lastNews.data.data.map((item, index) => (
                          <SectionCard key={index} {...item} rounded />
                        ))}
                    </NewsContent>
                  </Section>
                </div>
              )}
            </ContentLayout1>
          </div>
        )}
      </HeaderComponent>
      <FooterComponent menu={footer} freeZone={freeZone} />
    </>
  );
};

export default Buscar;
