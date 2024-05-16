import { clearForm } from '@/store/formSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

interface Config {
  [pathname: string]: { background?: string; borderBottom?: string; text: string };
}
// prettier-ignore
const config: Config = {
     default: { background: '#00000000', borderBottom: '2px solid white', text: '' },
         '/': { borderBottom: 'none', text: 'Welcome to Andromeda' },
    '/store': { background: '#252324F3', borderBottom: 'none', text: 'Out of this World Fashion' },
    '/ships': { background: '#232728F9', text: 'Omega Collection' },
  '/explore': { background: '#56632fCC', text: 'Exploring the Galaxy' },
     '/user': { background: '#274046F9', text: 'Space Portal' }
};

const useUIConfig = () => {
  const { pathname } = useLocation();
  const configuredPath = { ...config.default, ...config[pathname] }; // add all default values then overwrite any uniques

  const dispatch = useDispatch(); // this block is unrelated to this hook. It needs to be placed in a high level component...
  useEffect(() => { // ...so that it executes before any path components. Redux form data state requires programmatic resetting
    dispatch(clearForm());
  }, [dispatch, pathname]);

  return { pathname, ...configuredPath };
};

export default useUIConfig;
