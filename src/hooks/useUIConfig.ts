import { useLocation } from 'react-router-dom';

interface Config {
  [pathname: string]: { background?: string; text: string };
}
// prettier-ignore
const config: Config = {
     default: { text: '', background: '#00000000', },
         '/': { text: 'Welcome to Andromeda' },
    '/store': { text: 'Fashion out of this World' },
    '/ships': { text: 'Beyond Earth: Unveiling our Spaceships', background: '#232728f9' },
  '/explore': { text: 'Explore the Galaxy' },
};

const useUIConfig = () => {
  const { pathname } = useLocation();
  const configuredPath = { ...config.default, ...config[pathname] }; // add all default values then overwrite any uniques

  console.clear(); // log & clear

  return { pathname, ...configuredPath };
};

export default useUIConfig;
