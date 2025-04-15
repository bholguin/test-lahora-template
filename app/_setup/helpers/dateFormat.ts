import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es';
dayjs.extend(relativeTime);

export const formatDate = (date: number) => {
  return `${dayjs(date)
    .locale('es').format('DD MMMM YYYY')}`;
};
