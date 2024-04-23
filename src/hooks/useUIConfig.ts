import { useLocation } from 'react-router-dom';

interface Config {
  [pathname: string]: { background: string; text: string };
}
// prettier-ignore
const config: Config = {
    default:  { background: '#7d7d7d00', text: '' },
         '/': { background: '#7d7d7d00', text: 'Welcome to Andromeda' },
    '/store': { background: '#7d7d7d00', text: 'Fashion out of this World' },
    '/ships': { background: '#232728f9', text: 'Beyond Earth: Unveiling our Spaceships' },
  '/explore': { background: '#7d7d7d00', text: 'Explore the Galaxy' },
};

const useUIConfig = () => {
  const { pathname } = useLocation();
  const configuredPath = config[pathname] || config.default

  console.clear(); console.log('find me in /hooks', configuredPath); // log & clear

  return { pathname, ...configuredPath };
};

export default useUIConfig;
