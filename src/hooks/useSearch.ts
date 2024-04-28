import { RootState } from "@/store/types";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function useSearch(id: string, reducer: keyof RootState, slice: string) {
  const params = useParams();
  const state = useSelector((state: RootState) => state[reducer]);

  return state[slice].find((item) => item.id === params[id]);
}
