import {
  Box,
  CardContent,
  CardProps,
  Card as MUICard,
  Typography,
} from "@material-ui/core"
import React from "react"

type Props = CardProps & { header: string }

export function Card({ children, header, ...props }: Props) {
  return (
    <Box m={2}>
      <MUICard variant="outlined" {...props}>
        <CardContent>
          <Box textAlign="left">
            <Typography variant="h4">{header}</Typography>
            {children}
          </Box>
        </CardContent>
      </MUICard>
    </Box>
  )
}
