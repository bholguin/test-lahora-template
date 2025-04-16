'use client';
import {BannerResponse} from '@/app/_setup/types/services';
import parse from 'html-react-parser';
import styles from '@/app/_components/client-components/banner-advertising/styles.module.css';
import {bannersReplace} from '@/app/_components/client-components/banner-advertising';

type Props = {
    banners: Array<BannerResponse>
    name: string
}

const BannerClient = ({banners, name}: Props) => {
  const banner = banners.find((item) => item.key === name);

  return banner?.show && (
    <div className={styles.content}>
      {banner ? parse(bannersReplace(banner.value)) : ''}
    </div>
  );
};

export default BannerClient;
