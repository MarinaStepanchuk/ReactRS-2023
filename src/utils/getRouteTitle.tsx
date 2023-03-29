import { Paths } from '../constants/common.constants';

const getRouteTitle = (): string => {
  const url = location.pathname;
  return Object.values(Paths).find((item) => item.path === url)?.title || '';
};

export default getRouteTitle;
