import Form from '@/components/form/Form';
import useSearch from '@/hooks/useSearch';
import SignUpLogo from '@/pageContent/portal/SignUpLogo';
import UserPortal from '@/pageContent/portal/UserPortal';

export default function UserPage() {
  const { stateSlice: { user } } = useSearch({ slugId: 'userId', reducer: 'users' });

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
