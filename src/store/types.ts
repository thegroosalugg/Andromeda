import SpaceShip from '@/models/SpaceShip';

interface ShipsState {
  ships: SpaceShip[];
}

interface UIState {
  modal: boolean;
}

export interface RootState {
  ships: ShipsState;
  ui: UIState;
}
