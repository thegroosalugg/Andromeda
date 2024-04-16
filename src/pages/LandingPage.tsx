import { useState } from 'react';
import Modal from '../components/modal/Modal';

export default function LandingPage() {
  const [state, setState] = useState<boolean>(false);

  function toggle() {
    setState((prev) => !prev);
  }

  return (
    <>
      <button onClick={toggle}>CLICK</button>
     {state && <Modal onClose={toggle}>
        HELLO
      </Modal>}
    </>
  );
}
