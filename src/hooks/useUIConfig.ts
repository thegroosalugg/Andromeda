import { clearForm } from '@/store/formSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  const configuredPath = { ...config.default, ...config[pathname] }; // add all default values then overwrite any uniques

  const dispatch = useDispatch(); // this block is unrelated to this hook. It needs to be placed in a high level component...
  useEffect(() => { // ...so that it executes before any path components. Redux form data state requires programmatic resetting
    dispatch(clearForm());
  }, [dispatch, pathname]);

  return { pathname, ...configuredPath };
};

export default useUIConfig;
