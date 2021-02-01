import "loki/configure-react"
import { ReactQueryCacheProvider } from "react-query";
import "../src/index.css"
import { worker } from "../src/mocks/browser"
import { noCache } from "../src/utils/API";

worker.start()

export const decorators = [
  (Story) => (
    <ReactQueryCacheProvider queryCache={noCache}>
      <Story />
    </ReactQueryCacheProvider>
  ),
];