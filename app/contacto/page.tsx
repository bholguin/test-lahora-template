import {FooterComponent} from '../_components/server-components/common/footer.server';
import HeaderComponent from '../_components/server-components/common/header.server';
import getLayoutData from '../_setup/actions/getContactoData';
import {ContactFrom} from '../_components/server-components/contacto/form-contacto/form.server';
import {ContactInfoServer} from '../_components/server-components/contacto/contacto-list/contact.info.server';
import {ContentLayout1} from '../_components/client-components/content-layout-1';

const Contacto = async () => {
  const {menu, sidebar, freeZone, contactInfo, cintillo, footer} =
    await getLayoutData();

  return (
    <>
      <HeaderComponent
        menu={menu}
        sidebar={sidebar}
        tapeTitle="Ediciones"
        cintillo={cintillo}
      >
        <ContentLayout1 desktopWidth='880px'>
          <ContactFrom />
          <ContactInfoServer data={contactInfo?.data ?? []}/>
        </ContentLayout1>
      </HeaderComponent>
      <FooterComponent
        freeZone={freeZone}
        menu={footer}
      />
    </>
  );
};

export default Contacto;
