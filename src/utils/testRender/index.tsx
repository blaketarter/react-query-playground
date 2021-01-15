import { RenderOptions, queries, render } from "@testing-library/react"
import React, { ReactElement, ReactNode } from "react"
import { ReactQueryCacheProvider } from "react-query"
import { noCache } from "../API"

const TestProviders = ({ children }: { children?: ReactNode }) => {
  return (
    <ReactQueryCacheProvider queryCache={noCache}>
      {children}
    </ReactQueryCacheProvider>
  )
}

export const testRender = (
  ui: ReactElement,
  options?:
    | Pick<
        RenderOptions<typeof queries>,
        "container" | "baseElement" | "hydrate" | "wrapper"
      >
    | undefined,
) => render(ui, { wrapper: TestProviders, ...options })
