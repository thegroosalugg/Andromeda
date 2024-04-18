import { useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { uiActions } from '../store/uiSlice';
import { RootState } from '../store/types';
import Modal from '../components/modal/Modal';
import ShipCity from '../components/animations/ship/ShipCity';

export default function LandingPage() {
  const dispatch = useDispatch();
  const { modal } = useSelector((state: RootState) => state.ui);

  function openModal() {
    dispatch(uiActions.toggle());
  }

  return (
    <>
      <button onClick={openModal}>CLICK</button>
      <ShipCity />
      <AnimatePresence>{modal && <Modal>HELLO</Modal>}</AnimatePresence>
    </>
  );
}
