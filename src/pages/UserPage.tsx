import useSearch from "@/hooks/useSearch";
import UserPortal from "@/pageContent/portal/UserPortal";

export default function UserPage() {
  const { stateSlice: { user } } = useSearch({ slugId: 'userId', reducer: 'users' });

  let page;

  if (user) {
    page = <UserPortal {...user} />
  } else {
    page = <h1>NO USER FOUND</h1>
  }

  return page
}
