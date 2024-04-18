import Monster from './Monster';
import css from './MonsterValley.module.css';

export default function MonsterValley() {
  return (
    <div className={css.valley}>
      <Monster />
      <Monster />
    </div>
  );
}
