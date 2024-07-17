import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useClearModal from './useClearModal';

interface Config {
  [pathname: string]: { background?: string; borderBottom?: string; text: string };
}
// prettier-ignore
const config: Config = {
     default: { background: '#00000000', borderBottom: '2px solid white', text: '' },
         '/': { borderBottom: 'none', text: 'Welcome to Andromeda' },
    '/store': { background: '#252324F3', borderBottom: 'none', text: 'Out of this World Fashion' },
    '/ships': { background: '#232728F9', text: 'Omega Collection' },
  '/explore': { background: '#1b1f3ba9', text: 'Exploring the Galaxy' },
     '/user': { background: '#274046F9', text: 'Space Portal' }
};

const useUIConfig = () => {
  const { pathname } = useLocation();
  const configuredPath = { ...config.default, ...config[pathname] }; // add all default values then overwrite any uniques
  const backgroundUrl = pathname === '/explore' ? '/wallpaper2.jpg' : '/wallpaper.jpeg'

  const clearModal = useClearModal() // this block is unrelated to this hook. It needs to be placed in a high level component...
  useEffect(() => { // ...so that it executes before any path components. Redux Modal & FormData states require programmatic cleaning
    document.body.style.background = `url(${backgroundUrl}) center/cover no-repeat`; // this changes background for explore page

    clearModal();
  }, [clearModal, pathname, backgroundUrl]);

  return { pathname, ...configuredPath };
};

export default useUIConfig;
