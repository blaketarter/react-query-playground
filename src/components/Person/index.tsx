import { Box, Button, Typography } from "@material-ui/core"
import { ChevronLeft } from "@material-ui/icons"
import React from "react"
import { useHistory, useRouteMatch } from "react-router-dom"
import { usePerson } from "../../utils/API"

export function Person() {
  const history = useHistory()
  const match = useRouteMatch<{ id: string }>()
  const { status, data } = usePerson(match.params.id)

  return (
    <Box textAlign="left" p={4}>
      <Button
        onClick={() => history.push("/people")}
        startIcon={<ChevronLeft />}
      >
        Back
      </Button>
      {status === "success" && data !== undefined ? (
        <Box mt={3}>
          <Typography variant="h4">{data.name}</Typography>
          <pre>
            <code>{JSON.stringify(data, null, 4)}</code>
          </pre>
        </Box>
      ) : null}
    </Box>
  )
}
