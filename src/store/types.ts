import SpaceShip from '../models/SpaceShip';

interface ShipsState {
  ships: SpaceShip[];
}

export interface RootState {
  ships: ShipsState;
}
