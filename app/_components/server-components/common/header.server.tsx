import Header1 from '../../client-components/headers/header-1';
import {MenuResponse} from '@/app/_setup/types/services';
import {FC, ReactNode} from 'react';
import Header2 from '../../client-components/headers/header-2';
import {NewListResponse} from '@/app/_setup/types/new-list-response';

type Props = {
  menu: Array<MenuResponse>;
  sidebar: Array<MenuResponse>;
  alertZone?: NewListResponse;
  cintillo?: Array<MenuResponse>;
  socialIcons?:boolean;
  children: ReactNode;
  tapeTitle?: string
};

const HeaderComponent: FC<Props> = async ({
  menu,
  alertZone,
  children,
  sidebar,
  cintillo,
  tapeTitle,
  socialIcons = true,
}) => {
  switch (process.env.HEADER_OPTION) {
  case 'op1':
    return (
      <Header1
        sidebar={sidebar}
        alertZone={alertZone}
        menuText="Menú"
        editionText="Periódico Digital"
        menu={menu}
        cintillo={cintillo}
        socialIcons={socialIcons}
        tapeTitle={tapeTitle}
      >
        {children}
      </Header1>
    );
  case 'op2':
    return <Header2 sidebar={sidebar} socialIcons={socialIcons} cintillo={cintillo} tapeTitle={tapeTitle}>{children}</Header2>;
  default:
    return <></>;
  }
};

export default HeaderComponent;
