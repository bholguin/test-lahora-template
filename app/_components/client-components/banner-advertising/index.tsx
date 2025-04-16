import {BannerResponse} from '@/app/_setup/types/services';
import parse from 'html-react-parser';
import styles from './styles.module.css';

type Props = {
    banners: Array<BannerResponse>
    name: string
}

export const bannersReplace = (bannerLineAd: string) => {
  return (bannerLineAd || '')
    .replaceAll('[section_replace]', '')
    .replaceAll('[tags_replace]', '')
    .replaceAll('[url_replace]', '')
    .replaceAll('[creator_replace]', '');
};

const BannerAdvertising = ({banners, name}: Props) => {
  const banner = banners.find((item) => item.key === name);

  return banner?.show && (
    <div className={styles.content}>
      {banner ? parse(bannersReplace(banner.value)) : ''}
    </div>
  );
};

export default BannerAdvertising;
