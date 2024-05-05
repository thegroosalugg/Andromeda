import Form from '@/components/form/Form';
import SignUpLogo from '@/pageContent/portal/SignUpLogo';
import UserPortal from '@/pageContent/portal/UserPortal';
import { RootState } from '@/store/types';
import { useSelector } from 'react-redux';

export default function UserPage() {
  const { user } = useSelector((state: RootState) => state.users);

  let page;

  if (user) {
    page = <UserPortal {...user} />;
  } else {
    page = (
      <>
        <SignUpLogo />
        <Form />
      </>
    );
  }

  return page;
}
