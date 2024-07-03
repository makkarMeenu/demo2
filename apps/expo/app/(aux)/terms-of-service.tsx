import ScreenDescription from '@app-launch-kit/components/custom/auth/ScreenDescription';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import React from 'react';

const TermsOfService = () => {
  return (
    <VStack className="bg-background-0 flex-1 p-9">
      <ScreenDescription
        title="Terms of Service"
        description={`All the terms, conditions, and notices contained or referenced herein (the "Terms of Use"), as well as any other written agreement between us and you.`}
      />
    </VStack>
  );
};
export default TermsOfService;
