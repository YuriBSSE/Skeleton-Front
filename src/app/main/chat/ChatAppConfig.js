import { lazy } from "react";
import { authRoles } from "app/auth";


const ChatApp = lazy(() => import("./ChatApp"));

const ChatAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.user,
  routes: [
    {
      path: "/apps/chat",
      element: <ChatApp></ChatApp>,
    },
  ],
};

export default ChatAppConfig;
