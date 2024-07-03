import {
  Button,
  ButtonText,
} from "@app-launch-kit/components/primitives/button";
import { useRouter } from "@unitools/router";
import React from "react";

import ScreenDescription from "./ScreenDescription";

import config from "@app-launch-kit/config";

const LinkExpiredScreen = () => {
  const { navigationLinks } = config;
  const router = useRouter();
  return (
    <>
      <ScreenDescription
        title="Session Timeout"
        description="The link you're attempting to use has expired. Please sign in again to verify your identity. "
      />

      <Button
        onPress={() => {
          router.push(`/${navigationLinks.signIn}`);
        }}
      >
        <ButtonText>Re-authenticate</ButtonText>
      </Button>
    </>
  );
};

export default LinkExpiredScreen;
