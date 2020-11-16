import { Box } from "@material-ui/core"
import React, { ReactNode } from "react"

export function List({ children }: { children: ReactNode }) {
  return (
    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" width="100%">
      {children}
    </Box>
  )
}
