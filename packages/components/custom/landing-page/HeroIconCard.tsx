import { Box } from '@app-launch-kit/components/primitives/box';
import { Icon } from '@app-launch-kit/components/primitives/icon';

const HeroIconCard = ({
  icon,
  className,
}: {
  icon: any;
  className: string;
}) => {
  return (
    <Box className={`p-3 rounded-lg bg-background-50 ${className}`}>
      <Icon as={icon} />
    </Box>
  );
};

export default HeroIconCard;
