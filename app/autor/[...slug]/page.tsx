import AutorComponent from '@/app/_components/server-components/autor/autor.server';
import {FooterComponent} from '@/app/_components/server-components/common/footer.server';
import HeaderComponent from '@/app/_components/server-components/common/header.server';
import getAutorData from '@/app/_setup/actions/getAutorData';
import {FC} from 'react';

type Props = {
  params: { slug: Array<string> };
};

const Autor: FC<Props> = async (props) => {
  const page = props.params.slug.length === 3 ? props.params.slug[2] : 1;
  const {menu, sidebar, listAutor, autor, freeZone, cintillo, banners, footer} =
    await getAutorData(props.params.slug[0], Number(page));

  return (
    <>
      {/* <FormatScripts
        headscripts={
          banners.find((item) => item.key === 'headscripts')?.value ?? ''
        }
        bodybefore={
          banners.find((item) => item.key === 'bodybefore')?.value ?? ''
        }
      /> */}

      <HeaderComponent
        menu={menu}
        sidebar={sidebar}
        tapeTitle="Ediciones"
        cintillo={cintillo}
      >
        <AutorComponent
          page={Number(page)}
          option={process.env.AUTOR_HEADER_OPTION ?? ''}
          autor={autor ?? []}
          data={listAutor?.data ?? []}
          banners={banners}
        />
      </HeaderComponent>
      <FooterComponent
        menu={footer}
        freeZone={freeZone}
      />
    </>
  );
};
export default Autor;
