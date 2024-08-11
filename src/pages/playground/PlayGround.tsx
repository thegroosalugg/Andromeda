import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import useDeviceOrientation from '@/hooks/useDeviceOrientation';
import css from './PlayGround.module.css';

const animate = {
  layout: true,
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  transition: { duration: 1 },
};

const Box = ({
  children,
  onClick,
  background,
}: {
  children: React.ReactNode;
  onClick: () => void;
  background: string;
}) => {
  return (
    <motion.div className={css.solo} style={{ background }} {...animate} onClick={onClick}>
      <span>{children}</span>
    </motion.div>
  );
};

export default function PlayGround() {
  const [active, setActive] = useState(0);
  const [chars, setChars] = useState(['A', 'B', 'C', 'D']);
  const [digits, setDigits] = useState(['13', '17', '18', '21']);
  const isLandscape = useDeviceOrientation();
  const flexDirection = isLandscape ? 'row' : 'column';

  function reset() {
    setActive(0);
    setChars(['A', 'B', 'C', 'D']);
    setDigits(['13', '17', '18', '21']);
  }

  function charHandler(char: string) {
    if (active !== 0) {
      setChars([char]);
    }
  }

  function digitHandler(digit: string) {
    if (active !== 0) {
      setDigits([digit]);
    }
  }

  return (
    <>
      <div
        style={{ height: '20px', border: '1px solid black', background: 'black' }}
        onClick={reset}
      />
      <section className={css.playground} style={{ flexDirection }}>
        <AnimatePresence>
          {(active === 0 || active === 1) && (
            <Box key='1' onClick={() => setActive(1)} background='#b7b061'>
              First
            </Box>
          )}
          {(active === 0 || active === 2) && (
            <motion.div
              key='2'
              className={css.two}
              onClick={() => setActive(2)}
              style={{ flexDirection }}
              {...animate}
            >
              <AnimatePresence>
                {chars.map((char) => (
                  <motion.div key={char} {...animate} onClick={() => charHandler(char)}>
                    <span>{char}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
          {(active === 0 || active === 3) && (
            <Box key='3' onClick={() => setActive(3)} background='#a6b761'>
              THIRD
            </Box>
          )}
          {(active === 0 || active === 4) && (
            <motion.div
              key='4'
              className={css.four}
              onClick={() => setActive(4)}
              style={{ flexDirection }}
              {...animate}
            >
              {/* <AnimatePresence> */}
              {digits.map((digit) => (
                <motion.div key={digit} {...animate} onClick={() => digitHandler(digit)}>
                  <span>{digit}</span>
                </motion.div>
              ))}
              {/* </AnimatePresence> */}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
