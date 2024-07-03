import { Box } from '../primitives/box';
import { Spinner } from '../primitives/spinner';

export const Loading = () => {
  return (
    <Box className="h-screen w-screen justify-center items-center">
      <Spinner />
    </Box>
  );
};
