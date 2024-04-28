import SpaceShip from '@/models/SpaceShip';
import User from '@/models/User';

interface ShipsState {
  ships: SpaceShip[];
}

interface ModalState {
  isOpen: boolean;
}

interface UserState {
  users: User[];
  user: User | null;
}

export interface RootState {
  ships: ShipsState;
  modal: ModalState;
  users: UserState;
}
