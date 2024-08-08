import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core'; // Import IconName type

interface BarProps {
    icon: IconName;
  length: number;
  rating: number;
}

// returns a progress bar in font awesome icons of your choice
export const RatingBar: React.FC<BarProps> = ({ icon, length, rating }) => {
  return (
    <>
      {[...Array(length)].map((_, index) => (
        <FontAwesomeIcon
          key={index}                // full   empty
          icon={[rating >= index + 1 ? 'fas' : 'far', icon]}
        />
      ))}
    </>
  );
};
