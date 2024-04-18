import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core'; // Import IconName type

interface BarProps {
  icon: IconName;
  size: number;
  amount: number;
}

// returns a progress bar in font awesome icons of your choice
export const FontAwesomeBar: React.FC<BarProps> = ({ icon, size, amount }) => {
  return (
    <>
      {[...Array(size)].map((_, index) => {
        const rating = index + 1;

        return (
          <FontAwesomeIcon
            key={index}
            icon={[rating <= amount ? 'fas' : 'far', icon]}
          />
        );
      })}
    </>
  );
};
