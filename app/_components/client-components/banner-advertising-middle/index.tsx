import {BannerResponse} from '@/app/_setup/types/services';
import './banner.css';
import parse from 'html-react-parser';

type Props = {
    banners: Array<BannerResponse>;
    index: number;
};

const bannersReplace = (bannerLineAd: string) => {
  return (bannerLineAd || '')
    .replaceAll('[section_replace]', '')
    .replaceAll('[tags_replace]', '')
    .replaceAll('[url_replace]', '')
    .replaceAll('[creator_replace]', '');
};

const BannerAdvertisingMiddle = ({banners, index}: Props) => {
  const bannerDesk = banners.find((item) => item.key === `billboard_${index}`);
  const bannerTablet = banners.find((item) => item.key === `leaderboard_${index}`);
  const bannerMobile = banners.find((item) => item.key === `rectangle_middle_${index}`);

  return (
    <div className="banner-container">
      {bannerDesk && bannerDesk.show ? parse(bannersReplace(bannerDesk.value)) : ''}
      {bannerTablet && bannerTablet.show ? parse(bannersReplace(bannerTablet.value)) : ''}
      {bannerMobile && bannerMobile.show ? parse(bannersReplace(bannerMobile.value)) : ''}
    </div>
  );
};

export default BannerAdvertisingMiddle;
