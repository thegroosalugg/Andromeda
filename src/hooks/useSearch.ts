import { Model } from "@/models/Model";
import SpaceShip from "@/models/SpaceShip";
import User from "@/models/User";
import { RootState } from "@/store/types";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

interface Search {
  ships: SpaceShip[];
  users: User[];
}

export default function useSearch<T extends keyof Search>(
  id: string,
  reducer: keyof RootState,
  slice: T
): Search[T][number] | null {
  const params = useParams();
  const state = useSelector((state: RootState) => state[reducer]);

  return (state as Search)[slice].find((item: Model) => item.id === params[id]) || null;
}
