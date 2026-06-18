import type { OpenClawPluginApi } from "openclaw/plugin-sdk/core";
import {
  kPluginDescription,
  kPluginId,
  kPluginName,
  MilocoPluginConfigSchema,
} from "./config.js";
import { registerHomeProfile } from "./home-profile/index.js";
import { registerHooks } from "./hooks/index.js";
import { registerServices } from "./services/index.js";
import { registerNotifyTool } from "./tools/notify.js";
import { logger } from "./utils/logger.js";
import { registerHttpRoutes } from "./webhooks/index.js";

export default {
  id: kPluginId,
  name: kPluginName,
  description: kPluginDescription,
  configSchema: MilocoPluginConfigSchema,
  register(api: OpenClawPluginApi) {
    logger.init(api);

    // 注册相关服务和扩展
    registerServices(api);
    registerHooks(api);
    registerHttpRoutes(api);
    registerHomeProfile(api);
    registerNotifyTool(api);
  },
};
