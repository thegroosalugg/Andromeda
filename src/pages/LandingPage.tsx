import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { uiActions } from '../store/uiSlice';
import { RootState } from '../store/types';
import Modal from '../components/modal/Modal';
import ShipCity from '../components/spaceships/city/ShipCity';
import UFO from '../components/spaceships/UFO';

export default function LandingPage() {
  const dispatch = useDispatch();
  const { modal } = useSelector((state: RootState) => state.ui);

  function openModal() {
    dispatch(uiActions.toggle())
  }

  return (
    <>
      <button onClick={openModal}>CLICK</button>
      {modal && <Modal>HELLO</Modal>}
      <ShipCity />
      <UFO />
    </>
  );
}
