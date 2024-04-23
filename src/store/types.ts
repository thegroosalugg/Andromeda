import SpaceShip from '@/models/SpaceShip';

// should match states in each slice
interface ShipsState {
  ships: SpaceShip[];
}

interface ModalState {
  isOpen: boolean;
}

// should match redux reducers declared in configureStore
export interface RootState {
  ships: ShipsState;
  modal: ModalState;
}
