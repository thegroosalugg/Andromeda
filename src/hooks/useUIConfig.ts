import { useLocation } from 'react-router-dom';

interface Config {
  [pathname: string]: { background?: string; text: string };
}
// prettier-ignore
const config: Config = {
     default: { text: '', background: '#00000000', },
         '/': { text: 'Welcome to Andromeda' },
    '/store': { text: 'Out of this World Fashion' },
    '/ships': { text: 'Omega Collection', background: '#232728f9' },
  '/explore': { text: 'Exploring the Galaxy' },
     '/user': { text: 'Space Portal', background: '#274046F9' }
};

const useUIConfig = () => {
  const { pathname } = useLocation();
  const key = pathname.startsWith('/user') ? '/user' : pathname
  const configuredPath = { ...config.default, ...config[key] }; // add all default values then overwrite any uniques
  return { pathname, ...configuredPath };
};

export default useUIConfig;
