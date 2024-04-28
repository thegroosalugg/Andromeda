import useSearch from "@/hooks/useSearch";

export default function UserPage() {
  const {
    slugId: userId,
    stateSlice: { user },
  } = useSearch({ slugId: 'userId', reducer: 'users' });

  return <h1>{userId}</h1>
}
