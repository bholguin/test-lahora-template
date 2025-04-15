import {ContentLayout1} from '../../_components/client-components/content-layout-1';
import HeaderComponent from '../../_components/server-components/common/header.server';
import getPoliticasData from '../../_setup/actions/getPageData';
import {FooterComponent} from '../../_components/server-components/common/footer.server';
import {FC} from 'react';

type Props = {
  params: { slug: string };
};

const Politicas: FC<Props> = async (props) => {
  const {menu, sidebar, freeZone, information, cintillo, footer} =
    await getPoliticasData(props.params.slug ?? '');
  return (
    <>
      <HeaderComponent
        menu={menu}
        sidebar={sidebar}
        tapeTitle="Ediciones"
        cintillo={cintillo}
      >
        <ContentLayout1 desktopWidth='880px'>
          <h1
            className='politicas_h1'
            style={{
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            {information && information[0].info.title}
          </h1>
          <div
            style={{
              fontWeight: '400',
              fontSize: '1rem',
              lineHeight: '1.5rem',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: 'normal',
              paddingBottom: '2.5rem',
            }}
            dangerouslySetInnerHTML={{
              __html: information ? information[0].body.rendered : '',
            }}
          />
        </ContentLayout1>
      </HeaderComponent>
      <FooterComponent
        menu={footer}
        freeZone={freeZone}
      />
    </>
  );
};

export default Politicas;
