import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { clearForm } from '@/store/formSlice';
import { useDispatch } from 'react-redux';
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
  const [prevPath, setPrevPath] = useState(pathname);
  const backgroundUrl = pathname === '/explore' ? '/wallpaper2.jpg' : '/wallpaper.jpeg'

  // useUIConfig always runs on every route and this useEffect block will clean up components / add additional conditions
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.background = `url(${backgroundUrl}) center/cover no-repeat`; // this changes background for explore page
    setPrevPath(pathname); // record prev path
    dispatch(clearForm()); // clear form on routee swiitch

    document.body.style.overflow = 'hidden'; // disable page scroll temporarily
    const timer = setTimeout(() => {
      document.body.style.overflow = '';
    }, 500);

    return () => {
      clearTimeout(timer); // enable page scroll after delay
    };

  }, [dispatch, pathname, backgroundUrl]);

  return { pathname, prevPath, ...configuredPath };
};

export default useUIConfig;
