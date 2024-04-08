import { ExpoConfig, ConfigContext } from "expo/config";

import { SchemaEnv } from "./env";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "expo-app",
  slug: "expo-app",
  extra: {
    ...config?.extra,
    ...SchemaEnv,
  },
});
